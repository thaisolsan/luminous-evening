import { useEffect, useState } from "react";
import { eventConfig } from "@/config/event";
import { Reveal } from "./Reveal";

const target = new Date(eventConfig.eventDate).getTime();

function diff() {
  return Math.max(0, target - Date.now());
}

export function Countdown() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    setRemaining(diff());
    const id = setInterval(() => setRemaining(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const parts =
    remaining === null
      ? null
      : [
          { label: "Dias", value: Math.floor(remaining / 86400000) },
          { label: "Horas", value: Math.floor((remaining / 3600000) % 24) },
          { label: "Minutos", value: Math.floor((remaining / 60000) % 60) },
          { label: "Segundos", value: Math.floor((remaining / 1000) % 60) },
        ];

  return (
    <section className="px-6 py-14 text-center">
      <Reveal>
        <p className="text-[0.55rem] uppercase tracking-luxe text-gold/75">
          Contagem regressiva
        </p>
      </Reveal>

      <Reveal delay={140}>
        {remaining === 0 ? (
          <p className="mt-8 font-display text-4xl font-light tracking-wide shimmer-text sm:text-5xl">
            É HOJE! 🥂
          </p>
        ) : (
          <div
            aria-live="polite"
            className="mt-8 grid grid-cols-4 gap-2 sm:gap-4"
          >
            {(parts ?? [
              { label: "Dias", value: 0 },
              { label: "Horas", value: 0 },
              { label: "Minutos", value: 0 },
              { label: "Segundos", value: 0 },
            ]).map((p) => (
              <div
                key={p.label}
                className="card-luxe rounded-xl px-1 py-5 sm:py-6"
              >
                <p className="font-display text-3xl font-light tabular-nums text-gold-light sm:text-4xl">
                  {String(p.value).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[0.45rem] uppercase tracking-[0.24em] text-white/55 sm:text-[0.55rem]">
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
