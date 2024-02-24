"use client"
import React, { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, Github, Linkedin, Mail, ScrollText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

export const Intro = () => {
  return (
    <section id='accueil' className='scroll-mt-[100rem]'>
      <div className='flex flex-col items-center justify-center '>
        <Image
          className='rounded-full border-2 border-primary'
          width={158}
          height={158}
          src={"/berenger.jpg"}
          alt='Bérenger Ferguenis portrait'
          quality={100}
          priority={true}
        />

        <h1 className='text-3xl font-bold py-3'>Bérenger Ferguenis</h1>
        <h2 className='pb-3 italic text-lg'>Développeur web</h2>
        <h3 className='pb-3'>
          Statut : <span className='text-popover'>Disponible</span>
        </h3>
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
        <div className='flex gap-2 justify-center items-center'>
          <Button className='hover:scale-110 active:scale-105 transition rounded-full font-normal h-7 w-auto bg-secondary hover:bg-secondary-foreground text-accent'>
            <ScrollText className='mr-2 h-4 w-4' /> Mon CV{" "}
            <Download className='ml-2 h-4 w-4' />
          </Button>

          <Button className='hover:scale-110 active:scale-105 transition rounded-full font-normal h-7 w-auto bg-secondary hover:bg-secondary-foreground text-accent'>
            <Link href='#contact' className='flex items-center'>
              <Mail className='mr-2 h-4 w-4' />
              Me contacter
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
