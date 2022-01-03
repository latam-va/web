import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.svg";

type cardProps = {
  imageLink: string;
  imageSrc: string;
  h5Text: string;
  h5Link: string;
  pText: string;
};

const Card = (props: cardProps) => {
  return (
    <div className="flex flex-col ml-3.5 bg-white shadow-md border border-gray-200 rounded-lg h-96 w-[25rem]">
      <Link href={props.imageLink}>
        <a>
          <Image src={props.imageSrc} alt="brand image" />
        </a>
      </Link>
      <div className="p-5">
        <Link href={props.h5Link}>
          <a>
            <h5 className="text-zinc-900 font.bold text-2xl tracking-tight mb-2">
              {props.h5Text}
            </h5>
          </a>
        </Link>
        <p className="font-normal text-gray-700 mb-3">{props.pText}</p>
      </div>
    </div>
  );
};

export default Card;
