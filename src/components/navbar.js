import React from "react";

/* Importar los componentes */
import Logo from "./logo";
import SearchBar from "./search-bar";
import Icon from "./icon";
import Login from "./login";
/* Importar los iconos */

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Logo logo={props.logo} />
      <SearchBar />
      <Icon />
      <Icon />
      <Icon />
      <Login />
    </div>
  );
}
