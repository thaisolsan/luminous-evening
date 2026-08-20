import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { eventConfig } from "@/config/event";
import { GoldButton } from "./GoldButton";

const MAX_GUESTS = 10;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Informe seu nome completo" })
    .max(100, { message: "Nome muito longo" }),
  whatsapp: z
    .string()
    .trim()
    .regex(/^[\d\s()+-]{10,25}$/, { message: "Informe um WhatsApp válido com DDD" }),
  guestsCount: z.number().int().min(1).max(MAX_GUESTS),
  guestNames: z.array(z.string().trim().max(100)),
  message: z.string().trim().max(500).optional(),
});

const fieldClass =
  "w-full rounded-xl border border-gold/25 bg-black/40 px-4 py-3 font-sans text-sm text-white/90 placeholder:text-white/35 outline-none transition-colors duration-300 focus:border-gold/70 focus:ring-1 focus:ring-gold/40";

const labelClass = "mb-2 block text-[0.58rem] uppercase tracking-luxe text-gold/80";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [guestsCount, setGuestsCount] = useState(1);
  const [guestNames, setGuestNames] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  const companions = Math.max(0, guestsCount - 1);

  const handleGuestsCount = (value: number) => {
    setGuestsCount(value);
    setGuestNames((prev) => {
      const next = prev.slice(0, Math.max(0, value - 1));
      while (next.length < Math.max(0, value - 1)) next.push("");
      return next;
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const parsed = schema.safeParse({
      name,
      whatsapp,
      guestsCount,
      guestNames,
      message: message || undefined,
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Verifique os dados informados");
      return;
    }

    const data = parsed.data;
    const filledGuests = data.guestNames.map((g) => g.trim()).filter(Boolean);

    if (filledGuests.length < companions) {
      toast.error("Informe o nome de todos os acompanhantes");
      return;
    }

    setSaving(true);
    const { error } = await supabase.from("rsvps").insert({
      name: data.name,
      whatsapp: data.whatsapp,
      guests_count: data.guestsCount,
      guest_names: filledGuests,
      message: data.message ?? null,
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
      `Nome: ${data.name}`,
      `WhatsApp: ${data.whatsapp}`,
      `Total de pessoas: ${data.guestsCount}`,
      filledGuests.length ? `Acompanhantes: ${filledGuests.join(", ")}` : null,
      data.message ? `Recado: ${data.message}` : null,
      `${eventConfig.eventDateLabel} às ${eventConfig.eventTime} — ${eventConfig.venueName} 🥂`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${eventConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.setTimeout(() => window.open(url, "_blank", "noopener,noreferrer"), 700);
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

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-sm text-left">
      <div>
        <label className={labelClass} htmlFor="rsvp-name">
          Seu nome
        </label>
        <input
          id="rsvp-name"
          className={fieldClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          placeholder="Nome completo"
          autoComplete="name"
          required
        />
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="rsvp-whatsapp">
          WhatsApp
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
          required
        />
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="rsvp-guests">
          Quantidade de pessoas (incluindo você)
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

      {companions > 0 && (
        <div className="mt-5 space-y-3">
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
              required
            />
          ))}
        </div>
      )}

      <div className="mt-5">
        <label className={labelClass} htmlFor="rsvp-message">
          Recado (opcional)
        </label>
        <textarea
          id="rsvp-message"
          className={`${fieldClass} min-h-[90px] resize-none`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          placeholder="Deixe uma mensagem carinhosa"
        />
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
        ) : (
          "Confirmar presença"
        )}
      </GoldButton>

      <p className="mt-4 text-center text-[0.58rem] uppercase tracking-[0.2em] text-white/40">
        Após confirmar, abriremos o WhatsApp com sua mensagem pronta
      </p>
    </form>
  );
}
