import { useEffect, useState } from "react";
import { getDataCities } from "./service/cities";
import './App.css';


function App() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    getDataCities().then((res) => setCities(res));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        hello
        
        {cities}
      </header>
    </div>
  );
}

export default App;

