import { Link } from "gatsby";
import React from "react";

const Header = ({ type }) => {
  
  let headerColor = (type === "index") ? "text-white" : "text-black";
  let headerStyle = "text-xl text-center font-sans";

  headerStyle = `${headerColor} ${headerStyle}`;

  return (
    <header className={headerStyle}>
      <h1>HEADER {type}</h1>
    </header>
  )
}

export default Header;