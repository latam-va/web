import React from "react";
import AboutSection from "../../lib/AboutSection";
import acars from "../../public/images/acars.png";

const Offers = () => {
  return (
    <div className="flex flex-col h-screen bg-zinc-100  w-full items-center justify-center">
      <div className="flex">
        <h1 className="font-montseratCustom font-bold text-6xl">
          Que ofrecemos?
        </h1>
      </div>
      <div className="flex flex-row justify-around items-start mt-[4rem]">
        <AboutSection
          imagen={acars}
          titulo="Discord"
          texto="Nuestros pilotos tienen acceso a un servidor de discord en el cual pueden reunirse con otros pilotos o recibir ayuda con lo que necesiten."
        />
        <AboutSection
          imagen={acars}
          titulo="Rutas Reales"
          texto="Incorporamos todas las rutas que opera LATAM Argentina Virtual. Esto quiere decir que nuestros pilotos podran simular al maximo las operaciones de LATAM Argentina"
        />
        <AboutSection
          imagen={acars}
          titulo="Librerias"
          texto="En LATAM Argentina Virtual ofrecemos librerias completamente creadas desde 0 por nosotros las cuales tienen un nivel de detalle alto. Estas mismas, son compatibles con la mayoria de aviones del mercado, Aerosoft, FSLabs, Toliss, Flight Factor, etc..."
        />
      </div>
    </div>
  );
};

export default Offers;