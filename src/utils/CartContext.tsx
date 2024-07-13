import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface CartContextType {
  cartItems: any[];
  setCartItems: (cartItems: any[]) => void;
  addToCart: (product: any) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  cartCount: number;
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
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product: any) => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.filter(
        (item) => item.id !== productId
      );
      localStorage.setItem("cart", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
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

        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
