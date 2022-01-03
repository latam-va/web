import React from "react";
import AboutSection from "../../lib/AboutSection";
import acars from "../../public/images/acars.png";

const About = () => {
  return (
    <div className="flex flex-col h-screen bg-zinc-100  w-full items-center justify-center">
      <div className="flex">
        <h1 className="font-montseratCustom font-bold text-6xl">
          Que ofrecemos?
        </h1>
      </div>
      <div className="flex flex-row justify-center items-start mt-[5rem]">
        <AboutSection
          imagen={acars}
          titulo="Sistema ACARS super completo"
          texto="En LATAM Argentina Virtual ofrecemos un ACARS completamente programado por nosotros el cual incorpora las ultimas tecnologias para hacer de la experienca del usuario la mejor."
        />
        <AboutSection
          imagen={acars}
          titulo="Sistema ACARS super completo"
          texto="En LATAM Argentina Virtual ofrecemos un ACARS completamente programado por nosotros el cual incorpora las ultimas tecnologias para hacer de la experienca del usuario la mejor."
        />
        <AboutSection
          imagen={acars}
          titulo="Sistema ACARS super completo"
          texto="En LATAM Argentina Virtual ofrecemos un ACARS completamente programado por nosotros el cual incorpora las ultimas tecnologias para hacer de la experienca del usuario la mejor."
        />
      </div>
    </div>
  );
};

export default About;
