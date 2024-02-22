"use client"
import { ThemeToggle } from "../theme/ThemeToggle"
import Link from "next/link"
import clsx from "clsx"
import { links } from "@/lib/data"
import { useState } from "react"

export const Header = () => {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <header className='container sticky top-0 z-10 w-full'>
      <div className=' flex justify-center items-center'>
        <nav className='rounded-full  backdrop-blur-[0.8rem]'>
          <ul className='flex gap-6 border-2 rounded-full px-1 py-1'>
            {links.map((link, index) => (
              <li className='flex items-center justify-center' key={link.hash}>
                <Link
                  className={clsx("", {
                    "bg-secondary rounded-full text-accent p-1":
                      activeSection === index,
                  })}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(index)
                  }}
                >
                  {link.icon}

                  {index === activeSection && (
                    <span className='rounded-full w-12 h-auto flex items-center justify-center bg-secondary'></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
