import React, { Suspense } from "react";

import type { Metadata } from "next";

import { ThemeProvider } from "@/providers/theme-provider";

import { Credits } from "@/components/Example";
import { CreditsFallbackComponent } from "@/components/_FIleConventions/Loading";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Starter Next Template by Gustavo Brun"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Suspense fallback={<CreditsFallbackComponent />}>
            <Credits />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
