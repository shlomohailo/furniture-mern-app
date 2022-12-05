import { createContext, useEffect, useState } from "react";
import { getDataProducts } from "../service/productsService";
import { getDataOrders } from "../service/ordersService";
import { getDataCities } from "../service/citiesService";
import { getDataSales } from "../service/salesService";



export const dataContext = createContext();


export const DataContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [sales, setSales] = useState([])
    const [cities, setCities] = useState([]);
    useEffect(() => {
        getDataProducts().then((res) => setProducts(res.product));
        getDataOrders().then((res) => setOrders(res.orders));
        getDataCities().then((res) => setCities(res.cities));
        getDataSales().then((res) => setSales(res.sales));

    }, []);

    return (

        <dataContext.Provider value={{ products, setProducts, orders, setOrders, sales, setSales, cities, setCities }}>
            {children}
        </dataContext.Provider>
    );
};