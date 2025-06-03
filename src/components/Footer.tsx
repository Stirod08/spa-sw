import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Marca */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-wide text-Verde_herbal">Serena Wellness</h2>
          <p className="text-sm mt-2 text-gray-400">Tu refugio de bienestar en Medellín.</p>
        </div>

        {/* Enlaces a redes */}
        <div className="flex flex-col md:flex-row gap-6 text-gray-300 text-sm text-center md:text-left">
          
          <Link href="#" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="hover:text-Dorado_elegante flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3.2" />
                <path d="M17.5 6.5h.01" />
              </svg>
              @serenawellness
            </a>
          </Link>

          <Link href="#" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="hover:text-Dorado_elegante flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
              Serena Spa Medellín
            </a>
          </Link>

          <Link href="#" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="hover:text-Dorado_elegante flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21 12a9 9 0 10-16.5 5.6L4 21l3.6-0.5A9 9 0 0021 12z" />
                <path d="M8 9c.2 2 2.3 4.3 4.5 5 .7.3 1.3-.2 1.7-.7l.5-.6c.4-.5.5-.7.2-1.2-.2-.4-.5-.7-.9-.9-.4-.2-.5-.3-.7 0l-.7.9a.3.3 0 01-.3.1 5.2 5.2 0 01-1.8-1.2 5.2 5.2 0 01-1.2-1.8.3.3 0 01.1-.3l.9-.7c.3-.2.3-.3 0-.7a2.3 2.3 0 00-.9-.9c-.5-.3-.7-.2-1.2.2l-.6.5c-.5.4-1 1-.7 1.7z" />
              </svg>
              +57 312 345 6789
            </a>
          </Link>

        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Serena Wellness. Todos los derechos reservados.
      </div>
    </footer>
  );
}
