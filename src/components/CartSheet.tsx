import { X, Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { CartItem } from "@/hooks/useCart";

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onUpdate: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onOrder: () => void;
}

const CartSheet = ({ isOpen, onClose, items, total, onUpdate, onRemove, onOrder }: CartSheetProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card shadow-2xl animate-slide-up flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Your Cart</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-secondary transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingCart className="h-16 w-16 mb-4 opacity-30" />
              <p className="font-medium">Cart is empty</p>
              <p className="text-sm">Add some delicious items!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-secondary rounded-lg p-3">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm truncate">{item.name}</h4>
                  <p className="text-primary font-bold">₹{item.price * item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onUpdate(item.id, -1)} className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="font-bold text-sm w-5 text-center">{item.quantity}</span>
                  <button onClick={() => onUpdate(item.id, 1)} className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Plus className="h-3 w-3" />
                  </button>
                  <button onClick={() => onRemove(item.id)} className="ml-1 p-1.5 text-destructive hover:bg-destructive/10 rounded-full transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-foreground">Total</span>
              <span className="text-xl font-extrabold text-primary">₹{total}</span>
            </div>
            <button
              onClick={onOrder}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-base transition-all hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Order via WhatsApp</span>
              <span>📱</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSheet;
