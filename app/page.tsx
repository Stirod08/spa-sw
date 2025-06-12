import Image from "next/image";
import Header from "./ui/layout/Header";
import Hero from "./ui/Inicio/Hero";
import SobreSpaira from "./ui/Inicio/SobreSpaira";
import ServiciosDestacados from "./ui/Inicio/ServiciosDestacados";
import Seprador from "./ui/layout/components/Seprador";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />


      <main className="container mx-auto">
        <SobreSpaira />
        <Seprador />
        <ServiciosDestacados />
        

        <section>
          <h2>Tecnología con propósito</h2>
          <p>En Spaira, creemos que el bienestar se potencia con innovación. Por eso usamos equipos de última generación que complementan nuestras terapias con resultados visibles y respetuosos.</p>
          <section>
            <article>
              <h3>Radiofrecuencia facial y corporal</h3>
              <p>Estimula colágeno, mejora la elasticidad y redefine contornos.</p>
            </article>

            <article>
              <h3>Presoterapia digital</h3>
              <p>Ideal para drenaje linfático, aliviar piernas cansadas y mejorar circulación.</p>
            </article>

            <article>
              <h3>Ultracavitación</h3>
              <p>Reduce grasa localizada con sesiones suaves y sin dolor</p>
            </article>

            <article>
              <h3>Puntas de diamante</h3>
              <p>Exfoliación profunda para una piel radiante y uniforme.</p>
            </article>
          </section>
        </section>
      </main>

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
