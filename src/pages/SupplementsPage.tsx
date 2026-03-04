import GlassCard from "@/components/GlassCard";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const products = [
  {
    name: "Whey Protein",
    price: 2499,
    desc: "Premium whey protein isolate for lean muscle growth. 24g protein per scoop.",
    image: "/images/whey-protein.jpg",
  },
  {
    name: "Mass Gainer",
    price: 1999,
    desc: "High-calorie formula for weight gain. Perfect for hard gainers.",
    image: "/images/mass-gainer.jpg",
  },
  {
    name: "Creatine Monohydrate",
    price: 899,
    desc: "Boost strength and power output. 5g micronized creatine per serving.",
    image: "/images/creatine.jpg",
  },
  {
    name: "Pre-Workout",
    price: 1299,
    desc: "Explosive energy and focus. Enhanced pump and endurance formula.",
    image: "/images/pre-workout.jpg",
  },
];

const SupplementsPage = () => {
  const handleAddToCart = (name: string) => {
    toast.success(`${name} added to cart!`, {
      description: "View your cart to proceed to checkout.",
    });
  };

  return (
    <div className="page-container section-padding max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider animate-slide-up">
          Supplements <span className="neon-text-red">Store</span>
        </h1>
        <p className="text-muted-foreground mt-4 animate-slide-up-delay-1">
          Premium supplements available at our in-gym store
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <GlassCard key={product.name} className="flex flex-col overflow-hidden !p-0">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-heading text-lg font-semibold uppercase tracking-wider mb-1">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm flex-1 mb-4">{product.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-heading font-bold neon-text-red">₹{product.price}</span>
                <button
                  onClick={() => handleAddToCart(product.name)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 active:scale-95"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default SupplementsPage;
