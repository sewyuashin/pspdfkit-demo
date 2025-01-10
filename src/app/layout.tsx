import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PSPDFKit Demo",
  description: "A demo of PSPDFKit with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
