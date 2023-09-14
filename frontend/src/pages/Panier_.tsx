import React, { memo } from "react";
import { usePanier } from './../pages/PanierContexte';
import Panier_components from "../components/Panier_components";


interface Props {
  item: number;
}


const Panier_ : React.FC= () => {

    const {navpanier, clearPanier}= usePanier();
    
    
  return (
    <div className={`panier_ ${navpanier ? "open" : "close"}`}>
       <div className="container">
        <div className="row" id="row">
          <div className="col-12">
            <div className="title">
              <h1>Votre panier</h1>
              <div className="lig"></div>

              <div className="delete">
                  <h1 onClick={clearPanier}>Tout Annuler</h1>
              </div>
            </div>
          </div>
        </div>

         <Panier_components/> 

    
      </div>
    </div>
  );
};

export default Panier_;
