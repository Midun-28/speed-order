import { ShoppingCart } from "lucide-react";

interface FloatingCartProps {
  totalItems: number;
  total: number;
  onClick: () => void;
}

const FloatingCart = ({ totalItems, total, onClick }: FloatingCartProps) => {
  if (totalItems === 0) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-primary text-primary-foreground pl-4 pr-5 py-3 rounded-2xl shadow-float animate-bounce-in active:scale-95 transition-transform"
    >
      <div className="relative">
        <ShoppingCart className="h-5 w-5" />
        <span className="absolute -top-2 -right-2 bg-card text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      </div>
      <span className="font-bold">₹{total}</span>
    </button>
  );
};

export default FloatingCart;
