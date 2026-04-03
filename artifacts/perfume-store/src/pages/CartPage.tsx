import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, X, ArrowRight } from "lucide-react";
import bottleImg from "@/assets/bottle.png";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto border border-border/50 rounded-full flex items-center justify-center mb-8 bg-card/20">
            <span className="font-serif text-3xl text-muted-foreground">0</span>
          </div>
          <h1 className="font-serif text-4xl mb-4">Your Reserve is Empty</h1>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            You have not yet selected any fragrances for your private collection.
          </p>
          <Link href="/products" className="bg-primary text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors">
            Explore Boutique
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl mb-2">Your Reserve</h1>
          <p className="text-muted-foreground tracking-widest uppercase text-xs mb-12">
            {totalItems} Item{totalItems !== 1 ? 's' : ''}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="hidden md:grid grid-cols-12 text-xs uppercase tracking-widest text-muted-foreground border-b border-border pb-4 mb-6">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
                <div className="col-span-1"></div>
              </div>

              <div className="space-y-6">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={`${item.perfumeId}-${item.volume}`}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, height: 0, marginBottom: 0 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-6 border-b border-border/50"
                    >
                      {/* Product Info */}
                      <div className="col-span-1 md:col-span-6 flex items-center gap-6">
                        <div className="w-20 h-24 bg-muted/10 p-2 flex-shrink-0">
                          <img src={bottleImg} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <Link href={`/product/${item.perfumeId}`} className="font-serif text-xl hover:text-primary transition-colors block mb-1">
                            {item.name}
                          </Link>
                          <p className="text-xs tracking-widest text-muted-foreground">{item.volume}ml Extrait</p>
                          <p className="text-sm mt-2 md:hidden">${item.price}</p>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="col-span-1 md:col-span-2 flex items-center justify-start md:justify-center">
                        <div className="flex items-center border border-border">
                          <button 
                            onClick={() => updateQuantity(item.perfumeId, item.volume, item.quantity - 1)}
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.perfumeId, item.volume, item.quantity + 1)}
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="hidden md:block col-span-3 text-right">
                        <span className="font-serif text-xl">${item.price * item.quantity}</span>
                      </div>

                      {/* Remove */}
                      <div className="absolute right-0 top-6 md:relative md:top-0 md:col-span-1 flex justify-end">
                        <button 
                          onClick={() => removeItem(item.perfumeId, item.volume)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-card/30 border border-border/50 p-8 sticky top-32">
                <h2 className="font-serif text-2xl mb-8">Summary</h2>
                
                <div className="space-y-4 text-sm mb-8 border-b border-border/50 pb-8">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Complimentary</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Packaging</span>
                    <span>Signature Box included</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8">
                  <span className="text-sm tracking-widest uppercase">Total</span>
                  <span className="font-serif text-3xl">${totalPrice}</span>
                </div>

                <Link 
                  href="/checkout" 
                  className="w-full bg-foreground text-background flex items-center justify-center gap-2 py-4 text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors group"
                >
                  Proceed to Checkout
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <p className="text-center text-xs text-muted-foreground mt-4 italic">
                  Secure encryption for all transactions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
