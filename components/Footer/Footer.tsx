import React from "react";
import Image from "next/image";
import partner from "../../public/images/partner.png";
import ar from "../../public/images/ar.png";
import FooterCol from "../../lib/FooterCol";

import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-r from-main to-secondary justify-between items-center sm:flex-row">
      <div className="flex flex-col m-10 hover:cursor-pointer">
        <Link href={"https://ar.ivao.aero"} passHref>
          <Image src={ar} alt="partner" width={"280"} height={"112"} />
        </Link>
      </div>

      <div className="flex flex-col m-10">
        <h1 className="font-semibold text-2xl text-center text-slate-100 mb-5">
          LATAM Argentina Virtual © 2022
        </h1>
        <div className="flex flex-row items-center justify-between">
          <SocialIcon
            className="mr-2"
            url="https://twitter.com/LatamArgVirtual"
          />
          <SocialIcon
            className="mr-2"
            url="https://instagram.com/latamva_arg"
          />
          <SocialIcon
            className="mr-2"
            url="https://www.facebook.com/LATAM-Argentina-Virtual-110989594796657/"
          />
        </div>
      </div>
      <div className="flex flex-col m-10 ">
        <Link href={"https://ivao.aero"} passHref>
          <Image src={partner} alt="partner" width={"270"} height={"100"} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
