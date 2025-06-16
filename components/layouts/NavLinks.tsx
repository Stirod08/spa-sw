import Link from 'next/link';

type PropsNavLinks = {
  scrolled: boolean;
  onClick?: () => void;
  textColor: string;
};

export default function NavLinks({ scrolled, onClick, textColor }: PropsNavLinks) {
  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Nosotros' },
    { href: '/services', label: 'Servicios' },
    { href: '/galery', label: 'Galería' },
    { href: '/faq', label: 'Faq' },
  ];

  const linkClass = `transition-colors duration-300  ${
    scrolled ? 'text-verdeOscuro hover:text-orange' : `text-${textColor} hover:text-orange`
  }`;

  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className={linkClass} onClick={onClick}>
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
