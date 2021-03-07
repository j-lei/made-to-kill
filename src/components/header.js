import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

const Header = ({ type }) => {

  let [headerStyle] = ["text-black text-xl text-center"];

  if (type == "index") {
    headerStyle = "text-white text-xl text-center";
  }

  return (
    <header className={headerStyle}>
      <h1>HEADER {type}</h1>
    </header>
  )
}

export default Header;