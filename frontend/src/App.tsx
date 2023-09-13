import React from "react";
import Navbar from "./pages/Navbar";
import Accueil from "./pages/Accueil";
import Nouveautés from "./pages/Nouveautés";
import Services from "./pages/Services";
import Offres from "./pages/Offres";
import App_mobile from "./pages/App_mobile";
import { PanierProvider } from './pages/PanierContexte';
import Panier_ from "./pages/Panier_";
import Livraison from "./components/Livraison";

const App: React.FC = () => {
  return (
    <PanierProvider>
      <div>
        <Navbar />
        <Accueil />
        <Nouveautés />
        <Services />
        <Offres />
        <App_mobile />
        <Panier_/>
        <Livraison/>
      </div>
    </PanierProvider>
  );
};

export default App;
