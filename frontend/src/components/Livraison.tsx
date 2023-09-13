import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faSortDown} from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

const Livraison :React.FC = () => {

    const [number, setNumber]=useState<number>(0);

    function incrementer(){
       setNumber(number+1);
    }

    function decrementer(){
      setNumber(number-1);
    }

  return (
    <div className="Livraison text-center">
    
      <div className="container">
        <div className="row" id="row1">
          <div className="col-12">
            <h1>
              {" "}
              <FontAwesomeIcon
                icon={faTruck}
                className="icone"
                id="truck"
              />{" "}
              LIVRAISON CLIENT
            </h1>
            <div className="lig"></div>
          </div>
        </div>

        <div className="row" id="row2">
          <div className="col-12">
            <div className="form">
              <form action="" method="post">
                <div className="part1">
                  <input type="text" name="" id="name" placeholder="Nom pour livraison" />
                  <input type="text" name="" id="adress" placeholder="Produit pour la livraison" />
                </div>

                <div className="part2">
                  <input type="text" name="" id="" placeholder="Entrez l' adresse pour la livraison"/>
                  <div className="quantite">
                    <h2 className="mt-3 number">{number}</h2>
                    <FontAwesomeIcon
                      icon={faSortUp}
                      className="icone"
                      onClick={incrementer}
                      id="up"
                    />

                    <FontAwesomeIcon
                      icon={faSortDown}
                      className="icone"
                      id="down"
                      onClick={decrementer}
                    />
                  </div>

                  <div className="button">
                      <input type="reset" value="effacer" id="effacer"/>
                      <input type="submit" value="Envoyer" id="envoyer" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livraison;
