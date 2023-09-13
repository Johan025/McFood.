import React from "react";
import pizza_features from "./../Assets/pizza.jpg";
import burger_features from "./../Assets/burger.jpg";
import juice_features from "./../Assets/juice.jpg";
import { usePanier } from './../pages/PanierContexte';
import Nouveautés from "../pages/Nouveautés";
import Order from "./Order";

const Nouv_products: React.FC = () => {


  const { incrementerPanier, togglePanier ,addCart } = usePanier();

  const item1:Order= {
    name: 'pizza',
    price: '20 000Ar',
  };

  const item2 :Order= {
    name: 'jus de fruits',
    price: '20 000Ar',
  };

  const item3 :Order= {
    name: 'hamburger',
    price: '20 000Ar',
  };




  return (
    <div className="row" id="row2">
      <div className="col-4">
      <div className="Nouveautés_card">
          <div className="image">
            <img src={pizza_features} alt="" />
          </div>
          <div className="box-contents text-center">
            <h1>Pizza</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum </p>
            <button className="btn btn-warning" onClick={() => {incrementerPanier();  addCart(item1)}}>Commander</button>
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
            <button className="btn btn-warning" onClick={() => {incrementerPanier(); addCart(item2)}}>Commander</button>
          </div>
        </div>
      </div>

      <div className="col-4">
      <div className="Nouveautés_card">
          <div className="image">
            <img src={burger_features} alt="" />
          </div>
          <div className="box-contents text-center">
            <h1>Hamburger</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum </p>
            <button className="btn btn-warning" onClick={() => {incrementerPanier(); addCart(item3)}}>Commander</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nouv_products;
