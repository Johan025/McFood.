import React from "react";

const Offres_contents: React.FC = () => {
  return (
    <div className="row  text-start mt-4 g-0" id="row2">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="box-content">
          <h3>Jus d' orange</h3>
          <p className="mt-3">Lorem ipsum dolor sit amet consectetur </p>

          <div className="price">
            <h2> prix: 10 000 Ar</h2>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6  col-lg-4">
        <div className="box-content2">
          <h3>Le big burger </h3>
          <p className="mt-3">Lorem ipsum dolor sit amet consectetur</p>

          <div className="price">
            <h2 className="text-warning"> prix: 14 000 Ar</h2>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4">
      <div className="box-content3">
          <h3> Pizza poulet</h3>
          <p className="mt-3">Lorem ipsum dolor sit amet consectetur </p>

          <div className="price">
            <h2> prix: 20 000 Ar</h2>
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-8" id="col4">
        <div className="box-content4 text-center bg-warning">
        <h3 className="text-dark"> le meilleur fast food</h3>
          <p className="mt-3 text-light">Lorem ipsum dolor sit amet consectetur </p>
          <button className="btn btn-dark p-2">Explorer</button>
        </div>
      </div>

      <div className="col-8">
        <div className="box-content4"></div>
      </div>
    </div>
  );
};

export default Offres_contents;
