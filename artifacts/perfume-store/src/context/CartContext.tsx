import React, { createContext, useContext, useState, useMemo } from "react";

export interface CartItem {
  perfumeId: string;
  name: string;
  volume: number;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (perfumeId: string, volume: number) => void;
  updateQuantity: (perfumeId: string, volume: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.perfumeId === newItem.perfumeId && item.volume === newItem.volume
      );
      if (existing) {
        return prev.map((item) =>
          item.perfumeId === newItem.perfumeId && item.volume === newItem.volume
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const removeItem = (perfumeId: string, volume: number) => {
    setItems((prev) => prev.filter((item) => !(item.perfumeId === perfumeId && item.volume === volume)));
  };

  const updateQuantity = (perfumeId: string, volume: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(perfumeId, volume);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.perfumeId === perfumeId && item.volume === volume ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
