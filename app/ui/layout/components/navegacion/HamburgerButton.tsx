import { Menu, X } from 'lucide-react';

interface Props {
  menuOpen: boolean;
  scrolled: boolean;
  onToggle: () => void;
}

export default function HamburgerButton({ menuOpen, scrolled, onToggle }: Props) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        aria-label="Abrir menú"
        className={`${scrolled ? 'text-verdeOscuro' : 'text-orange'}`}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  );
}
