import { motion } from "framer-motion";
import { Link } from "wouter";
import bottleImg from "@/assets/bottle.png";

interface ProductCardProps {
  perfume: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    isBestSeller?: boolean;
    isNew?: boolean;
    imageUrl?: string;
  };
  basePrice: number;
}

export function ProductCard({ perfume, basePrice }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative flex flex-col h-full bg-card/30 border border-border/50 hover:border-primary/50 transition-colors duration-500 overflow-hidden rounded-sm"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {perfume.isBestSeller && (
          <span className="text-[10px] tracking-widest uppercase bg-primary text-primary-foreground px-2 py-1">
            Best Seller
          </span>
        )}
        {perfume.isNew && (
          <span className="text-[10px] tracking-widest uppercase bg-foreground text-background px-2 py-1">
            New
          </span>
        )}
      </div>

      <div className="relative aspect-[3/4] bg-muted/20 overflow-hidden flex items-center justify-center p-8">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <motion.img
          src={perfume.imageUrl || bottleImg}
          alt={perfume.name}
          className="w-full h-full object-contain filter drop-shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <Link href={`/product/${perfume.id}`} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase transition-colors">
            View Details
          </Link>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 className="font-serif text-2xl mb-1">{perfume.name}</h3>
        <p className="text-xs text-primary tracking-widest uppercase mb-4">{perfume.tagline}</p>
        <p className="text-sm text-muted-foreground flex-grow line-clamp-2">{perfume.description}</p>
        <p className="mt-6 text-sm tracking-widest">FROM ${basePrice}</p>
      </div>
    </motion.div>
  );
}
