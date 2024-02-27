"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { links } from "@/lib/data"
import Link from "next/link"
import clsx from "clsx"

export const Header = () => {
  const [activeSection, setActiveSection] = useState("Accueil")
  return (
    <header className='z-[999] relative'>
      <div className='fixed top-0 left-1/2 -translate-x-1/2 h-[3.25rem] w-full sm:w-[48rem] backdrop-blur-[0.6rem] border-b-[0.05rem] border-secondary-foreground'></div>
      <nav className='fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[0.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[28rem] flex-wrap md:flex-nowrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-primary sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map(link => (
            <motion.li
              className='flex items-center justify-center relative'
              key={link.hash}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-2 sm:px-4  py-2 hover:text-secondary transition",
                  {
                    "text-secondary": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
