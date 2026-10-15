import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevSecOps Portfolio - Narjess Dabbech",
  description: "Portfolio DevSecOps - Narjess Dabbech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
