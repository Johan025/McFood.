import React, { memo } from "react";
import { usePanier } from './../pages/PanierContexte';
import Panier_components from "../components/Panier_components";


interface Props {
  item: number;
}


const Panier_ : React.FC= () => {

    const {navpanier}= usePanier();
    const {addCart, cart} =usePanier();

    const HandleAddCart= () => {
        addCart();
    }

  return (
    <div className={`panier_ ${navpanier ? "open" : "open"}`}>
    
    </div>
  );
};

export default Panier_;
