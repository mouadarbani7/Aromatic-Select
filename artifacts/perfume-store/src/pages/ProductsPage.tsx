import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { PERFUMES, VOLUME_PRICES } from "@/data/perfumes";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ProductsPage() {
  const basePrice = VOLUME_PRICES[0].price;

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Mistoria Exclusives</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">The Collection</h1>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Three signature fragrances, each one a statement. Curated for those who refuse to be ordinary.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {PERFUMES.map((perfume) => (
            <motion.div key={perfume.id} variants={fadeIn}>
              <ProductCard perfume={perfume} basePrice={basePrice} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
