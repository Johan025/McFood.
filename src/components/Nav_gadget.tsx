import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Nav_gadget: React.FC = () => {
    return (
        <div className="navbar_gadget">
        <FontAwesomeIcon icon={faSearch} className="icone" />
        <FontAwesomeIcon icon={faCartShopping} className="icone" />
        <FontAwesomeIcon icon={faUser} className="icone" />

        <div className="number">0</div>
      </div>

      
    );
};

export default Nav_gadget;