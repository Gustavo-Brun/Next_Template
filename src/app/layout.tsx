import React from "react";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Starter Next Template by Gustavo Brun"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
