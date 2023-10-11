import React, { useState } from "react";
import pizza_features from "./../Assets/pizza.jpg";
import burger_features from "./../Assets/burger.jpg";
import juice_features from "./../Assets/juice.jpg";
import { usePanier } from './../pages/Home_components/PanierContexte';
import Nouveautés from "../pages/Home_components/Nouveautés";
import Order from "./typescript/Order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Nouv_products: React.FC = () => {


  const { incrementerPanier, togglePanier ,addCart } = usePanier();

  const item1:Order= {
    name: 'Pizza Italienne',
    price: '20 000Ar',
    image: require('./../Assets/pizza.jpg') ,
  };

  const item2 :Order= {
    name: 'Jus de fruits',
    price: '7 000Ar',
    image: require('./../Assets/juice.jpg'),
  };

  const item3 :Order= {
    name: 'Hamburger',
    price: '20 000Ar',
    image: require('./../Assets/burger.jpg') ,
  };


  const [up, setUp] = useState<boolean>(false);
  const [up1, setUp1] = useState<boolean>(false);
  const [up2, setUp2] = useState<boolean>(false);

  const MouseHover = () => {
    setUp(true);
  };
  const MouseHover1 = () => {
    setUp1(true);
  };
  const MouseHover2 = () => {
    setUp2(true);
  };

  const MouseOut = () => {
    setUp(false);
  };
  const MouseOut1 = () => {
    setUp1(false);
  };
  const MouseOut2 = () => {
    setUp2(false);
  };

  return (
    <div className="row gy-5 gx-3 g-lg-5" id="row2">
      <div className="col-12 col-md-6 col-lg-4">
        <div
          className="Nouveautés_card  text-center"
          onMouseEnter={MouseHover}
          onMouseLeave={MouseOut}
        >
          <div className="image">
            <img src={pizza_features} alt="" />
          </div>
          <div className={`box-contents ${up ? "open_" : "close_"}`}>
            <h1>Pizza Italienne</h1>
            <div className="lig d-flex justify-content-center"></div>
            <p>Prix: 20 000Ar </p>
            <button
              className="btn btn-warning"
              onClick={() => {
                incrementerPanier();
                addCart(item1);
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faCartShopping} className="icone" /> +
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4">
        <div
          className="Nouveautés_card text-center"
          onMouseEnter={MouseHover1}
          onMouseLeave={MouseOut1}
        >
          <div className="image">
            <img src={juice_features} alt="" />
          </div>
          <div className={`box-contents ${up1 ? "open_" : "close_"}`}>
            <h1>Jus de fruits</h1>
            <div className="lig d-flex justify-content-center"></div>
            <p>Prix : 7000 Ar </p>
            <button
              className="btn btn-warning"
              onClick={() => {
                incrementerPanier();
                addCart(item2);
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} className="icone" /> +
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4">
        <div
          className="Nouveautés_card text-center"
          onMouseEnter={MouseHover2}
          onMouseLeave={MouseOut2}
        >
          <div className="image">
            <img src={burger_features} alt="" />
          </div>
          <div className={`box-contents ${up2 ? "open_" : "close_"}`}>
            <h1>Hamburger au poulet</h1>
            <div className="lig d-flex justify-content-center"></div>
            <p>Prix : 9 000 Ar</p>
            <button
              className="btn btn-warning"
              onClick={() => {
                incrementerPanier();
                addCart(item3);
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} className="icone" /> +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nouv_products;
