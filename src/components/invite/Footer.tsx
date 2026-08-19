import { eventConfig } from "@/config/event";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="px-6 pb-16 pt-6 text-center">
      <Reveal>
        <div className="gold-rule mx-auto w-20" />
        <p className="mt-8 font-display text-2xl font-light tracking-wide shimmer-text sm:text-3xl">
          Esperamos você! 🥂
        </p>
        <p className="mt-5 text-[0.5rem] uppercase tracking-[0.3em] text-white/35">
          {eventConfig.eventName} · {eventConfig.eventDateLabel}
        </p>
      </Reveal>
    </footer>
  );
}
