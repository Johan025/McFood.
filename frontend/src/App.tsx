import React from "react";
import { PanierProvider } from './pages/Home_components/PanierContexte';
import HomePage from "./pages/HomePage";;

const App: React.FC = () => {
  return (
    <PanierProvider>
      <div className="app">
        <HomePage />
      </div>
    </PanierProvider>
  );
};

export default App;
