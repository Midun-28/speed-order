import { categories } from "@/data/menuData";

interface CategoryNavProps {
  activeCategory: string;
  onSelect: (id: string) => void;
}

const CategoryNav = ({ activeCategory, onSelect }: CategoryNavProps) => (
  <div className="sticky top-[108px] z-30 bg-background/90 backdrop-blur-sm border-b border-border">
    <div className="container py-2">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground shadow-float"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default CategoryNav;
