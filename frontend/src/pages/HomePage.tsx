import React from 'react';
import Navbar from "./Home_components/Navbar";
import Accueil from "./Home_components/Accueil";
import Nouveautés from "./Home_components/Nouveautés";
import Services from "./Home_components/Services";
import Offres from "./Home_components/Offres";
import App_mobile from "./Home_components/App_mobile";
import Panier_ from "./Home_components/Panier_";
import Livraison from "./../components/Livraison";

const HomePage = () => {
    return (
      <div className="homepage">
        <Navbar />
        <Accueil />
        <Nouveautés />
        <Services />
        <Offres />
        <App_mobile />
        <Panier_ />
        <Livraison />
      </div>
    );
};

export default HomePage;