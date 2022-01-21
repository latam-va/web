import React from "react";
import Image from "next/image";
import Link from "next/link";
import test from "../public/images/test.jpg";
import { useRouter } from "next/router";

interface StaffProps {
  image: StaticImageData;
  name: string;
  job: string;
  mail: string;
  alt: string;
  enAlt: string;
}

const StaffCard = ({ image, name, job, mail, alt, enAlt }: StaffProps) => {
  const { locale } = useRouter();
  return (
    <div className="w-[px] p-2 bg-white rounded-xl shadow-2xl m-5">
      {locale === "es-AR" && (
        <>
          <Image
            className="h-40 object-cover rounded-xl"
            src={image}
            height={"160px"}
            width={"340px"}
            alt={alt}
          />
          <div className="p-2 text-center">
            <h2 className="font-bold text-lg mb-4">{name}</h2>
            <p className="text-sm text-gray-600">{job}</p>
            <Link href={`mailto:${mail}`}>
              <a className="text-xs text-gray-500 hover:text-gray-900 hover:text-sm transition-all">
                Contactar
              </a>
            </Link>
          </div>
        </>
      )}
      {locale === "en-UK" && (
        <>
          <Image
            className="h-40 object-cover rounded-xl"
            src={image}
            height={"160px"}
            width={"340px"}
            alt={enAlt}
          />
          <div className="p-2 text-center">
            <h2 className="font-bold text-lg mb-4">{name}</h2>
            <p className="text-sm text-gray-600">{job}</p>
            <Link href={`mailto:${mail}`}>
              <a className="text-xs text-gray-500 hover:text-gray-900 hover:text-sm transition-all">
                Contact
              </a>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default StaffCard;
