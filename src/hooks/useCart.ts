import { useState, useCallback } from "react";
import { MenuItem, OWNER_WHATSAPP } from "@/data/menuData";

export interface CartItem extends MenuItem {
  quantity: number;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((item: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const getQuantity = useCallback(
    (id: string) => items.find((i) => i.id === id)?.quantity || 0,
    [items]
  );

  const sendToWhatsApp = useCallback(() => {
    if (items.length === 0) return;
    let msg = "🚀 *Speed Order*\n\n";
    msg += "*Items:*\n";
    items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name} × ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    msg += `\n*Total: ₹${total}*\n\n`;
    msg += "Customer Name:\nDelivery Address:\nPhone Number:";
    const url = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }, [items, total]);

  return { items, addItem, updateQuantity, removeItem, total, totalItems, getQuantity, isOpen, setIsOpen, sendToWhatsApp };
}
