import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { eventConfig } from "@/config/event";
import { Sparkles } from "@/components/invite/Sparkles";
import { OpeningScreen } from "@/components/invite/OpeningScreen";
import { EventDetails } from "@/components/invite/EventDetails";
import { DateTime } from "@/components/invite/DateTime";
import { Countdown } from "@/components/invite/Countdown";
import { Location } from "@/components/invite/Location";
import { Confirmation } from "@/components/invite/Confirmation";
import { MusicPlayer } from "@/components/invite/MusicPlayer";
import { Footer } from "@/components/invite/Footer";

const title = `${eventConfig.eventName} · Convite Digital`;
const description = `Você está convidado(a) para o ${eventConfig.eventName} em ${eventConfig.eventDateLabel}, às ${eventConfig.eventTime}, no ${eventConfig.venueName}. Confirme sua presença.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setClosing(true);
    window.setTimeout(() => setOpened(true), 900);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Sparkles />

      {!opened && <OpeningScreen onOpen={handleOpen} closing={closing} />}

      <div
        className={`relative z-10 mx-auto w-full max-w-xl transition-opacity duration-1000 ${
          opened ? "opacity-100" : "opacity-0"
        }`}
      >
        <EventDetails />
        <Countdown />
        <DateTime />
        <Location />
        <Confirmation />
        <Footer />
      </div>

      <MusicPlayer visible={opened} />
    </main>
  );
}
