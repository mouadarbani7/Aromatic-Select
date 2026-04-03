import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  product: string;
}

export function ReviewCard({ name, rating, text, product }: ReviewCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 border border-border/30 bg-card/20 flex flex-col h-full"
    >
      <div className="flex text-primary mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? "fill-primary" : "text-muted"}
          />
        ))}
      </div>
      <p className="font-serif text-lg italic text-foreground mb-6 flex-grow">"{text}"</p>
      <div className="mt-auto border-t border-border/30 pt-4">
        <p className="text-sm font-medium tracking-wide">{name}</p>
        <p className="text-[10px] uppercase tracking-widest text-primary mt-1">{product}</p>
      </div>
    </motion.div>
  );
}
