import { DM_Sans, Libre_Baskerville } from 'next/font/google'

export const dmSans = DM_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--anity-font",
    display: 'swap',
})
export const libreBaskerville = Libre_Baskerville({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: "--anity-font-two",
    display: 'swap',
})
