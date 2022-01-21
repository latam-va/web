import React from "react";
import AboutSection from "../../lib/AboutSection";
import acars from "../../public/images/acars.png";
import discord from "../../public/images/discord.png";
import rutas from "../../public/images/rutas.jpg";
import libreria from "../../public/images/libreria.jpg";
import piloto from "../../public/images/piloto.webp";
import { useRouter } from "next/router";

const Inscripcion = () => {
  const { locale } = useRouter();

  return (
    <div className="flex flex-col h-full bg-zinc-200  w-full items-center justify-center">
      <div className="flex mt-10">
        <h1 className="font-montseratCustom font-bold text-2xl sm:text-5xl">
          Inscripciones
        </h1>
      </div>
      <div className="flex flex-row justify-around items-start mt-[4rem]">
        {locale === "es-AR" && (
          <AboutSection
            imagen={piloto}
            titulo="Nuevos Pilotos"
            texto="De momento las inscripciones para la aerolinea estan cerradas, pero ya estamos trabajando para organizar y reabrir las inscripciones."
            alt="piloto virtual"
          />
        )}
        {locale === "en-UK" && (
          <AboutSection
          imagen={piloto}
          titulo="Registrations"
          texto="For the time being registrations are closed as we are working on our new report system for our pilots."
          alt="virtual pilot"
        />
        )}
      </div>
    </div>
  );
};

export default Inscripcion;
