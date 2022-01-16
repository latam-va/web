import React from "react";
import AboutSection from "../../lib/AboutSection";
import acars from "../../public/images/acars.png";
import discord from "../../public/images/discord.png";
import rutas from "../../public/images/rutas.jpeg";
import libreria from "../../public/images/libreria.jpg";
import { useRouter } from "next/router";

const Offers = () => {
  const { locale } = useRouter();

  return (
    <div className="flex flex-col h-full bg-zinc-100 w-full items-center justify-center">
      <div className="flex">
        {locale === "en-UK" && (
          <h1 className="font-montseratCustom font-bold mt-10 text-2xl sm:text-5xl">
            What do we offer?
          </h1>
        )}

        {locale === "es-AR" && (
          <h1 className="font-montseratCustom font-bold mt-10 text-2xl sm:text-5xl">
            ¿Que ofrecemos?
          </h1>
        )}
      </div>
      {locale === "es-AR" && (
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
      )}
       {locale === "en-UK" && (
        <div className="flex flex-col justify-around items-start mt-[1rem] sm:flex-row">
          <AboutSection
            imagen={discord}
            titulo="Discord"
            texto="Our pilots have access to a Discord server in which they can talk to other pilots or request support."
          />
          <AboutSection
            imagen={rutas}
            titulo="Real Routes"
            texto="We have implemented real LATAM Argentina routes in our system which means that our pilots can have a super realistic experience."
          />
          <AboutSection
            imagen={libreria}
            titulo="Liveries"
            texto="We offer 100% custom made liveries with high detail. This liveries are compatible with most addons in the market like the Aerosoft, FSLabs, Toliss, Flight Factor, etc..."
          />
        </div>
      )}
    </div>
  );
};

export default Offers;
