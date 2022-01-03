import React from "react";
import Navlink from "../../lib/Navlink";
import Navlogo from "../../lib/Navlogo";

const Navbar = () => {
  return (
    <div className="flex flex-col shadow-xl basis-full w-full h-auto p-0 bg-gradient-to-r from-main to-secondary items-center justify-between overflow-hidden md:flex-row md:h-20">
        <div className="nav-logo flex-col flex items-center justify-center md:flex-row">
            <Navlogo linkDestination="#" linkText="LATAM Argentina Virtual" />
        </div>
      <div className="nav-link flex-col flex items-center ml-auto md:flex-row">
        <Navlink destination="#" text="Inicio" />
        <Navlink destination="#" text="Staff" />
        <Navlink destination="#" text="Pilotos" />
        <Navlink destination="#" text="Registrarse" />
      </div>
    </div>
  );
};

export default Navbar;
