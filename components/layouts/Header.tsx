// components/Header.tsx
'use client';

import useHeaderLogic from '@/hooks/useHeaderLogic';
import Logo from '../ui/Logo';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import HamburgerButton from './HamburgerButton';

export default function Header() {
  const { scrolled, menuOpen, toggleMenu, closeMenu } = useHeaderLogic();

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 
        ${scrolled ? 'bg-blanco/80 backdrop-blur-md shadow-md' : 'bg-blanco'}`}
        style={{ height: '64px' }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <Logo scrolled={scrolled} />
          <ul className="hidden md:flex space-x-8 font-medium">
            <NavLinks scrolled={scrolled} textColor="verdeOscuro" />
          </ul>
          <HamburgerButton menuOpen={menuOpen} scrolled={scrolled} onToggle={toggleMenu} />
        </nav>

        <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
      </header>

      <div style={{ height: '64px', backgroundColor: 'skyblue' }} />
    </>
  );
}
