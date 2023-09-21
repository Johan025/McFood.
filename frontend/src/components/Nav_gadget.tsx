import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { usePanier } from './../pages/Home_components/PanierContexte';

interface NavGadgetProps {
  panier: number;
}

const Nav_gadget = ({ panier }: NavGadgetProps) => {
  
  const {togglePanier}= usePanier();
  
    return (
        <div className="navbar_gadget">
        <FontAwesomeIcon icon={faSearch} className="icone" />
        <FontAwesomeIcon icon={faCartShopping} className="icone" onClick={togglePanier} />
        <FontAwesomeIcon icon={faUser} className="icone" />

        <div className="number">{panier}</div>
      </div>

      
    );
};

export default Nav_gadget;