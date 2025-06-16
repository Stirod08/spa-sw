import Link from 'next/link';
// import Redes from "../Inicio/Redes";
// import NavLinks from "./components/navegacion/NavLinks";

export default function Footer() {
  return (
    <footer className="bg-verdeClaro text-blanco py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div>
          <h2 className="marca text-2xl">Spaira</h2>
          <p className="mt-4 text-sm text-[#E6E6E6]">
            Un espacio creado para sanar, renovarte y reconectar con tu esencia.
          </p>
        </div>

        {/* Menú del sitio */}
        {/* <nav>
          <h3 className="text-lg font-semibold mb-2">Navegación</h3>
          <ul className="space-y-1 text-sm">
            <NavLinks textColor="blanco" scrolled={false} />
          </ul>
        </nav> */}

        {/* Servicios principales */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Servicios</h3>
          <nav className="flex flex-col space-y-1">
            <Link href={'#1'} className="p-1 text-sm hover:text-orange hover:bg-blanco/80 hover:rounded-md">
              Masajes terapéuticos
            </Link>
            <Link href={'#2'} className="p-1 text-sm hover:text-orange hover:bg-blanco/80 hover:rounded-md">
              Limpiezas faciales profundas
            </Link>
            <Link href={'#3'} className="p-1 text-sm hover:text-orange hover:bg-blanco/80 hover:rounded-md">
              Spa de manos y pies
            </Link>
            <Link href={'#4'} className="p-1 text-sm hover:text-orange hover:bg-blanco/80 hover:rounded-md">
              Rituales corporales detox
            </Link>
          </nav>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
          <p className="text-sm">📍 Cra. 45 #50-25, Medellín, Colombia</p>
          <p className="text-sm mt-1">📞 +57 310 456 7890</p>
          <p className="text-sm mt-1">✉️ contacto@spaira.co</p>
        </div>
      </div>

      {/* Derechos */}
      <div className="text-center mt-10 text-xs text-blanco">
        © {new Date().getFullYear()} <span className="marca">Spaira</span>. Todos los derechos reservados.
      </div>
    </footer>
  );
}
