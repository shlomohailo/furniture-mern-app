import { createContext, useEffect, useState } from "react";
import { getDataSales } from "../service/salesService";

export const salesContext = createContext();

function SalesProvider({ children }) {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    getDataSales().then((res) => setSales(res));
  }, []);
  return (
    <citiesContext.Provider value={{ sales, setSales }}>
      {children}
    </citiesContext.Provider>
  );
}
export default SalesProvider;
