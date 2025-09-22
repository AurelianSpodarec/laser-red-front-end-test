import type { Metadata } from "next";

import "./../styles/globals.css";

import WebHeader from "./(pages)/_components/Header";
import WebFooter from "./(pages)/_components/Footer";

import { DM_Sans, Onest } from "next/font/google";

export const metadata: Metadata = {
  title: "Next.js Dashboard with TailwindCSS",
  description: "Created with best practices in mind",
};

export const dmSans = DM_Sans({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans'
})

export const onset = Onest({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-onset'
})

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased font-dm-sans text-white ${dmSans.variable} ${onset.variable}`}>
        <WebHeader />
        <main>
          {children}
        </main>
        {/* <WebFooter /> */}
      </body>
    </html>
  );
}

export default RootLayout
