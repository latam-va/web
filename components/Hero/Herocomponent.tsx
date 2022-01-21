import React from "react";
import Card from "../../lib/Card";
import test from "../../public/images/test.jpg";
import Image from "next/image";

const Herocomponent = () => {
  return (
    <div className="flex flex-row overflow-hidden h-full w-screen bg-zinc-100 justify-center">
      <div className="flex">
        <Image className="z-10" src={test} alt={"LATAM A320"} />
      </div>
      <div className="absolute flex justify-center items-center mt-5 z-10">
        <h1 className="font-sans p-3 text-slate-100 tracking-wider font-semibold text-2xl sm:text-6xl text-center">
          LATAM Argentina Virtual
        </h1>
      </div>
    </div>
  );
};

export default Herocomponent;
