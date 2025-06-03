import { Lato } from 'next/font/google'
const lato = Lato({subsets: ['latin'], weight:["700", "400"]})
import "@/styles/globals.css";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Mi plantilla profesional con Next.js',
  description: 'Un template base optimizado con TypeScript y Tailwind CSS',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${lato.className} bg-Fondo_principal`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

