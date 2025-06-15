// import Image from "next/image";
import Header from './ui/layout/Header';
import Hero from './ui/Inicio/Hero';
import SobreSpaira from './ui/Inicio/SobreSpaira';
import ServiciosDestacados from './ui/Inicio/ServiciosDestacados';
import Seprador from './ui/layout/components/Seprador';
import Tecnologias from './ui/Inicio/Tecnologias';
import Redes from './ui/Inicio/Redes';
// import Footer from "./ui/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="container mx-auto px-6">
        <SobreSpaira />
        <Seprador />
        <ServiciosDestacados />
      </main>
      <div className="bg-[url('/parallax.jpg')] bg-fixed bg-cover bg-center h-[400px]"></div>
      <Tecnologias />
      <Redes />
    </>
  );
}
