import NavLinks from './NavLinks';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-verdeClaro border-t border-verdeOscuro shadow-sm">
      <ul className="flex flex-col space-y-4 p-6 font-medium">
        <NavLinks scrolled={false} onClick={onClose} textColor="blanco" />
      </ul>
    </div>
  );
}
