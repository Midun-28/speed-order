import { Plus, Minus } from "lucide-react";
import { MenuItem } from "@/data/menuData";

interface FoodCardProps {
  item: MenuItem;
  quantity: number;
  onAdd: () => void;
  onUpdate: (delta: number) => void;
  isFruit?: boolean;
}

const FoodCard = ({ item, quantity, onAdd, onUpdate, isFruit }: FoodCardProps) => (
  <div className={`bg-card rounded-xl overflow-hidden shadow-card card-hover ${isFruit ? "text-center" : ""}`}>
    <div className={`relative overflow-hidden ${isFruit ? "h-32" : "h-40"}`}>
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-3">
      <h3 className={`font-semibold text-foreground ${isFruit ? "text-sm" : "text-base"}`}>{item.name}</h3>
      <p className="text-primary font-bold text-lg mt-1">₹{item.price}</p>
      <div className="mt-2">
        {quantity === 0 ? (
          <button
            onClick={onAdd}
            className="w-full py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-center gap-3 bg-secondary rounded-lg py-1.5">
            <button
              onClick={() => onUpdate(-1)}
              className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center active:scale-90 transition-transform"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="font-bold text-foreground text-lg min-w-[24px] text-center">{quantity}</span>
            <button
              onClick={() => onUpdate(1)}
              className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center active:scale-90 transition-transform"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default FoodCard;
