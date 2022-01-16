import React from "react";
import Image from "next/image";
import test from "../../public/images/test.jpg";
import StaffCard from "../../lib/StaffCard";
import ceo from "../../public/images/staff/ceo.jpg";
import web from "../../public/images/staff/web.jpg";
import { useRouter } from "next/router";

const StaffDisplay = () => {
  const { locale } = useRouter();
  return (
    <div className="bg-zinc-100 w-full h-full flex flex-col justify-center items-center overflow-hidden sm:flex-row sm:h-screen sm:items-start">
      {locale === "es-AR" && (
        <>
          <StaffCard
            name="Sebastian"
            job="CEO"
            image={ceo}
            mail="ceo@latamva.com.ar"
          />
          <StaffCard
            name="Francisco"
            job="WEB, RRPP"
            image={web}
            mail="web@latamva.com.ar"
          />
          <StaffCard
            name="Francisco"
            job="Tours y Eventos"
            image={test}
            mail="rrpp@latamva.com.ar"
          />
        </>
      )}
      {locale === "en-UK" && (
        <>
          <StaffCard
            name="Sebastian"
            job="CEO"
            image={ceo}
            mail="ceo@latamva.com.ar"
          />
          <StaffCard
            name="Francisco"
            job="WEB, RRPP"
            image={web}
            mail="web@latamva.com.ar"
          />
          <StaffCard
            name="Francisco"
            job="Tours and Events"
            image={test}
            mail="rrpp@latamva.com.ar"
          />
        </>
      )}
    </div>
  );
};

export default StaffDisplay;
