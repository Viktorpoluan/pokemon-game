import React, { useState } from "react";
import Menu from "./Menu";
import NavBar from "./NavBar";

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(false);
  const handleClickHamburger = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Menu isOpen={isOpen} handleClickHamburger={handleClickHamburger}/>
      <NavBar
        isOpen={isOpen}
        handleClickHamburger={handleClickHamburger}
        bgActive={bgActive}
      />
    </>
  );
};
export default MenuHeader;
