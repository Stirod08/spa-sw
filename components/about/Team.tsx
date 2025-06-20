export default function Team() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-8 mb-16">
        <h2 className="text-3xl font-extrabold my-16 text-center uppercase text-verdeOscuro">Manos que inspiran</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <article className="text-center">
            <figure className="flex flex-col items-center">
              <img
                src="/valentinaArevalo.png"
                alt="Valentina Arévalo"
                className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
              />
              <figcaption>
                <h3 className="text-xl font-bold text-verdeOscuro">Valentina Arévalo</h3>
                <p className="text-sm text-gray-600">Fundadora & Terapeuta principal</p>
              </figcaption>
            </figure>
            <blockquote className="italic text-gray-700 mt-3 max-w-xs mx-auto">
              “Busco que cada tratamiento sea un abrazo para el cuerpo y el espíritu.”
            </blockquote>
          </article>

          <article className="text-center">
            <figure className="flex flex-col items-center">
              <img
                src="/camilaGomez.png"
                alt="Valentina Arévalo"
                className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
              />
              <figcaption>
                <h3 className="text-xl font-bold text-verdeOscuro">Camila Gómez</h3>
                <p className="text-sm text-gray-600">Especialista en faciales</p>
              </figcaption>
            </figure>
            <blockquote className="italic text-gray-700 mt-3 max-w-xs mx-auto">
              “Mi meta es que salgas con una piel renovada y una sonrisa relajada.”
            </blockquote>
          </article>

          <article className="text-center">
            <figure className="flex flex-col items-center">
              <img
                src="/andresTorres.png"
                alt="Valentina Arévalo"
                className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
              />
              <figcaption>
                <h3 className="text-xl font-bold text-verdeOscuro">Andrés Torres</h3>
                <p className="text-sm text-gray-600">Terapeuta corporal</p>
              </figcaption>
            </figure>
            <blockquote className="italic text-gray-700 mt-3 max-w-xs mx-auto">
              “Cada masaje que aplico busca soltar tensión y restaurar armonía.”
            </blockquote>
          </article>

          <article className="text-center">
            <figure className="flex flex-col items-center">
              <img
                src="/stibenRodriguez.png"
                alt="Valentina Arévalo"
                className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
              />
              <figcaption>
                <h3 className="text-xl font-bold text-verdeOscuro">Stiben Rodriguez</h3>
                <p className="text-sm text-gray-600">Desarrollador Web</p>
              </figcaption>
            </figure>
            <blockquote className="italic text-gray-700 mt-3 max-w-xs mx-auto">
              “Cada proyecto es una oportunidad para aprender y crecer como profesional.”
            </blockquote>
          </article>
        </div>
      </section>
    </>
  );
}
