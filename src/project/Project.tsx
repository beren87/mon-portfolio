"use client"
import React from "react"
import { AccordionTheme } from "@/components/accordion/AccordionTheme"

function Project() {
  return (
    <section id='projets' className='scroll-m-1 sm:scroll-m-24 md:scroll-m-1'>
      <div className='flex flex-row container gap-16 pt-24 sm:pt-10 md:pt-24'>
        <div>
          <h1 className='font-bold text-lg sm:text-3xl text-center'>
            Mes projets
          </h1>
        </div>
      </div>
      <AccordionTheme />
    </section>
  )
}

export default Project
