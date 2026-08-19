import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { eventConfig } from "@/config/event";

/** Música ambiente opcional. Nunca inicia sem interação e nunca quebra se o arquivo não existir. */
export function MusicPlayer({ visible }: { visible: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const audio = new Audio(eventConfig.musicUrl);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "none";
    const onError = () => {
      setUnavailable(true);
      setPlaying(false);
    };
    audio.addEventListener("error", onError);
    audioRef.current = audio;
    return () => {
      audio.removeEventListener("error", onError);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        setUnavailable(true);
        setPlaying(false);
      });
  };

  if (!visible || unavailable) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? "Desativar música ambiente" : "Ativar música ambiente"}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-gold/45 bg-background/80 px-4 py-3 text-[0.55rem] uppercase tracking-[0.24em] text-champagne backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-gold hover:text-gold-light hover:shadow-[0_0_30px_-8px_rgba(212,175,55,0.6)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {playing ? (
        <Volume2 className="h-4 w-4" aria-hidden="true" />
      ) : (
        <VolumeX className="h-4 w-4" aria-hidden="true" />
      )}
      <span className="hidden sm:inline">Música</span>
    </button>
  );
}
