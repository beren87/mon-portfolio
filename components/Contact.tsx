"use client"
import React from "react"
import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"

export const Contact = () => {
  return (
    <section
      id='contact'
      className='container scroll-m-1 sm:scroll-m-24 md:scroll-m-1 pt-32 pb-72 sm:pb-20'
    >
      <div className=' pt-2 sm:pt-10 md:pt-24'>
        <div>
          <h1 className='font-bold text-lg sm:text-3xl'>Me contacter</h1>
        </div>
        <div className=' pt-8 sm:pt-4 pb-4 text-sm sm:text-lg'>
          <p className='text-center sm:text-center pb-3'>
            N'hésitez pas à me contacter directement par e-mail à{" "}
          </p>
          <div className='text-center sm:text-center pb-3'>
            <Button className='hover:scale-110 active:scale-105 transition rounded-full font-normal h-7 w-auto bg-secondary hover:bg-secondary-foreground text-accent'>
              <Link
                href='mailto:berenger.fgs@gmail.com'
                className='flex items-center'
              >
                <Mail className='mr-2 h-4 w-4' />
                berenger.fgs@gmail.com
              </Link>
            </Button>
          </div>

          <p className='text-center sm:text-center'>
            ou via les réseaux sociaux.
          </p>
        </div>
        <div className='flex gap-2 pb-2 justify-center'>
          <Button className='hover:scale-110 active:scale-105 transition rounded-full font-normal h-7 w-auto bg-secondary hover:bg-secondary-foreground text-accent'>
            <Link
              href='https://github.com/beren87'
              target='_blank'
              className='flex items-center'
            >
              <Github className='mr-2 h-4 w-4' /> Github
            </Link>
          </Button>
          <Button className='hover:scale-110 active:scale-105 transition rounded-full font-normal h-7 w-auto bg-secondary hover:bg-secondary-foreground text-accent'>
            <Link
              href='https://www.linkedin.com/in/berenger-ferguenis/'
              target='_blank'
              className='flex items-center'
            >
              <Linkedin className='mr-2 h-4 w-4' />
              LinkedIn
            </Link>
          </Button>
        </div>
        <h3 className='pb-3 text-center pt-6'>
          Statut : <span className='text-popover'>Disponible</span>
        </h3>
      </div>
    </section>
  )
}
