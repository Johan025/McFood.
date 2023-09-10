import React from "react";
import Services_thumb from "../components/Services_thumb";
import Services_desc from "../components/Services_desc";

const Services : React.FC = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row g-2 d-flex">
            <Services_thumb/>
            <Services_desc/> 
        </div>
      </div>
    </div>
  );
};

export default Services;
