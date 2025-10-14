import type { Metadata } from "next";

import "./../styles/globals.css";
import { dmSans, onset } from "@/styles/1-variables/fonts";

import WebHeader from "./(pages)/_components/Header";
import WebFooter from "./(pages)/_components/Footer";

export const metadata: Metadata = {
  title: "Vega",
  description: "",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased font-dm-sans text-white ${dmSans.variable} ${onset.variable}`}>
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
