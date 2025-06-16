import Separador from '../ui/Separador';

export default function Hero() {
  return (
    <>
      <div className="h-[500px]  mask-b-from-50% mask-b-to-90% bg-[url('/about.jpg')] bg-no-repeat bg-cover "></div>
      <section className="-mt-40 w-[90%] lg:w-[70%] mx-auto p-4 bg-blanco relative z-10 rounded-md  hyphens-auto text-justify">
        <h1 className="text-6xl font-extrabold mb-4 text-center uppercase text-verdeOscuro"> spaira</h1>
        <p className="text-center font-medium text-verdeOscuro italic">
          Más que un spa, somos un refugio de bienestar consciente.
        </p>
        <Separador />
      </section>
    </>
  );
}
