import React, { memo } from "react";
import { usePanier } from './PanierContexte';
import Panier_components from "./../../components/Panier_components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

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
              <h1> <FontAwesomeIcon icon={faCartShopping} className="icone" /> Votre panier </h1>
              <div className="lig"></div>

              <div className="delete d-flex justify-content-end">
                  <h1 onClick={clearPanier}>  <FontAwesomeIcon icon={faTrash} className="icone" /> Vider</h1>
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
