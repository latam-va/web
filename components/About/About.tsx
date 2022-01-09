import React from "react";
import AboutSection from "../../lib/AboutSection";
import acars from "../../public/images/acars.png";
import discord from "../../public/images/discord.png";
import rutas from "../../public/images/rutas.jpeg";
import libreria from '../../public/images/libreria.jpg'

const Offers = () => {
  return (
    <div className="flex flex-col h-full bg-zinc-100 w-full items-center justify-center">
      <div className="flex">
        <h1 className="font-montseratCustom font-bold mt-10 text-2xl sm:text-5xl">
          ¿Que ofrecemos?
        </h1>
      </div>
      <div className="flex flex-col justify-around items-start mt-[1rem] sm:flex-row">
        <AboutSection
          imagen={discord}
          titulo="Discord"
          texto="Nuestros pilotos tienen acceso a un servidor de discord en el cual pueden reunirse con otros pilotos o recibir ayuda con lo que necesiten."
        />
        <AboutSection
          imagen={rutas}
          titulo="Rutas Reales"
          texto="Incorporamos todas las rutas que opera LATAM Argentina Virtual. Esto quiere decir que nuestros pilotos podran simular al maximo las operaciones de LATAM Argentina"
        />
        <AboutSection
          imagen={libreria}
          titulo="Librerias"
          texto="En LATAM Argentina Virtual ofrecemos librerias completamente creadas desde 0 por nosotros las cuales tienen un nivel de detalle alto. Estas mismas, son compatibles con la mayoria de aviones del mercado, Aerosoft, FSLabs, Toliss, Flight Factor, etc..."
        />
      </div>
    </div>
  );
};

export default Offers;
