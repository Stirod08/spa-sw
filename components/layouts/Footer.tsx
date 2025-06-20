import Link from 'next/link';
// import Redes from "../Inicio/Redes";

export default function Footer() {
  return (
    <footer className="bg-verdeClaro text-blanco py-12 px-6">
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Marca y descripción */}
        <section aria-labelledby="footer-brand">
          <h2 id="footer-brand" className="marca text-2xl mb-2">
            Spaira
          </h2>
          <p className="text-sm">Un espacio creado para sanar, renovarte y reconectar con tu esencia.</p>
        </section>

        {/* Servicios principales */}
        <nav aria-labelledby="footer-services">
          <h3 id="footer-services" className="text-lg font-semibold mb-3">
            Servicios
          </h3>
          <ul className="flex flex-col space-y-1 text-sm">
            {[
              { href: '#1', label: 'Masajes terapéuticos' },
              { href: '#2', label: 'Limpiezas faciales profundas' },
              { href: '#3', label: 'Spa de manos y pies' },
              { href: '#4', label: 'Rituales corporales detox' },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-verdeOscuro hover:bg-white rounded-md px-2 py-1 transition-colors duration-150 block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacto */}
        <address className="not-italic text-sm space-y-1" aria-labelledby="footer-contact">
          <h3 id="footer-contact" className="text-lg font-semibold mb-3">
            Contáctanos
          </h3>
          <p>📍 Cra. 45 #50-25, Medellín, Colombia</p>
          <p>📞 +57 310 456 7890</p>
          <p>
            ✉️{' '}
            <a
              href="mailto:contacto@spaira.co"
              className="underline hover:text-verdeOscuro hover:bg-white px-2 py-1 rounded-sm"
            >
              contacto@spaira.co
            </a>
          </p>
        </address>
      </section>

      {/* Derechos */}
      <section className="text-center mt-10 text-xs text-blanco/80">
        © {new Date().getFullYear()} <span className="marca">Spaira</span>. Todos los derechos reservados.
      </section>
    </footer>
  );
}
