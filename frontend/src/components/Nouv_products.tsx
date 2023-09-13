import React from "react";
import pizza_features from "./../Assets/pizza.jpg";
import burger_features from "./../Assets/burger.jpg";
import juice_features from "./../Assets/juice.jpg";
import { usePanier } from './../pages/PanierContexte';

const Nouv_products: React.FC = () => {
  const { incrementerPanier } = usePanier();

  return (
    <div className="row" id="row2">
      <div className="col-4">
        <div className="Nouveautés_card">
          <div className="image">
            <img src={pizza_features} alt="" />
          </div>
          <div className="box-contents text-center">
            <h1>Pizza au poulet</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum </p>
            <button className="btn btn-warning" onClick={incrementerPanier}>Commander</button>
          </div>
        </div>
      </div>

      <div className="col-4">
      <div className="Nouveautés_card">
          <div className="image">
            <img src={juice_features} alt="" />
          </div>
          <div className="box-contents text-center">
            <h1>Jus de fruits</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum </p>
            <button className="btn btn-warning" onClick={incrementerPanier}>Commander</button>
          </div>
        </div>
      </div>

      <div className="col-4">
      <div className="Nouveautés_card">
          <div className="image">
            <img src={burger_features} alt="" />
          </div>
          <div className="box-contents text-center" id="burger">
            <h1>Hamburger</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum </p>
            <button className="btn btn-warning" onClick={incrementerPanier}>Commander</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nouv_products;
