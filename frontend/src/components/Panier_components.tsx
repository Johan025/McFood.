import React from 'react';
import pizza from './../Assets/pizza.jpg';

const Panier_components = () => {
    return (
        <div className="container">
        <div className="row" id="row">
          <div className="col-12">
            <div className="title">
              <h1>Votre panier</h1>
              <div className="lig"></div>
            </div>
          </div>
        </div>

        <div className="row" id="row2">
               <div className="col-12">
                      <div className="products mt-5">
                            <img src={pizza} alt="" />
                            <h1>Pizza</h1>
                            <p>10 000 Ar</p>
                            <button className="btn btn-warning">Livraison</button>
                      </div>

                      <div className="products mt-5">
                            <img src={pizza} alt="" />
                            <h1>Pizza</h1>
                            <p>10 000 Ar</p>
                            <button className="btn btn-warning">Livraison</button>
                      </div>
               </div>

              
        </div>

      </div>
    );
};

export default Panier_components;