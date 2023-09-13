import React from 'react';
import Order from './typescript/Order';
import { usePanier } from './../pages/PanierContexte';

interface Props{
    items: {
        name: string;
        image: string;
      };
}

const Nouveaux:  React.FC<Props> = ({items}) => {

    const { incrementerPanier } = usePanier();
    const {togglePanier} =usePanier();
    const {addCart} =usePanier();

    return (
        <div className="Nouveautés_card">
    
          </div>
    );
};

export default Nouveaux;