import Image from "next/image";
import Header from "./ui/layout/Header";
import Hero from "./ui/Inicio/Hero";
import SobreSpaira from "./ui/Inicio/SobreSpaira";
import ServiciosDestacados from "./ui/Inicio/ServiciosDestacados";
import Seprador from "./ui/layout/components/Seprador";
import Tecnologias from "./ui/Inicio/Tecnologias";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />


      <main className="container mx-auto px-6">
        <SobreSpaira />
        <Seprador />
        <ServiciosDestacados />
      </main>
      <div className="bg-[url('/parallax.jpg')] bg-fixed bg-cover bg-center h-[400px]"></div>
      <Tecnologias />

      <section>
        <h2>Spaira, también vive en redes</h2>
        <p>Conéctate con nuestra comunidad, descubre tips de autocuidado, momentos de inspiración y promociones exclusivas. Porque el bienestar también se comparte.</p>
        <a className="bg-verdeOscuro text-blanco px-4 py-2 rounded" href="#">Instagram</a>
        <a className="bg-verdeOscuro text-blanco px-4 py-2 rounded" href="#">Facebook</a>
        <a className="bg-verdeOscuro text-blanco px-4 py-2 rounded" href="#">Youtube</a>
        <a className="bg-verdeOscuro text-blanco px-4 py-2 rounded" href="#">X</a>
      </section>

      <footer>
        <p>2025 Spaira. Todos los derechos reservados</p>
      </footer>
    </>
  )
}
