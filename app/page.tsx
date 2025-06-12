import Image from "next/image";
import Header from "./ui/layout/Header";
import Hero from "./ui/Inicio/Hero";
import SobreSpaira from "./ui/Inicio/SobreSpaira";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      

      <main className="mx-4">
        <SobreSpaira />
        

      <section>
        <h2>Servicios</h2>
        <p>Explora los rituales diseñados para renovar tu cuerpo y reconectar con tu energía. Cada servicio ha sido pensado para darte una experiencia transformadora y profundamente relajante.</p>

        <section>
          <article>
            <h3>Masajes terapéuticos</h3>
            <p>Relaja músculos, alivia tensiones y reconecta con tu centro.</p>
          </article>

          <article>
            <h3>Limpiezas faciales profundas</h3>
            <p>Renueva tu piel desde adentro con protocolos personalizados.</p>
          </article>

          <article>
            <h3>Terapias antiestrés</h3>
            <p>Un mix de aromas, técnicas manuales y calor para soltar lo que ya no necesitas.</p>
          </article>

          <article>
            <h3>Rituales corporales detox</h3>
            <p>Desintoxica, drena y devuelve a tu cuerpo su equilibrio natural.</p>
          </article>

          <article>
            <h3>Tratamientos con aparatología no invasiva</h3>
            <p>Tecnología al servicio de tu belleza, sin agresiones.</p>
          </article>

          <article>
            <h3>Spa de manos y pies</h3>
            <p>Cuidado consciente con resultados visibles y duraderos.</p>
          </article>
        </section>
      </section>

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
