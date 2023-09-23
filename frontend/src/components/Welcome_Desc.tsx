import React from 'react';

const Welcome_Desc: React.FC = () => {
    return (
        <div className="col-12 col-md-6" id="col1">
        <h1>FOOD</h1>
        <h2 className="title">
          <span>Food</span> LE MEILLEUR FAST FOOD

        </h2>
        <p className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          vitae provident delectus, rerum optio cumque facere praesentium q
        </p>
        <button className="btn btn-warning">Notre Menu</button>
        <button className="btn btn-dark">Plus de détails</button>
      </div>
    );
};

export default Welcome_Desc;