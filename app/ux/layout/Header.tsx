'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shell } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 
        ${scrolled ? 'bg-blanco/30 backdrop-blur-md shadow-md' : 'bg-verdeClaro'}`}
        style={{ height: '64px' }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          
          {/* Logo */}
          <div className={`text-2xl font-extrabold flex items-center transition-colors duration-300 ${scrolled ? 'text-verdeOscuro' : 'text-blanco'}`}>
            <Link href="/">SPAIRA</Link>
            <Shell className="ml-2" />
          </div>

          {/* Navegación desktop */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <NavLinks scrolled={scrolled} />
          </ul>

          {/* Botón hamburguesa */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
              className={`${scrolled ? 'text-verdeOscuro' : 'text-blanco'}`}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="md:hidden bg-verdeClaro border-t border-verdeOscuro shadow-sm">
            <ul className="flex flex-col space-y-4 p-6 font-medium">
              <NavLinks scrolled={false} onClick={() => setMenuOpen(false)} />
            </ul>
          </div>
        )}
      </header>

      <div style={{ height: '64px' }} />
    </>
  );
}

// Componente para los enlaces
function NavLinks({ scrolled, onClick }: { scrolled: boolean; onClick?: () => void }) {
  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#portafolio', label: 'Galería' },
    { href: '#contacto', label: 'Contacto' },
  ];
  
  const linkClass = `transition-colors duration-300 ${
    scrolled ? 'text-verdeOscuro hover:text-verdeClaro' : 'text-blanco hover:text-gray-200'
  }`;

  return (
    <>
      {links.map(link => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={linkClass}
            onClick={onClick}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}

