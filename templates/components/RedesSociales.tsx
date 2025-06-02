// import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

// export default function Redes() {
//   const redes = [
//     {
//       nombre: "Facebook",
//       icono: <FaFacebookF className="text-2xl" />,
//       url: "https://www.facebook.com/",
//       color: "bg-[#3b5998]",
//     },
//     {
//       nombre: "Instagram",
//       icono: <FaInstagram className="text-2xl" />,
//       url: "https://www.instagram.com/",
//       color: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500",
//     },
//     {
//       nombre: "TikTok",
//       icono: <FaTiktok className="text-2xl" />,
//       url: "https://www.tiktok.com/",
//       color: "bg-[#000000]",
//     },
//     {
//       nombre: "YouTube",
//       icono: <FaYoutube className="text-2xl" />,
//       url: "https://www.youtube.com/",
//       color: "bg-[#FF0000]",
//     },
//   ];

//   return (
//     <section className="contenedor py-10 bg-light text-dark">
//       <h2 className="titulo text-center mb-8">Síguenos en redes</h2>
//       <div className="flex justify-center flex-wrap gap-6">
//         {redes.map((red, index) => (
//           <a
//             key={index}
//             href={red.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`flex items-center gap-3 px-6 py-3 rounded-full text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg ${red.color}`}
//           >
//             {red.icono}
//             <span className="font-medium">{red.nombre}</span>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }
