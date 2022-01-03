import React from "react";
import Card from "../../lib/Card";
import test from "../../public/images/test.jpg";
import Image from "next/image";

const Herocomponent = () => {
  return (
    <div className="flex flex-row overflow-hidden h-screen max-h-[700px] min-h-[640px] w-full bg-zinc-100 justify-center">
      <div className="flex relative">
        <Image className="z-10" src={test} alt={"test image"} />
      </div>
      <div className="absolute flex justify-center items-center mt-5 z-10">
        <h1 className="font-sans p-3 text-slate-100 tracking-wider font-semibold text-6xl">
          LATAM
        </h1>
        <h1 className="font-sans p-3 text-slate-100 tracking-wider font-semibold text-6xl">
          Argentina
        </h1>
        <h1 className="font-sans p-3 text-slate-100 tracking-wider font-semibold text-6xl">
          Virtual
        </h1>
      </div>
    </div>
  );
};

export default Herocomponent;
