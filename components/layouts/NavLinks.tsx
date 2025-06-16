import Link from 'next/link';

type PropsNavLinks = {
  scrolled: boolean;
  onClick?: () => void;
  textColor: string;
};

export default function NavLinks({ scrolled, onClick, textColor }: PropsNavLinks) {
  const links = [
    { href: '/about', label: 'Nosotros' },
    { href: '/services', label: 'Servicios' },
    { href: '/galery', label: 'Galería' },
    { href: '/faq', label: 'Faq' },
  ];

  const linkClass = `transition-all duration-300  ${
    scrolled ? 'text-verdeOscuro hover:text-orange hover:underline' : `text-${textColor} hover:text-orange`
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
