
import './App.css';

import Dashboard from './components/pages/Dashboard/Dashboard';
import { DataContextProvider } from './context/dataContext';


function App() {

  return (
    <div className="App">
      <DataContextProvider>
        <Dashboard />
      </DataContextProvider>
    </div>
  );
}

export default App;

