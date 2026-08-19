import { GoldButton } from "./GoldButton";

export function OpeningScreen({
  onOpen,
  closing,
}: {
  onOpen: () => void;
  closing: boolean;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center transition-all duration-1000 ease-out ${
        closing ? "pointer-events-none scale-[1.04] opacity-0" : "opacity-100"
      }`}
      style={{ background: "#0b0b0b" }}
    >
      <div
        aria-hidden="true"
        className="animate-luxe-fade absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_40%,rgba(212,175,55,0.15),transparent_62%)]"
      />

      <div className="relative flex w-full max-w-md flex-col items-center">
        <p
          className="animate-luxe-fade-up text-[0.6rem] uppercase tracking-luxe text-champagne/70 sm:text-[0.68rem]"
          style={{ animationDelay: "0.3s" }}
        >
          Prepare-se para uma noite especial
        </p>

        <div
          className="animate-luxe-fade gold-rule my-7 w-24"
          style={{ animationDelay: "0.9s" }}
        />

        <h1
          className="animate-luxe-fade-up font-display text-[3.6rem] font-light leading-none tracking-[0.16em] text-gold-gradient sm:text-7xl"
          style={{ animationDelay: "1.1s" }}
        >
          JANTAR
        </h1>

        <p
          className="animate-luxe-fade-up mt-7 max-w-xs font-display text-lg font-light italic leading-relaxed text-white/75 sm:text-xl"
          style={{ animationDelay: "1.9s" }}
        >
          Uma noite para celebrar, brindar e aproveitar juntos.
        </p>

        <div
          className="animate-luxe-fade-up mt-11 w-full"
          style={{ animationDelay: "2.6s" }}
        >
          <GoldButton onClick={onOpen} pulse fullWidth type="button">
            Abrir convite
          </GoldButton>
        </div>
      </div>
    </div>
  );
}
