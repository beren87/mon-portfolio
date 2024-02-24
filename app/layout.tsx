import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/src/theme/ThemeProvider"
import { Header } from "@/components/Header"

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
      bg-background text-primary h-[5000px]`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-col h-full sm:mt-2 mt-2 mx-4 sm:m-auto'>
            <Header />
            <div className='py-12 w-full'>
              {children}
              {/* <Footer /> */}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
