import React ,{useState} from "react";

const Nav_menu: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div></div>
  );
};

export default Nav_menu;
