// 'use client';

// import { useState, useEffect } from 'react';

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   return (
//     <>
//       <header
//         className={`
//           fixed top-0 left-0 w-full z-50 transition-colors duration-500
//           ${scrolled
//             ? 'bg-white/30 backdrop-blur-md shadow-md'
//             : 'bg-white'}
//         `}
//         style={{ height: '64px' }}
//       >
//         <nav className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
//           <div className="text-2xl font-extrabold text-gray-900">MiLogo</div>
//           <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
//             <li><a href="#inicio" className="hover:text-gray-900 transition">Inicio</a></li>
//             <li><a href="#servicios" className="hover:text-gray-900 transition">Servicios</a></li>
//             <li><a href="#portafolio" className="hover:text-gray-900 transition">Portafolio</a></li>
//             <li><a href="#contacto" className="hover:text-gray-900 transition">Contacto</a></li>
//           </ul>
//         </nav>
//       </header>

//       {/* Aquí el relleno para que el contenido no quede debajo del header */}
//       <div style={{ height: '64px' }} />
//     </>
//   );
// }

