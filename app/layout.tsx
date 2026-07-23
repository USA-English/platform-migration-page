import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hub Speaking Rooms | Novo endereço",
  description:
    "Acesse a nova plataforma do Hub Speaking Rooms.",
  icons: {
    icon: "/images/typ-favicon.webp"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
