import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/src/theme/ThemeProvider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-notosans",
})

export const metadata: Metadata = {
  title: "Bérenger - Développeur Web Junior | Portfolio",
  description:
    "Portfolio de Bérenger FERGUENIS. Développeur Web Junior passionné, créatif, constamment avide de nouvelles compétences et de découvertes technologiques.",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr' className='!scroll-smooth'>
      <body
        className={`${noto_sans.className}
       bg-accent text-primary h-auto`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-col h-full sm:mt-2 mt-2 mx-4 sm:m-auto'>
            <Header />
            <div className='pt-12 pb-2 w-full'>
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
