import React from "react";
import { PanierProvider } from './pages/Home_components/PanierContexte';
import HomePage from "./pages/HomePage";;

const App: React.FC = () => {
  return (
    <PanierProvider>
      <div>
      <HomePage/>
      </div>
    </PanierProvider>
  );
};

export default App;
