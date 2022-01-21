import React from "react";
import Image from "next/image";
import placeholder from "../public/images/acars.png";

interface AboutProps {
  titulo: string;
  texto: string;
  imagen: StaticImageData;
  alt: string;
}

const AboutSection = ({ titulo, texto, imagen, alt }: AboutProps) => {
  return (
    <div className="flex flex-col max-w-sm items-center justify-between text-center m-5">
      <div className="">
        <Image
          height={"150px"}
          width={"150px"}
          className="rounded-full"
          src={imagen}
          alt={alt}
        />
        <h2 className="text-3xl mb-5 mt-5 font-semibold font-montseratCustom">
          {titulo}
        </h2>
        <p className="font-montseratCustom font-medium">{texto}</p>
      </div>
    </div>
  );
};

export default AboutSection;
