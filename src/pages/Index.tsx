import { useState, useMemo, useRef, useEffect } from "react";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import FoodCard from "@/components/FoodCard";
import CartSheet from "@/components/CartSheet";
import FloatingCart from "@/components/FloatingCart";
import Footer from "@/components/Footer";
import { categories, menuItems } from "@/data/menuData";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("chicken");
  const cart = useCart();
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return menuItems;
    const q = searchQuery.toLowerCase();
    return menuItems.filter((item) => item.name.toLowerCase().includes(q));
  }, [searchQuery]);

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    setSearchQuery("");
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Intersection observer for active category
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-150px 0px -60% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const showByCategory = !searchQuery.trim();

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryNav activeCategory={activeCategory} onSelect={handleCategorySelect} />

      <main className="container py-4 pb-24">
        {showByCategory ? (
          categories.map((cat) => {
            const catItems = menuItems.filter((i) => i.category === cat.id);
            const isFruit = cat.id === "fruits";
            return (
              <section
                key={cat.id}
                id={cat.id}
                ref={(el) => { sectionRefs.current[cat.id] = el; }}
                className="mb-8 scroll-mt-[160px]"
              >
                <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <span>{cat.icon}</span>
                  {cat.name}
                </h2>
                <div className={`grid gap-3 ${isFruit ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"}`}>
                  {catItems.map((item, idx) => (
                    <div key={item.id} className="animate-slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
                      <FoodCard
                        item={item}
                        quantity={cart.getQuantity(item.id)}
                        onAdd={() => cart.addItem(item)}
                        onUpdate={(d) => cart.updateQuantity(item.id, d)}
                        isFruit={isFruit}
                      />
                    </div>
                  ))}
                </div>
              </section>
            );
          })
        ) : (
          <div>
            <p className="text-muted-foreground text-sm mb-3">
              {filteredItems.length} results for "{searchQuery}"
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filteredItems.map((item) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  quantity={cart.getQuantity(item.id)}
                  onAdd={() => cart.addItem(item)}
                  onUpdate={(d) => cart.updateQuantity(item.id, d)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />

      <FloatingCart
        totalItems={cart.totalItems}
        total={cart.total}
        onClick={() => cart.setIsOpen(true)}
      />

      <CartSheet
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        total={cart.total}
        onUpdate={cart.updateQuantity}
        onRemove={cart.removeItem}
        onOrder={cart.sendToWhatsApp}
      />
    </div>
  );
};

export default Index;
