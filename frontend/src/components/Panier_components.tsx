import React from "react";
import pizza from "./../Assets/pizza.jpg";
import Order from "./Order";
import { usePanier } from "./../pages/PanierContexte";

const Panier_components = () => {
  const { cart } = usePanier();

  return (
    <div className="row" id="row2">
      <div className="col-12">
        {cart.map((item, index) => (
          <div className="products mt-5">
            <img src={pizza} alt="" />
            <h1></h1>
            <p></p>
            <button className="btn btn-warning">Livraison</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panier_components;
