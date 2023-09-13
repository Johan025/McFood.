import React from 'react';
import about_image from "./../Assets/about.png";
import about_shape from "./../Assets/about-shape.png"

const Services_thumb: React.FC = () => {
    return (
        <div className="col-6">
            <div className="about-thumb">
                 <h3>LIRE LE CONTENU</h3>
            </div>
            <div className="about-image">
                   <img src={about_image} alt="" />
            </div>
            <div className="about-bounce">
               <img src={about_shape} alt="" />
            </div>
      </div>
    );
};

export default Services_thumb;