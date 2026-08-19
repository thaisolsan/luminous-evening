/**
 * ÚNICO LUGAR para editar as informações do convite.
 */
export const eventConfig = {
  eventName: "Jantar Especial de Mulheres",
  /** ISO local — usado pelo contador regressivo */
  eventDate: "2026-09-19T19:00:00",
  eventDateLabel: "19 de setembro de 2026",
  eventTime: "19h00",
  /** Prazo para confirmar presença */
  rsvpDeadlineLabel: "10 de setembro",
  venueName: "Edifício San Karlo",
  venueAddress: "Rua Brasília, 40 — Itapuã",
  venueCity: "Vila Velha — ES",
  /** Link aberto pelo botão "Abrir no Google Maps" */
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Edif%C3%ADcio%20San%20Karlo%2C%20Rua%20Bras%C3%ADlia%2C%2040%2C%20Itapu%C3%A3%2C%20Vila%20Velha%20-%20ES",
  /** Endereço usado no mapa incorporado */
  mapsEmbedQuery:
    "Edifício San Karlo, Rua Brasília, 40, Itapuã, Vila Velha - ES",
  /** Somente dígitos, com DDI. Ex: 5527999999999 */
  whatsappNumber: "5527992659303",
  whatsappMessage:
    "Olá! Confirmo minha presença no Jantar Especial de Mulheres, dia 19 de setembro às 19h, no Edifício San Karlo. 🥂",
  /** Coloque o arquivo em public/music/jantar.mp3 (opcional) */
  musicUrl: "/music/jantar.mp3",
} as const;


export const whatsappUrl = `https://wa.me/${eventConfig.whatsappNumber}?text=${encodeURIComponent(
  eventConfig.whatsappMessage,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  eventConfig.mapsEmbedQuery,
)}&output=embed`;
