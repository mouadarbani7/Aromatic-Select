import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Link } from "wouter";
import { Check, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="w-24 h-24 bg-primary/10 border border-primary text-primary rounded-full flex items-center justify-center mb-8"
        >
          <Check size={40} />
        </motion.div>
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Order Confirmed</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto text-lg leading-relaxed">
          Your private allocation has been secured. Our atelier will begin meticulously preparing your parcel.
        </p>
        <Link href="/" className="bg-foreground text-background px-10 py-4 text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-3xl mb-4">Your Reserve is Empty</h1>
        <Link href="/products" className="border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors mt-4">
          Return to Collection
        </Link>
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
          <h1 className="font-serif text-4xl mb-12">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-12">
                
                {/* Contact Section */}
                <section>
                  <h2 className="font-serif text-2xl mb-6 flex items-center gap-3 border-b border-border/50 pb-4">
                    <span className="text-primary text-sm font-sans tracking-widest">01</span>
                    Contact
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">First Name</label>
                      <input required type="text" className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none px-4 py-3 transition-all" />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Last Name</label>
                      <input required type="text" className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none px-4 py-3 transition-all" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</label>
                      <input required type="email" className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none px-4 py-3 transition-all" />
                    </div>
                  </div>
                </section>

                {/* Shipping Section */}
                <section>
                  <h2 className="font-serif text-2xl mb-6 flex items-center gap-3 border-b border-border/50 pb-4">
                    <span className="text-primary text-sm font-sans tracking-widest">02</span>
                    Shipping
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Address</label>
                      <input required type="text" className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none px-4 py-3 transition-all" />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">City</label>
                      <input required type="text" className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none px-4 py-3 transition-all" />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Postal Code</label>
                      <input required type="text" className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none px-4 py-3 transition-all" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Country</label>
                      <select required className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none px-4 py-3 transition-all appearance-none rounded-none">
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="FR">France</option>
                        <option value="JP">Japan</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* Payment Section (UI Only) */}
                <section>
                  <h2 className="font-serif text-2xl mb-6 flex items-center justify-between border-b border-border/50 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-primary text-sm font-sans tracking-widest">03</span>
                      Payment
                    </div>
                    <ShieldCheck size={20} className="text-primary" />
                  </h2>
                  <div className="grid grid-cols-2 gap-6 bg-card/30 p-6 border border-border/50">
                    <div className="col-span-2 space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Card Number</label>
                      <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none px-4 py-3 transition-all font-mono text-sm" />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Expiry Date</label>
                      <input required type="text" placeholder="MM/YY" className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none px-4 py-3 transition-all font-mono text-sm" />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">CVC</label>
                      <input required type="text" placeholder="123" className="w-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none px-4 py-3 transition-all font-mono text-sm" />
                    </div>
                  </div>
                </section>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5 text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(201,162,39,0.1)] hover:shadow-[0_0_30px_rgba(201,162,39,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                  ) : (
                    `Place Order - $${totalPrice}`
                  )}
                </button>

              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-5">
              <div className="bg-card/20 border border-border/50 p-8 sticky top-32">
                <h3 className="font-serif text-xl mb-6">In Your Parcel</h3>
                
                <div className="space-y-4 mb-8">
                  {items.map((item) => (
                    <div key={`${item.perfumeId}-${item.volume}`} className="flex justify-between text-sm py-2 border-b border-border/30 last:border-0">
                      <div className="flex flex-col">
                        <span className="font-serif text-base">{item.name}</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                          {item.volume}ml × {item.quantity}
                        </span>
                      </div>
                      <span className="font-serif">${item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-sm mb-6 border-y border-border/50 py-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Complimentary</span>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <span className="text-sm tracking-widest uppercase">Total</span>
                  <span className="font-serif text-3xl">${totalPrice}</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
