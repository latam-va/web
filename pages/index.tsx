import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About/About'
import Inscripcion from '../components/About/Inscripcion'
import Herocomponent from '../components/Hero/Herocomponent'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Navbar />
    <Herocomponent />
    <About />
    <Inscripcion />
    </>
  )
}

export default Home
