import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ditt Selskap | Din lokale rærlegger",
  description:
    "Profesjonell rorleggerservice i ditt naerområde. Lekkasjer, bad og kjokken, varmtvannsbereder og mer. Kontakt oss for uforpliktende tilbud.",
};

export const viewport: Viewport = {
  themeColor: "#1a6db5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
