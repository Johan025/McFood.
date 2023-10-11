import Order from "./Order";

type PanierContextType = {
    navpanier:boolean;
    panier: number;
    incrementerPanier: () => void;
    togglePanier: () => void;
    addCart  : (newcart:Order) => void;
    cart: Order[];
    clearPanier : () => void;
    toggleLivraison : () => void;
    livraison: boolean;
  };

  export default PanierContextType;
  