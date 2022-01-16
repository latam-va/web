import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Inscripcion from "../components/About/Inscripcion";
import Footer from "../components/Footer/Footer";
import Herocomponent from "../components/Hero/Herocomponent";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="LATAM Argentina Virtual" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://latamva.com.ar" />
        <meta property="og:title" content="LATAM Argentina Virtual" />
        <meta property="og:image" content="https://latamva.com.ar/images/noIsoLogo.jpg" />
        <meta property="og:description" content="LATAM Argentina Virtual es una aerolinea virtual registrada en IVAO la cual simula las operaciones de LATAM Argentina." />
        <meta property="theme-color" content="#5899EE" />
      </Head>
      <div className="overflow-hidden">
        <Navbar />
        <Herocomponent />
        <About />
        <Inscripcion />
        <Footer />
      </div>
    </>
  );
};

export default Home;
