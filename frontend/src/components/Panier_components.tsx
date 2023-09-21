import React from "react";
import pizza_features from "./../Assets/pizza.jpg";
import burger_features from "./../Assets/burger.jpg";
import juice_features from "./../Assets/juice.jpg";
import Order from "./typescript/Order";
import { usePanier } from "./../pages/Home_components/PanierContexte";

const Panier_components = () => {
  const { cart ,toggleLivraison } = usePanier();

  return (
    <div className="row" id="row2">
     <div className="col-12">
        {cart.length === 0 ? (
          <h1 className="vide">Panier vide</h1>
        ) : (
          cart.map((item: any, index: any) => (
            <div className="products mt-5" key={index}>
              <img src={item.image} alt="" />
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <button className="btn btn-warning" onClick={toggleLivraison}>Livraison</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Panier_components;
