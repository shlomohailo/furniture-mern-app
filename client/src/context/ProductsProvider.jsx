import { createContext, useEffect, useState } from "react";
import { getDataProducts } from "../service/productsService";

export const productsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getDataProducts().then((res) => setProducts(res));
  }, []);
  return (
    <citiesContext.Provider value={{ products, setProducts }}>
      {children}
    </citiesContext.Provider>
  );
}

export default ProductsProvider;