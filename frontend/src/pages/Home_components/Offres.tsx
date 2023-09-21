import React from "react";
import Offres_title from "../../components/Offres_title";
import Offres_contents from "../../components/Offres_contents";

const Offres: React.FC = () => {
  return (
    <div className="offres">
      <div className="container">
          <Offres_title/> 
          <Offres_contents/> 

      </div>
    </div>
  );
};

export default Offres;
