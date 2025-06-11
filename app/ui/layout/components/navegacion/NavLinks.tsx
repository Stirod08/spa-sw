import Link from 'next/link';

type PropsNavLinks = {
    scrolled: boolean;
    onClick?: () => void;
    textColor: string
};

export default function NavLinks({ scrolled, onClick, textColor }: PropsNavLinks) {
  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#portafolio', label: 'Galería' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const linkClass = `transition-colors duration-300  ${
    scrolled ? 'text-verdeOscuro hover:text-orange' : `text-${textColor} hover:text-orange`
  }`;

  return (
    <>
      {links.map(link => (
        <li key={link.href}>
          <Link href={link.href} className={linkClass} onClick={onClick}>
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
