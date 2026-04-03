import { motion } from "framer-motion";
import { Link } from "wouter";
import heroImg from "@/assets/hero-bg.png";
import { ProductCard } from "@/components/ProductCard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ReviewCard } from "@/components/ReviewCard";
import { PERFUMES, VOLUME_PRICES } from "@/data/perfumes";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function HomePage() {
  const bestSellers = PERFUMES.filter(p => p.isBestSeller);
  const basePrice = VOLUME_PRICES[0].price;

  // Set countdown to 7 days from now
  const countdownTarget = new Date();
  countdownTarget.setDate(countdownTarget.getDate() + 7);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Maison Noir Luxury Perfume" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/60" />
        </div>
        
        <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">
              Mistoria — Luxury Fragrance House
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 drop-shadow-lg">
              Discover Your<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">
                Signature Scent
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Premium fragrances curated for those who refuse to be forgotten. 
              Crafted for bold personalities, worn around the world.
            </p>
            <Link href="/products" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-32 bg-background border-b border-border/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Signature Fragrances</h2>
            <p className="text-muted-foreground tracking-widest uppercase text-sm">Bestsellers Loved Worldwide</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {bestSellers.map((perfume) => (
              <motion.div key={perfume.id} variants={fadeIn}>
                <ProductCard perfume={perfume} basePrice={basePrice} />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-16">
            <Link href="/products" className="inline-block border border-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors">
              View All Fragrances
            </Link>
          </div>
        </div>
      </section>

      {/* Limited Offer */}
      <section className="py-32 relative overflow-hidden bg-card/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-primary tracking-widest uppercase text-sm mb-4">Exclusive Access</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">The Midnight Reserve</h2>
            <p className="text-muted-foreground mb-12 text-lg">
              A highly concentrated extrait de parfum available only to our inner circle. 
              Only 500 bottles poured. The vault closes in:
            </p>
            <CountdownTimer targetDate={countdownTarget} />
            <div className="mt-16">
              <button className="bg-foreground hover:bg-foreground/90 text-background px-10 py-4 text-sm tracking-widest uppercase transition-colors">
                Request Allocation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Whispers</h2>
            <p className="text-muted-foreground tracking-widest uppercase text-sm">Words from our patrons</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn}>
              <ReviewCard 
                name="K. Mansour" 
                rating={5} 
                product="Stronger With You Intensely"
                text="I wore this on a first date and she literally asked me what I was wearing three times. The vanilla and cinnamon combo is absolutely addictive." 
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ReviewCard 
                name="C. Rousseau" 
                rating={5} 
                product="Xerjoff Erba Pura"
                text="This is what I wear when I want to feel effortlessly luxurious without trying too hard. Fresh but rich, light but unforgettable. Pure class." 
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ReviewCard 
                name="A. Patel" 
                rating={5} 
                product="Versace Eros EDP"
                text="Ordered the 50ml and it arrived next day in perfect packaging. Compliments all day at work. Mistoria's service and the scent itself — both world class." 
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ReviewCard 
                name="Y. Hassan" 
                rating={5} 
                product="Stronger With You Intensely"
                text="The 10ml was a perfect way to try it before committing. Absolutely stunning fragrance. Already ordered the 50ml bottle. Best purchase this year." 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/30 py-20">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl tracking-widest uppercase mb-4">Mistoria</h2>
          <p className="text-primary italic font-serif text-lg mb-12">Discover Your Signature Scent</p>
          
          <div className="flex space-x-8 mb-12">
            <Link href="/" className="text-xs tracking-widest uppercase hover:text-primary transition-colors">Home</Link>
            <Link href="/products" className="text-xs tracking-widest uppercase hover:text-primary transition-colors">Boutique</Link>
            <span className="text-xs tracking-widest uppercase text-muted-foreground cursor-not-allowed">Atelier</span>
            <span className="text-xs tracking-widest uppercase text-muted-foreground cursor-not-allowed">Journal</span>
          </div>
          
          <p className="text-xs text-muted-foreground tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Mistoria Luxury Perfumes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
