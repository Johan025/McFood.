import React from "react";
import pizza_features from "./../Assets/pizza.jpg";
import burger_features from "./../Assets/burger.jpg";
import juice_features from "./../Assets/juice.jpg";
import Order from "./typescript/Order";
import { usePanier } from "./../pages/Home_components/PanierContexte";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faTrash} from "@fortawesome/free-solid-svg-icons";

const Panier_components = () => {
  const { cart ,toggleLivraison } = usePanier();

  return (
    <div className="row" id="row2">
      <div className="col-12">
        {cart.length === 0 ? (
          <h1 className="vide"><FontAwesomeIcon icon={faCartShopping} className="icone" /> Panier vide</h1>
        ) : (
          cart.map((item: any, index: any) => (
            <div className="products mt-5" key={index}>
              <img src={item.image} alt="" />
              <h1>{item.name}</h1>

              <div className="gadget d-flex justify-content-end">
                <p>{item.price}</p>
                <button className="btn btn-warning" onClick={toggleLivraison}>
                <FontAwesomeIcon icon={faTruck} className="icone" />
                </button>
                <button className="btn btn-danger" onClick={toggleLivraison}>
                  <FontAwesomeIcon icon={faTrash} className="icone" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Panier_components;
