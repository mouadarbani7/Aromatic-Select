import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MistoriaLogo } from "./MistoriaLogo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`text-sm tracking-widest uppercase hover:text-primary transition-colors ${location === '/' ? 'text-primary' : 'text-foreground'}`}>
              Home
            </Link>
            <Link href="/products" className={`text-sm tracking-widest uppercase hover:text-primary transition-colors ${location === '/products' ? 'text-primary' : 'text-foreground'}`}>
              Products
            </Link>
          </div>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group">
            <div className="flex items-center gap-2">
              <MistoriaLogo className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all" />
              <span className="font-serif text-2xl lg:text-3xl tracking-[0.25em] uppercase text-foreground group-hover:text-primary transition-colors">
                Mistoria
              </span>
            </div>
            <span className="text-[9px] tracking-[0.4em] uppercase text-primary/70 mt-0.5 font-sans hidden lg:block">Discover Your Signature Scent</span>
          </Link>

          {/* Cart & Actions */}
          <div className="flex items-center space-x-6">
            <Link href="/cart" className="relative group flex items-center">
              <ShoppingBag size={22} className="text-foreground group-hover:text-primary transition-colors" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col space-y-8 items-center text-center">
              <Link href="/" className={`text-2xl font-serif tracking-widest uppercase ${location === '/' ? 'text-primary' : 'text-foreground'}`}>
                Home
              </Link>
              <Link href="/products" className={`text-2xl font-serif tracking-widest uppercase ${location === '/products' ? 'text-primary' : 'text-foreground'}`}>
                Products
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
