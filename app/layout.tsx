import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/src/theme/ThemeProvider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bérenger | Portfolio",
  description:
    "Développeur web fullstack, je suis spécialisé dans le développement d'applications web et mobiles.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr' className='!scroll-smooth'>
      <body
        className={`${inter.className}
       dark:bg-accent dark:text-primary bg-lightAccent text-lightPrimary h-auto`}
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
