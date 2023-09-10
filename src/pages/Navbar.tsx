import React, { useState } from "react";
import logo from "./../Assets/hamburger.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Nav_menu from "../components/Nav_menu";
import Nav_gadget from "../components/Nav_gadget";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar_logo -mt-4">
        <h1>
          {" "}
          <img src={logo} alt="" /> McFood
        </h1>
      </div>

      <button className="navbar_toggle" onClick={toggleMenu}>
        {isOpen ? "Fermer" : "Menu"}
      </button>

      <Nav_menu />
      <Nav_gadget />
     
    </nav>
  );
}

export default Navbar;
