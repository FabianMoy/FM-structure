import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import type { ReactNode } from "react";
export { metadata } from "@/lib/metadata";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}