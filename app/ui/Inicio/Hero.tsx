import Boton from '../components/Boton';

export default function Hero() {
  return (
    <>
      <section className="hero h-dvh md:h-[450px] bg-no-repeat bg-center bg-cover">
        <section className="w-full h-full bg-black/80 flex flex-col justify-evenly items-center">
          <div className="text-blanco text-center">
            <h1 className="text-6xl uppercase font-black mb-4">Spaira</h1>
            <p className="text-3xl md:text-5xl text-orange font-bold">Respira - Renueva - Fluye</p>
          </div>
          <p className="text-blanco text-center px-4 text-xl md:max-w-3xl py-8">
            <strong>
              Bienvenid@s a <span className="uppercase">Spaira</span>,
            </strong>{' '}
            un espacio dedicado a reencontrar tu <strong>equilibrio interior,</strong> donde cada
            detalle te invita a <strong>la calma, la belleza y el bienestar integral.</strong>
          </p>

          <Boton hover="verdeOscuro" color="verdeClaro" text="Conoce nuestros servicios" link="#" />
        </section>
      </section>
    </>
  );
}
