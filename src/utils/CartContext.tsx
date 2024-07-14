import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Product } from "../types/type";

interface CartContextType {
  cartItems: Product[];
  setCartItems: (cartItems: Product[]) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  cartCount: number;
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }

    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.filter(
        (item) => item.id !== productId
      );
      localStorage.setItem("cart", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const addToFavorites = (product: Product) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, product];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter(
        (item) => item.id !== productId
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (productId: string) => {
    return favorites.some((fav) => fav.id === productId);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
