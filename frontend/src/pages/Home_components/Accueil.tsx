import React from "react";
import bg from "./../../Assets/slider-bg.png";
import banner2 from "./../../Assets/banner-shaope-2.png";
import burger from "./../../Assets/burger.png";
import sharp from "./../../Assets/banner-shape-1.png";
import Welcome_Desc from "../../components/Welcome_Desc";

const Accueil: React.FC = () => {
  return (
    <div className="accueil">
      <img src={bg} alt="" className="accueil_couv" />
      <div className="container">
        <div className="row gx-4" id="row">
          <Welcome_Desc />

          <div className="col-12 col-md-6" id="col2">
            <div className="cling">
              <img src={sharp} alt="" />
            </div>

            <div className="image-burger">
              
              <img src={burger} alt="" className="burger" />
            </div>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
