

export default function Collage() {

  return (
    <section className="contenedor py-10">
      <h2 className="titulo">Galeria</h2>
      
      <section className="flex flex-wrap px-1">
        <section className="w-full sm:w-1/2 md:w-1/4 px-1">
          <figure className="w-full object-cover mt-2 align-middle"><img className="w-full" src="image/m0.jpg" alt="imagen" /></figure>
          <figure className="w-full object-cover mt-2 align-middle"><img className="w-full" src="image/m8.jpg" alt="imagen" /></figure>
        </section>
        <section className="w-full sm:w-1/2 md:w-1/4 px-1">
          <figure className="mt-2 w-full align-middle"><img src="image/m3.jpg" alt="imagen" /></figure>
          <figure className="mt-2 w-full align-middle"><img src="image/m2.jpg" alt="imagen" /></figure>
          <figure className="mt-2 w-full align-middle"><img src="image/m5.jpg" alt="imagen" /></figure>
        </section>
        <section className="w-full sm:w-1/2 md:w-1/4 px-1">
          <figure className="mt-2 w-full align-middle"><img src="image/m1.jpg" alt="imagen" /></figure>
          <figure className="mt-2 w-full align-middle"><img src="image/m4.jpg" alt="imagen" /></figure>
          <figure className="mt-2 w-full align-middle"><img src="image/m9.jpg" alt="imagen" /></figure>
        </section>
        <section className="w-full sm:w-1/2 md:w-1/4 px-1">
          <figure className="mt-2 w-full align-middle"><img src="image/m6.jpg" alt="imagen" /></figure>
          <figure className="mt-2 w-full align-middle"><img src="image/m7.jpg" alt="imagen" /></figure>
          <figure className="mt-2 w-full align-middle"><img src="image/m10.png" alt="imagen" /></figure>
        </section>

      </section>

    </section>
  );
}
