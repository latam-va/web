import React from "react";
import Navlink from "../../lib/Navlink";
import Navlogo from "../../lib/Navlogo";
import { signIn, signOut, useSession } from "next-auth/react";
import AuthButton from "../../lib/AuthButton";

const Navbar = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div className="flex shadow-xl basis-full w-full h-auto p-0 bg-gradient-to-r from-main to-secondary items-center justify-center overflow-hidden flex-row sm:justify-between">
      <div className="nav-logo flex-col flex items-start justify-center">
        <Navlogo linkDestination="#" linkText="LATAM Argentina Virtual" />
      </div>
      <div className="nav-link flex-col text-center flex items-center ml-5 mt-5 sm:ml-auto md:flex-row">
        <Navlink destination="/" text="Home" />
        <Navlink destination="/staff" text="Staff" />
        <Navlink destination="mailto:contacto@latamva.com.ar" text= 'Contact' />
      </div>
    </div>
  );
};

export default Navbar;
