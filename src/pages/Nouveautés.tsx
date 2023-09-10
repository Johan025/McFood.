import React from "react";
import Nouv_title from "../components/Nouv_title";
import Nouv_products from "../components/Nouv_products";

const Nouveautés: React.FC = () => {
  return (
    <div className="Nouveautés">
      <div className="container">
            <Nouv_title/> 
            <Nouv_products/> 
      </div>
    </div>
  );
};

export default Nouveautés;
