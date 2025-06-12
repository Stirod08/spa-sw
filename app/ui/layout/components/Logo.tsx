import Link from 'next/link';
import { Shell } from 'lucide-react';

export default function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <section className={`text-2xl font-extrabold flex items-center transition-colors duration-300 ${scrolled ? 'text-verdeOscuro hover:text-orange' : 'text-orange hover:text-verdeOscuro'}`}>
      <Link className="flex items-center hover:scale-105 transition-transform duration-300" href="/">
        SPAIRA
        <Shell className="ml-2" />
      </Link>

    </section>
  );
}
