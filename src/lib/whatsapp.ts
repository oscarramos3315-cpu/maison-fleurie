const WHATSAPP_NUMBER = "16199033442";

export function whatsappOrderLink(name: string, price: number) {
  const message = `Hi Maison Fleurie! I'd love to order ${name} (from $${price}). Could you let me know how to make payment, and what you'll need from me (delivery address) to arrange shipping?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function whatsappGeneralLink() {
  const message =
    "Hi Maison Fleurie! I have a question about your arrangements.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
