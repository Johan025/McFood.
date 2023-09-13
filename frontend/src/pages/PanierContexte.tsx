// PanierContext.tsx
import React, { createContext, useContext, useState , ReactNode } from 'react';

interface Order {
  name: string;
  price: number;
  quantity: number;
  // Vous pouvez ajouter d'autres propriétés liées à la commande au besoin.
}

type PanierContextType = {
  navpanier:boolean;
  panier: number;
  incrementerPanier: () => void;
  togglePanier: () => void;
  addCart  : (newcart:Order) => void;
  cart: Order[];
};

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
  const [cart, Setaddcart]=useState<Order[]>([]);;

  const togglePanier= () => {
      setNavpanier(!navpanier);
  }

  const incrementerPanier = () => {
    setPanier(panier + 1);
  };

  const addCart  = (newCart:Order) => {
       Setaddcart([...cart,newCart]);
  }

  return (
    <PanierContext.Provider value={{ navpanier,panier, incrementerPanier,togglePanier , addCart ,cart}}>
      {children}
    </PanierContext.Provider>
  );
};
