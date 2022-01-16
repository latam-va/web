import React from "react";
import Navlink from "../../lib/Navlink";
import Navlogo from "../../lib/Navlogo";
import { useRouter } from "next/router";

const Navbar = () => {
  const { locale, locales, asPath } = useRouter();
  console.log(locales)
  console.log(locale)

  return (
    <div className="flex shadow-xl basis-full w-full h-auto p-0 bg-gradient-to-r from-main to-secondary items-center justify-center overflow-hidden flex-row sm:justify-between">
      <div className="nav-logo flex-col flex items-start justify-center">
        <Navlogo linkDestination="/" linkText="LATAM Argentina Virtual" />
      </div>
      <div className="nav-link flex-col flex items-center ml-5 mt-5 sm:ml-auto md:flex-row">
        {locale === "en-UK" && <Navlink destination="/" text="Home" />}
        {locale === "en-UK" && <Navlink destination="/staff" text="Staff" />}
        {locale === "en-UK" && <Navlink destination="mailto:contacto@latamva.com.ar" text="Contact" />}
        {locale === "es-AR" && <Navlink destination="/" text="Inicio" />}
        {locale === "es-AR" && <Navlink destination="/staff" text="Staff" />}
        {locale === "es-AR" && <Navlink destination="mailto:contacto@latamva.com.ar" text="Contactar" />}
      </div>
    </div>
  );
};

export default Navbar;
