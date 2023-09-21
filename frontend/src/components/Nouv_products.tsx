import React from "react";
import pizza_features from "./../Assets/pizza.jpg";
import burger_features from "./../Assets/burger.jpg";
import juice_features from "./../Assets/juice.jpg";
import { usePanier } from './../pages/Home_components/PanierContexte';
import Nouveautés from "../pages/Home_components/Nouveautés";
import Order from "./typescript/Order";

const Nouv_products: React.FC = () => {


  const { incrementerPanier, togglePanier ,addCart } = usePanier();

  const item1:Order= {
    name: 'pizza',
    price: '20 000Ar',
    image: require('./../Assets/pizza.jpg') ,
  };

  const item2 :Order= {
    name: 'jus de fruits',
    price: '20 000Ar',
    image: require('./../Assets/juice.jpg'),
  };

  const item3 :Order= {
    name: 'hamburger',
    price: '20 000Ar',
    image: require('./../Assets/burger.jpg') ,
  };




  return (
    <div className="row gy-5 gx-5 g-lg-5" id="row2">
      <div className="col-6 col-lg-4">
      <div className="Nouveautés_card">
          <div className="image">
            <img src={pizza_features} alt="" />
          </div>
          <div className="box-contents text-center">
            <h1>Pizza</h1>
            <p>Prix: 20 000Ar </p>
            <button className="btn btn-warning" onClick={() => {incrementerPanier();  addCart(item1)}}>Commander</button>
          </div>
        </div>
      </div>

      <div className="col-6 col-lg-4">
      <div className="Nouveautés_card">
          <div className="image">
            <img src={juice_features} alt="" />
          </div>
          <div className="box-contents text-center">
            <h1>Jus de fruits</h1>
            <p>Prix : 7000 Ar </p>
            <button className="btn btn-warning" onClick={() => {incrementerPanier(); addCart(item2)}}>Commander</button>
          </div>
        </div>
      </div>

      <div className="col-6 col-lg-4">
      <div className="Nouveautés_card">
          <div className="image">
            <img src={burger_features} alt="" />
          </div>
          <div className="box-contents text-center">
            <h1>Hamburger</h1>
            <p>Prix : 9 000 Ar</p>
            <button className="btn btn-warning" onClick={() => {incrementerPanier(); addCart(item3)}}>Commander</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nouv_products;
