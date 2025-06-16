import Hero from '@/components/home/Hero';
import SobreSpaira from '@/components/home/SobreSpaira';
import ServiciosDestacados from '@/components/home/ServiciosDestacados';
import Separador from '@/components/ui/Separador';
import Tecnologias from '@/components/home/Tecnologias';
import Redes from '@/components/home/Redes';
// import Footer from "./ui/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="container mx-auto px-6">
        <SobreSpaira />
        <Separador />
        <ServiciosDestacados />
      </main>
      <div className="bg-[url('/parallax.webp')] bg-fixed bg-cover bg-center h-[400px]"></div>
      <Tecnologias />
      <Redes />
    </>
  );
}
