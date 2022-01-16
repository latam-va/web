import React from "react";
import AboutSection from "../../lib/AboutSection";
import acars from "../../public/images/acars.png";
import discord from "../../public/images/discord.png";
import rutas from "../../public/images/rutas.jpg";
import libreria from '../../public/images/libreria.jpg'
import piloto from '../../public/images/piloto.webp'

const Inscripcion = () => {
  return (
    <div className="flex flex-col h-full bg-zinc-200  w-full items-center justify-center">
      <div className="flex mt-10">
        <h1 className="font-montseratCustom font-bold text-2xl sm:text-5xl">
          Registration
        </h1>
      </div>
      <div className="flex flex-row justify-around items-start mt-[4rem]">
        <AboutSection
          imagen={piloto}
          titulo="Nuevos Pilotos"
          texto="For the time beign registrations are closed as we are developing our new flight report system."
        />
      </div>
    </div>
  );
};

export default Inscripcion;
