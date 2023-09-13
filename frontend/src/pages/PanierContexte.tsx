// PanierContext.tsx
import React, { createContext, useContext, useState , ReactNode } from 'react';
import Order from '../components/typescript/Order';
import PanierContextType from '../components/typescript/PanierContext';

type Props = {
    children: ReactNode;
  };

const PanierContext = createContext<PanierContextType | undefined>(undefined);

export const usePanier = () => {
  const context = useContext(PanierContext);

  if (!context) {
    throw new Error('usePanier must be used within a PanierProvider');
  }
  return context;
};

export const PanierProvider = ({ children }: Props) => {
  const [panier, setPanier] = useState<number>(0);
  const [navpanier, setNavpanier]=useState<boolean>(false);
  const [cart, Setaddcart]=useState<Order[]>([]);
  const [livraison, setLivraison]=useState<boolean>(false);


  const clearPanier = () => {
    Setaddcart([]); 
  };

  const toggleLivraison = () => {
       setLivraison(!livraison);
  }

  const togglePanier= () => {
      setNavpanier(!navpanier);
  }

  const incrementerPanier = () => {
    setPanier(panier + 1);
  };

  const addCart  = (item:Order) => {
       Setaddcart([...cart,item]);

  }

  return (
    <PanierContext.Provider value={{ navpanier,panier, incrementerPanier,togglePanier , addCart ,cart, clearPanier, livraison, toggleLivraison}}>
      {children}
    </PanierContext.Provider>
  );
};
