import "../styles/globals.css";

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
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

