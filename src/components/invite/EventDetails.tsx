import { eventConfig } from "@/config/event";
import { Reveal } from "./Reveal";

export function EventDetails() {
  return (
    <section className="px-6 pt-24 pb-6 text-center sm:pt-32">
      <Reveal>
        <p className="text-[0.58rem] uppercase tracking-luxe text-gold/80 sm:text-[0.66rem]">
          Você está convidado(a)
        </p>
      </Reveal>

      <Reveal delay={140}>
        <h2 className="mt-6 font-display text-[2.6rem] font-light leading-[1.05] tracking-wide text-gold-gradient sm:text-6xl">
          {eventConfig.eventName}
        </h2>
      </Reveal>

      <Reveal delay={260}>
        <div className="gold-rule mx-auto mt-8 w-28" />
      </Reveal>

      <Reveal delay={360}>
        <p className="mx-auto mt-8 max-w-sm font-display text-lg font-light italic leading-relaxed text-white/70 sm:max-w-md sm:text-xl">
          Uma noite preparada com carinho para reunir pessoas especiais ao redor da
          mesa.
        </p>
      </Reveal>
    </section>
  );
}
