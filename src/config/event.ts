/**
 * ÚNICO LUGAR para editar as informações do convite.
 */
export const eventConfig = {
  eventName: "Jantar Especial",
  /** ISO local — usado pelo contador regressivo */
  eventDate: "2026-09-12T20:00:00",
  eventDateLabel: "12 de setembro de 2026",
  eventTime: "20h00",
  venueName: "Restaurante Exemplo",
  venueAddress: "Rua das Flores, 123",
  venueCity: "Vila Velha — ES",
  /** Link aberto pelo botão "Abrir no Google Maps" */
  mapsUrl: "https://share.google/hvyspAezy4S8L5MLu",
  /** Endereço usado no mapa incorporado */
  mapsEmbedQuery: "Rua das Flores, 123, Vila Velha, ES",
  /** Somente dígitos, com DDI. Ex: 5527999999999 */
  whatsappNumber: "5527999999999",
  whatsappMessage:
    "Olá! Confirmo minha presença no jantar do dia 12 de setembro. 🥂",
  /** Coloque o arquivo em public/music/jantar.mp3 (opcional) */
  musicUrl: "/music/jantar.mp3",
} as const;

export const whatsappUrl = `https://wa.me/${eventConfig.whatsappNumber}?text=${encodeURIComponent(
  eventConfig.whatsappMessage,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  eventConfig.mapsEmbedQuery,
)}&output=embed`;
