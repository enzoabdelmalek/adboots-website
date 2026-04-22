"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    size: string;
    qty: number;
    image?: string;
}

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    addItem: (item: Omit<CartItem, "qty">) => void;
    removeItem: (id: string, size: string) => void;
    updateQty: (id: string, size: string, qty: number) => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const openCart  = () => { setIsOpen(true);  document.body.style.overflow = "hidden"; };
    const closeCart = () => { setIsOpen(false); document.body.style.overflow = ""; };
    const toggleCart = () => isOpen ? closeCart() : openCart();

    const addItem = (newItem: Omit<CartItem, "qty">) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === newItem.id && i.size === newItem.size);
            if (existing) {
                return prev.map(i =>
                    i.id === newItem.id && i.size === newItem.size
                        ? { ...i, qty: i.qty + 1 }
                        : i
                );
            }
            return [...prev, { ...newItem, qty: 1 }];
        });
        openCart();
    };

    const removeItem = (id: string, size: string) => {
        setItems(prev => prev.filter(i => !(i.id === id && i.size === size)));
    };

    const updateQty = (id: string, size: string, qty: number) => {
        if (qty <= 0) { removeItem(id, size); return; }
        setItems(prev =>
            prev.map(i => i.id === id && i.size === size ? { ...i, qty } : i)
        );
    };

    const totalItems = items.reduce((s, i) => s + i.qty, 0);
    const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0);

    return (
        <CartContext.Provider value={{ items, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, updateQty, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
}
