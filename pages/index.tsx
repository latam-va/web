import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Inscripcion from "../components/About/Inscripcion";
import Footer from "../components/Footer/Footer";
import Herocomponent from "../components/Hero/Herocomponent";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import CookieConesnt from "react-cookie-consent";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>LATAM Argentina Virtual</title>
        <meta
          name="description"
          content="LATAM Argentina Virtual es una aerolinea virtual registrada en IVAO la cual simula las operaciones de LATAM Argentina."
        />
        <link rel="canonical" href="https://latamva.com.ar/en-UK" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="LATAM Argentina Virtual" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://latamva.com.ar" />
        <meta property="og:title" content="LATAM Argentina Virtual" />
        <meta
          property="og:image"
          content="https://www.latamva.com.ar/images/noIsoLogo.jpg"
        />
        <meta
          property="og:description"
          content="LATAM Argentina Virtual es una aerolinea virtual registrada en IVAO la cual simula las operaciones de LATAM Argentina."
        />

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
      <div className="overflow-hidden">
        <Navbar />
        <Herocomponent />
        <About />
        <Inscripcion />
        {locale === "es-AR" && (
          <CookieConesnt
          location="bottom"
          buttonText='Aceptar'
          expires={150}
          style={{ background: "#5899EE"}}
          buttonStyle={{ color: "#7267CB"}}
          >Este sitio web usa cookies para mejorar la experiencia del usuario.</CookieConesnt>
        )}
        {locale === "en-UK" && (
          <CookieConesnt
          location="bottom"
          buttonText='Accept'
          expires={150}
          style={{ background: "#5899EE"}}
          buttonStyle={{ color: "#7267CB"}}
          >This website uses cookies to enhance user experience.</CookieConesnt>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Home;
