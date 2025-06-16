import { HandHeart, UserCheck, BadgeCheck, Leaf } from 'lucide-react';

export default function Valores() {
  return (
    <>
      <div className="bg-verdeOscuro py-8">
        <section className="container mx-auto px-8 my-8 text-blanco">
          <h2 className="text-3xl font-extrabold mb-6 text-center uppercase text-orange">Valores que nos guían</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-8">
            <article className="flex flex-col justify-center items-center">
              <HandHeart size={80} className="text-blanco bg-orange p-2 stroke-1 rounded-full" />
              <h3 className="text-center">Respeto</h3>
              <p>Honramos el cuerpo y el alma de cada persona.</p>
            </article>

            <article className="flex flex-col justify-center items-center">
              <UserCheck size={50} />
              <h3 className="text-center">Autenticidad</h3>
              <p>Nos mostramos reales, transparentes, con calidez.</p>
            </article>

            <article className="flex flex-col justify-center items-center">
              <BadgeCheck size={50} />
              <h3 className="text-center">Excelencia</h3>
              <p>Buscamos resultados efectivos con cuidado y cariño.</p>
            </article>

            <article className="flex flex-col justify-center items-center">
              <Leaf size={50} />
              <h3 className="text-center">Sostenibilidad</h3>
              <p>Seleccionamos productos y prácticas que respetan el entorno.</p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
