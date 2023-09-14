import React, { useState } from "react";
import logo from "./../Assets/hamburger.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nav_menu from "../components/Nav_menu";
import Nav_gadget from "../components/Nav_gadget";

import { usePanier } from "./PanierContexte";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { panier } = usePanier();

  return (
    <nav className="navbar">
      <div className="navbar_logo -mt-4">
        <h1>
          {" "}
          <img src={logo} alt="" /> McFood
        </h1>
      </div>

      <button className="navbar_toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="icone_hamburger" />
      </button>

      <div className={`navbar_menu ${isOpen ? "open_nav" : "close_nav"}`} id="nav_menu">
        <ul className="toogle_nav text-center">
          <li className="active">ACCUEIL</li>
          <li>MENU</li>
          <li>LIVRAISONS</li>
          <li>COMMANDES</li>
        </ul>
      </div>
      <Nav_gadget panier={panier} />
    </nav>
  );
}

export default Navbar;
