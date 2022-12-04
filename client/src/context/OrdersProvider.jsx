import { createContext, useEffect, useState } from "react";
import { getDataOrders } from "../service/ordersService";

export const ordersContext = createContext();

function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getDataOrders().then((res) => setOrders(res));
  }, []);
  return (
    <citiesContext.Provider value={{ orders, setOrders }}>
      {children}
    </citiesContext.Provider>
  );
}