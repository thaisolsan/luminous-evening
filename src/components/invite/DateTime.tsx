import { CalendarDays, Clock } from "lucide-react";
import { eventConfig } from "@/config/event";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: CalendarDays,
    label: "Data",
    value: eventConfig.eventDateLabel,
  },
  {
    icon: Clock,
    label: "Horário",
    value: eventConfig.eventTime,
  },
];

export function DateTime() {
  return (
    <section className="px-6 py-16">
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 150}>
            <div className="card-luxe group flex h-full flex-col items-center rounded-2xl px-6 py-9 text-center transition-all duration-500 hover:border-gold/45 hover:shadow-[0_0_46px_-18px_rgba(212,175,55,0.5)]">
              <item.icon
                className="h-5 w-5 text-gold transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              />
              <p className="mt-5 text-[0.55rem] uppercase tracking-luxe text-gold/75">
                {item.label}
              </p>
              <p className="mt-4 font-display text-2xl font-light tracking-wide text-white/90 sm:text-[1.7rem]">
                {item.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
