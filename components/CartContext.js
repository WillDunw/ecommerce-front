const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);
  function addProduct(productID) {
    setCartProducts((prev) => [...prev, productID]);
  }
  function removeProduct(id) {
    setCartProducts(prev => {
        const pos = prev.indexOf(id);
        if(pos !== -1) {
            return prev.filter((value, index) => index !== pos);
        }
        return prev;
    })
  }
  function clearCart() {
    setCartProducts([]);
  }
  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
