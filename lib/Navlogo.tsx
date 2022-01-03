import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/images/logo.svg'

type NavlogoProps = {
  linkDestination: string;
  linkText: string;
};

const Navlogo = (props: NavlogoProps) => {
  return (
    <div className="flex flex-row justify-center items-center m-0">
      <div className="flex">
        <Image height='100' width='100' src={logo}  alt="main image"></Image>
      </div>
      <div className="flex justify-center items-center text-[24px] font-semibold text-sky-50 text-lg hover:text-slate-200 transition-colors duration-150">
        <Link href={props.linkDestination}>
          <a>{props.linkText}</a>
        </Link>
      </div>
    </div>
  );
};

export default Navlogo;
