import { useState, useMemo } from "react";
import { useRoute } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { PERFUMES, VOLUME_PRICES } from "@/data/perfumes";
import { VolumeSelector } from "@/components/VolumeSelector";
import { useCart } from "@/context/CartContext";
import bottleImg from "@/assets/bottle.png";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";

export default function ProductDetailPage() {
  const [, params] = useRoute("/product/:id");
  const id = params?.id;
  const perfume = PERFUMES.find(p => p.id === id);
  
  const [selectedMl, setSelectedMl] = useState(VOLUME_PRICES[0].ml);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart();

  const currentPrice = useMemo(() => {
    return VOLUME_PRICES.find(v => v.ml === selectedMl)?.price || 0;
  }, [selectedMl]);

  if (!perfume) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="font-serif text-4xl mb-4">Fragrance Not Found</h1>
        <p className="text-muted-foreground mb-8">The scent you are looking for does not exist in our library.</p>
        <Link href="/products" className="border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors">
          Return to Collection
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      perfumeId: perfume.id,
      name: perfume.name,
      volume: selectedMl,
      price: currentPrice
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12 group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest">Back to Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sticky top-32 bg-muted/10 p-12 aspect-[3/4] flex items-center justify-center rounded-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
            <img 
              src={bottleImg} 
              alt={perfume.name} 
              className="w-full h-full object-contain filter drop-shadow-2xl relative z-10"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col py-8"
          >
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">{perfume.tagline}</p>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">{perfume.name}</h1>
            
            <div className="flex items-end gap-2 mb-10 pb-10 border-b border-border/50">
              <span className="font-serif text-4xl">${currentPrice}</span>
              <span className="text-muted-foreground text-sm mb-1 uppercase tracking-widest">USD</span>
            </div>

            <div className="mb-12">
              <p className="text-lg leading-relaxed text-foreground/90 font-light mb-6">
                {perfume.fullDescription}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Select Volume</h3>
              <VolumeSelector 
                options={VOLUME_PRICES}
                selectedMl={selectedMl}
                onChange={setSelectedMl}
              />
            </div>

            <div className="mb-16">
              <button 
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-5 text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  isAdded 
                    ? "bg-green-900/40 text-green-400 border border-green-500/50" 
                    : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(201,162,39,0.1)] hover:shadow-[0_0_30px_rgba(201,162,39,0.3)]"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isAdded ? (
                    <motion.div
                      key="added"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={18} /> Added to Reserve
                    </motion.div>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Add to Reserve
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Notes */}
            <div className="space-y-8 pt-10 border-t border-border/50">
              <h3 className="font-serif text-2xl">Olfactory Profile</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary mb-3">Top Notes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {perfume.topNotes.map(note => <li key={note}>{note}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary mb-3">Heart Notes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {perfume.middleNotes.map(note => <li key={note}>{note}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary mb-3">Base Notes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {perfume.baseNotes.map(note => <li key={note}>{note}</li>)}
                  </ul>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
