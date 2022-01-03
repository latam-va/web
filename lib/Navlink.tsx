import React from "react";
import Link from "next/link";

type NavlinkProps = {
  destination: string;
  text: string;
};

const Navlink = (props: NavlinkProps) => {
  return (
    <div className="flex-wrap mr-8 font-semibold mb-2 text-sky-50 text-lg hover:text-slate-200 transition-colors duration-150 md:mb-[0px]">
      <Link href={props.destination}>
        <a>{props.text}</a>
      </Link>
    </div>
  );
};

export default Navlink;
