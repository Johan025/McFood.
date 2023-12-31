import React from "react";
import playstore_icon from "./../Assets/deliver-thumb.png";
import appstore_icon from "./../Assets/delivar-thumb-2.png";

const App_desc = () => {
  return (
    <div className="delivery-box">
      <div className="maintitle">
        <h1>Voir McFood sur</h1>
      </div>

      <div className="icone d-flex mt-5">
        <div className="icon-playstore mx-0">
          <img src={playstore_icon} alt="" className="icon" />
        </div>

        <div className="icon-appstore mx-0 mx-md-5">
          <img src={appstore_icon} alt="" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default App_desc;
