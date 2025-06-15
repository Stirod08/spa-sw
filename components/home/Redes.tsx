import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const redes = [
  { id: 'face', Icon: Facebook, referencia: '#face' },
  { id: 'insta', Icon: Instagram, referencia: '#insta' },
  { id: 'yt', Icon: Youtube, referencia: '#yt' },
  { id: 'linkedin', Icon: Linkedin, referencia: '#linkedin' },
];

export default function Redes() {
  return (
    <section className="bg-orange p-4">
      <h2 className="text-4xl font-extrabold mb-6 mt-8 text-center uppercase text-verdeOscuro">
        <span className="text-blanco">Spaira,</span> también vive en redes
      </h2>
      <p className="md:max-w-3xl mx-auto text-center text-blanco">
        Conéctate con nuestra comunidad, descubre tips de autocuidado, momentos de inspiración y
        promociones exclusivas. Porque el bienestar también se comparte.
      </p>

      <section className="flex justify-center gap-4 my-8">
        {redes.map(({ id, Icon, referencia }) => (
          <Link
            key={id}
            href={referencia}
            className="text-white bg-verdeOscuro p-2 rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
          >
            <Icon size={25} />
          </Link>
        ))}
      </section>
    </section>
  );
}
