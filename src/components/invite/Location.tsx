import { MapPin, ExternalLink } from "lucide-react";
import { eventConfig, mapsEmbedUrl } from "@/config/event";
import { Reveal } from "./Reveal";
import { GoldButton } from "./GoldButton";

export function Location() {
  return (
    <section className="px-6 py-16 text-center">
      <Reveal>
        <p className="text-[0.55rem] uppercase tracking-luxe text-gold/75 sm:text-[0.62rem]">
          Onde vamos nos encontrar
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-8 flex items-center justify-center gap-2">
          <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          <h3 className="font-display text-2xl font-light tracking-wide text-white/90 sm:text-3xl">
            {eventConfig.venueName}
          </h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          {eventConfig.venueAddress}
          <br />
          {eventConfig.venueCity}
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="card-luxe mt-9 overflow-hidden rounded-2xl p-1.5">
          <iframe
            title={`Mapa de ${eventConfig.venueName}`}
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-56 w-full rounded-xl border-0 opacity-90 grayscale-[35%] transition-all duration-700 hover:opacity-100 hover:grayscale-0 sm:h-72"
          />
        </div>
      </Reveal>

      <Reveal delay={340}>
        <div className="mt-7">
          <GoldButton
            as="a"
            href={eventConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            className="sm:w-auto"
          >
            Abrir no Google Maps
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </GoldButton>
        </div>
      </Reveal>
    </section>
  );
}
