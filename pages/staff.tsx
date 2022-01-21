import { NextPage } from "next";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import StaffDisplay from "../components/StaffDisplay/StaffDisplay";
import Head from "next/head";

const Staff: NextPage = () => {
  return (
    <>
      <Head>
        <title>Staff - LATAM Argentina Virtual</title>
        <meta
          name="description"
          content="LATAM Argentina Virtual es una aerolinea virtual registrada en IVAO la cual simula las operaciones de LATAM Argentina."
        />
        <link rel="canonical" href="https://latamva.com.ar/en-UK" />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Staff - LATAM Argentina Virtual" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://latamva.com.ar" />
        <meta property="og:title" content="LATAM Argentina Virtual" />
        <meta
          property="og:image"
          content="https://www.latamva.com.ar/images/noIsoLogo.jpg"
        />
        <meta property="og:description" content="Nuestro staff" />
        <meta name="twitter:title" content="LATAM Argentina Virtual" />
        <meta
          name="twitter:description"
          content="LATAM Argentina Virtual es una aerolinea virtual registrada en IVAO la cual simula las operaciones de LATAM Argentina."
        />
        <meta
          name="twitter:image"
          content="https://www.latamva.com.ar/images/noIsoLogo.jpg"
        />
        <meta name="twitter:site" content="@LatamArgVirtual" />
        <meta name="twitter:creator" content="@LatamArgVirtual" />
        <meta property="theme-color" content="#5899EE" />
      </Head>
      <Navbar />
      <StaffDisplay />
    </>
  );
};

export default Staff;
