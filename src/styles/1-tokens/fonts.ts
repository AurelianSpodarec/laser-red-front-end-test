import { DM_Sans, Onest } from "next/font/google";

export const dmSans = DM_Sans({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary'
})

export const onset = Onest({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary'
})
