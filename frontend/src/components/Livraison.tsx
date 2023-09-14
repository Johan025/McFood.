import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { usePanier } from "./../pages/PanierContexte";

const Livraison: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [produit, setProduit] = useState<string>("");
  const date = new Date();
  const [number, setNumber] = useState<number>(1);
  const { livraison } = usePanier();

  const handleChange = async (e: any) => {
    setName(e.target.value);

  };

  const handleChange2 = async (e: any) => {
    setAdresse(e.target.value);
  };

  const handleChange3 = async (e: any) => {
    setProduit(e.target.value);
  };

  const API = async (e:any) => {
    e.preventDefault();


    try {
      await axios.post("http://localhost:8000/", {
        //connexion avec node js
        name,
        adresse,
        produit,
        date,
        number
      });

      console.log("les donnés ont été recus");

    } catch (err) {
      console.log(err);
    }
  };
  
  if (number<1){
    setNumber(1);
  }
  

  function incrementer() {
    setNumber(number + 1);
  }

  function decrementer() {
    setNumber(number - 1);

    
  }

  return (
    <div className={`Livraison ${livraison ? "Ouvrir_livraison" : "Fermer_livraison"}`}>
      <div className="container text-center">
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
              <form  action="post" onSubmit={API}>
                <div className="part1">
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="Nom pour livraison"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name=""
                    id="adress"
                    placeholder="Produit pour la livraison"
                    onChange={handleChange3}
                  />
                </div>

                <div className="part2">
                  <input
                    type="text"
                    name=""
                    onChange={handleChange2}
                    id=""
                    placeholder="Entrez l' adresse pour la livraison"
                  />
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
                    <input type="reset" value="effacer" id="effacer" />
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
