import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Nunito } from "next/font/google";
import { PT_Sans } from "next/font/google";
import type { ReactNode } from 'react';

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${ptSans.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <div className="texture" />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
