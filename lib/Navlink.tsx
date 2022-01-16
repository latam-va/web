import React, { MouseEventHandler } from "react";
import Link from "next/link";

type NavlinkProps = {
  destination: string;
  text: string;
  click?: MouseEventHandler<HTMLAnchorElement>
};

const Navlink = (props: NavlinkProps) => {
  return (
    <div className="flex mr-8 font-semibold mb-2 text-sky-50 text-lg hover:text-slate-200 transition-colors duration-150">
      <Link href={props.destination}>
        <a onClick={props.click}>{props.text}</a>
      </Link>
    </div>
  );
};

export default Navlink;
