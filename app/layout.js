import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata = {
  title: "Elegant Events Uttarakhand - Destination Weddings & Corporate Events",
  description:
    "Premium event management services in Uttarakhand. Specializing in destination weddings, corporate events, and farm tourism experiences.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-inter: ${inter.variable};
  --font-playfair: ${playfair.variable};
}
        `}</style>
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
