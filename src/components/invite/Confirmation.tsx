import { Wine } from "lucide-react";
import { whatsappUrl } from "@/config/event";
import { Reveal } from "./Reveal";
import { GoldButton } from "./GoldButton";

export function Confirmation() {
  return (
    <section className="px-6 py-16">
      <Reveal>
        <div className="card-luxe relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(212,175,55,0.16),transparent_65%)]"
          />
          <div className="relative">
            <Wine className="mx-auto h-5 w-5 text-gold" aria-hidden="true" />
            <h3 className="mt-6 font-display text-[2rem] font-light leading-tight tracking-wide text-gold-gradient sm:text-4xl">
              Vai ser uma noite especial
            </h3>
            <p className="mx-auto mt-5 max-w-xs font-display text-lg font-light italic text-white/70 sm:max-w-sm sm:text-xl">
              Esperamos você para compartilhar essa noite conosco.
            </p>
            <div className="mt-10">
              <GoldButton
                as="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                pulse
                className="py-5 text-[0.72rem] tracking-[0.3em]"
              >
                Confirmar presença
              </GoldButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
