import React from "react";

const Nav_menu: React.FC = () => {
  return (
    <ul className="navbar_menu">
      <li className="active">ACCUEIL</li>
      <li>PRODUITS</li>
      <li>LIVRAISONS</li>
      <li>COMMANDES</li>
    </ul>
  );
};

export default Nav_menu;
