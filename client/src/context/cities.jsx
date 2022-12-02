import { createContext, useEffect, useState } from "react";
import { getDataCities } from "../service/cities";

export const citiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    getDataCities().then((res) => setCities(res));
  }, []);
  return (
    <citiesContext.Provider value={{ cities, setCities }}>
      {children}
    </citiesContext.Provider>
  );
}

export default CitiesProvider;
