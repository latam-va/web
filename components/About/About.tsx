import React from "react";
import AboutSection from "../../lib/AboutSection";
import acars from "../../public/images/acars.png";
import discord from "../../public/images/discord.png";
import rutas from "../../public/images/rutas.jpeg";
import libreria from "../../public/images/libreria.jpg";

const Offers = () => {
  return (
    <div className="flex flex-col h-full bg-zinc-100 w-full items-center justify-center">
      <div className="flex">
        <h1 className="font-montseratCustom font-bold mt-10 text-2xl sm:text-5xl">
          What do we offer?
        </h1>
      </div>
      <div className="flex flex-col justify-around items-start mt-[1rem] sm:flex-row">
        <AboutSection
          imagen={discord}
          titulo="Discord"
          texto="Our pilots have access to a Discord server in which they can gather with other pilots or request support with whatever they need."
        />
        <AboutSection
          imagen={rutas}
          titulo="Real Routes"
          texto="We have incorporated all real routes that LATAM Argentina flies. This means that our pilots can simulate LATAM's operations as close as reality as possible."
        />
        <AboutSection
          imagen={libreria}
          titulo="Librerias"
          texto="In LATAM Argentina Virtual we offer 100% custom made liveries with a high level of detail. This liveries are compatible with most addons, Aerosoft, FSLabs, Toliss, Flight Factor, etc..."
        />
      </div>
    </div>
  );
};

export default Offers;
