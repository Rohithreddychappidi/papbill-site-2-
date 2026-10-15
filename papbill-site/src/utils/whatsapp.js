export const WHATSAPP_PHONE = '919482558220';

export function getWhatsAppUrl(message) {
  const text = encodeURIComponent(message || 'Hi PapBill, I would like to learn more and request a live demo.');
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}
