import React from "react";
import Image from "next/image";
import partner from "../../public/images/partner.png";
import ar from "../../public/images/ar.png";
import FooterCol from "../../lib/FooterCol";
 
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className="flex flex-row w-full h-50 bg-gradient-to-r from-main to-secondary justify-start items-center">
      <div className="flex flex-col m-10">
        <Image src={ar} alt="partner" width={"300"} height={"112"} />
      </div>
      <div className="flex flex-col m-10">
        <Image src={partner} alt="partner" width={"300"} height={"100"} />
      </div>
      <div className="flex flex-col m-10">
        <h1 className="font-semibold text-2xl text-slate-100 mb-5">
          LATAM Argentina Virtual © 2022
        </h1>
        <div className="flex flex-row">
          <SocialIcon className="mr-2" url="https://twitter.com/LatamArgVirtual" />
          <SocialIcon className="mr-2" url="https://instagram.com/latamva_arg" />
          <SocialIcon className="mr-2" url="https://www.facebook.com/LATAM-Argentina-Virtual-110989594796657/" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
