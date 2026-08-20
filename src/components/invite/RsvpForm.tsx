import { useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { eventConfig } from "@/config/event";
import { GoldButton } from "./GoldButton";

const MAX_GUESTS = 10;

const nameSchema = z
  .string()
  .trim()
  .min(2, { message: "Informe seu nome completo" })
  .max(100, { message: "Nome muito longo" });

const whatsappSchema = z
  .string()
  .trim()
  .regex(/^[\d\s()+-]{10,25}$/, { message: "Informe um WhatsApp válido com DDD" });

const fieldClass =
  "w-full rounded-xl border border-gold/25 bg-black/40 px-4 py-3 font-sans text-sm text-white/90 placeholder:text-white/35 outline-none transition-colors duration-300 focus:border-gold/70 focus:ring-1 focus:ring-gold/40";

const labelClass = "mb-2 block text-[0.58rem] uppercase tracking-luxe text-gold/80";

type Step = "name" | "whatsapp" | "guests" | "companions";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [guestsCount, setGuestsCount] = useState(1);
  const [guestNames, setGuestNames] = useState<string[]>([]);
  const [step, setStep] = useState<Step>("name");
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  const companions = Math.max(0, guestsCount - 1);

  const steps = useMemo<Step[]>(
    () => (companions > 0 ? ["name", "whatsapp", "guests", "companions"] : ["name", "whatsapp", "guests"]),
    [companions],
  );
  const stepIndex = Math.max(0, steps.indexOf(step));

  const handleGuestsCount = (value: number) => {
    setGuestsCount(value);
    setGuestNames((prev) => {
      const next = prev.slice(0, Math.max(0, value - 1));
      while (next.length < Math.max(0, value - 1)) next.push("");
      return next;
    });
  };

  const goBack = () => {
    const prev = steps[stepIndex - 1];
    if (prev) setStep(prev);
  };

  const submit = async () => {
    const filledGuests = guestNames.map((g) => g.trim()).filter(Boolean);

    if (filledGuests.length < companions) {
      toast.error("Informe o nome de todos os acompanhantes");
      return;
    }

    setSaving(true);
    const { error } = await supabase.from("rsvps").insert({
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      guests_count: guestsCount,
      guest_names: filledGuests,
    });
    setSaving(false);

    if (error) {
      toast.error("Não foi possível enviar sua confirmação. Tente novamente.");
      return;
    }

    setDone(true);
    toast.success("Presença confirmada! Vamos te redirecionar ao WhatsApp.");

    const text = [
      `Olá! Confirmo minha presença no ${eventConfig.eventName}.`,
      `Nome: ${name.trim()}`,
      `WhatsApp: ${whatsapp.trim()}`,
      `Total de pessoas: ${guestsCount}`,
      filledGuests.length ? `Acompanhantes: ${filledGuests.join(", ")}` : null,
      `${eventConfig.eventDateLabel} às ${eventConfig.eventTime} — ${eventConfig.venueName} 🥂`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${eventConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.setTimeout(() => window.open(url, "_blank", "noopener,noreferrer"), 700);
  };

  const handleNext = async (event: React.FormEvent) => {
    event.preventDefault();

    if (step === "name") {
      const parsed = nameSchema.safeParse(name);
      if (!parsed.success) return toast.error(parsed.error.issues[0]!.message);
      setName(parsed.data);
      setStep("whatsapp");
      return;
    }

    if (step === "whatsapp") {
      const parsed = whatsappSchema.safeParse(whatsapp);
      if (!parsed.success) return toast.error(parsed.error.issues[0]!.message);
      setWhatsapp(parsed.data);
      setStep("guests");
      return;
    }

    if (step === "guests") {
      if (companions > 0) {
        setStep("companions");
        return;
      }
      await submit();
      return;
    }

    await submit();
  };

  if (done) {
    return (
      <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-gold/30 bg-gold/[0.05] px-6 py-8 text-center">
        <Check className="mx-auto h-5 w-5 text-gold" aria-hidden="true" />
        <p className="mt-4 font-display text-xl font-light italic text-white/85">
          Sua presença foi registrada!
        </p>
        <p className="mt-3 text-[0.6rem] uppercase tracking-[0.2em] text-gold/75">
          Obrigada por confirmar
        </p>
      </div>
    );
  }

  const isLast = stepIndex === steps.length - 1;

  return (
    <form onSubmit={handleNext} className="mx-auto mt-10 max-w-sm text-left">
      <div className="mb-7 flex items-center justify-center gap-2" aria-hidden="true">
        {steps.map((s, i) => (
          <span
            key={s}
            className={`h-[2px] w-8 rounded-full transition-all duration-500 ${
              i <= stepIndex ? "bg-gold/80" : "bg-white/15"
            }`}
          />
        ))}
      </div>

      <div key={step} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        {step === "name" && (
          <div>
            <label className={labelClass} htmlFor="rsvp-name">
              Como podemos te chamar?
            </label>
            <input
              id="rsvp-name"
              className={fieldClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              placeholder="Nome completo"
              autoComplete="name"
              autoFocus
            />
          </div>
        )}

        {step === "whatsapp" && (
          <div>
            <label className={labelClass} htmlFor="rsvp-whatsapp">
              Seu WhatsApp
            </label>
            <input
              id="rsvp-whatsapp"
              className={fieldClass}
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              maxLength={25}
              inputMode="tel"
              placeholder="(27) 99999-9999"
              autoComplete="tel"
              autoFocus
            />
          </div>
        )}

        {step === "guests" && (
          <div>
            <label className={labelClass} htmlFor="rsvp-guests">
              Quantas pessoas irão (incluindo você)
            </label>
            <select
              id="rsvp-guests"
              className={fieldClass}
              value={guestsCount}
              onChange={(e) => handleGuestsCount(Number(e.target.value))}
            >
              {Array.from({ length: MAX_GUESTS }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n} className="bg-background text-white">
                  {n} {n === 1 ? "pessoa" : "pessoas"}
                </option>
              ))}
            </select>
          </div>
        )}

        {step === "companions" && (
          <div className="space-y-3">
            <p className={labelClass}>Nomes dos acompanhantes</p>
            {Array.from({ length: companions }, (_, i) => (
              <input
                key={i}
                className={fieldClass}
                value={guestNames[i] ?? ""}
                onChange={(e) =>
                  setGuestNames((prev) => {
                    const next = [...prev];
                    next[i] = e.target.value;
                    return next;
                  })
                }
                maxLength={100}
                placeholder={`Acompanhante ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <GoldButton
        type="submit"
        fullWidth
        pulse={!saving}
        disabled={saving}
        className="mt-8 py-5 text-[0.72rem] tracking-[0.3em]"
      >
        {saving ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Enviando
          </>
        ) : isLast ? (
          "Confirmar presença"
        ) : (
          <>
            Continuar <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </>
        )}
      </GoldButton>

      {stepIndex > 0 && !saving && (
        <button
          type="button"
          onClick={goBack}
          className="mx-auto mt-5 flex items-center gap-1.5 text-[0.58rem] uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-gold/80"
        >
          <ArrowLeft className="h-3 w-3" aria-hidden="true" /> Voltar
        </button>
      )}

      <p className="mt-4 text-center text-[0.58rem] uppercase tracking-[0.2em] text-white/40">
        Após confirmar, abriremos o WhatsApp com sua mensagem pronta
      </p>
    </form>
  );
}
