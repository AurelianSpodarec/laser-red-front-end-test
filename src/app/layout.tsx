import type { Metadata } from "next";

import "@/styles/styles.css";
import { dmSans, onset } from "@/styles/1-tokens/fonts";

import WebHeader from "./(pages)/_components/Header";
import WebFooter from "./(pages)/_components/Footer";

export const metadata: Metadata = {
  title: "Vega Front-end Test – For Laser Red",
  description: "A modular, scalable Next.js front-end project developed as a technical test for Laser Red, designed for seamless integration into Gutenberg WordPress blocks.",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${onset.variable}`}>
        <WebHeader />
        <main>
          {children}
        </main>
        <WebFooter />
      </body>
    </html>
  );
}

export default RootLayout
