import type { Metadata } from "next";
import "./globals.scss";
import '@fortawesome/fontawesome-svg-core/styles.css';

export const metadata: Metadata = {
  title: "Componentes reutilizables",
  description: "Generados por mi, pepe becerra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
