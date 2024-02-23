"use client"
import Image from "next/image"
import React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ScrollText } from "lucide-react"
import Link from "next/link"

export const Heroe = () => {
  return (
    <section
      id='accueil'
      className='flex flex-col items-center h-screen scroll-mt-[100rem]'
    >
      <div>
        <Image
          className='rounded-full border-2 border-primary'
          width={158}
          height={158}
          src={"/berenger.jpg"}
          alt='Bérenger Ferguenis'
        />
      </div>
      <h1 className='text-3xl font-bold py-3'>Bérenger Ferguenis</h1>
      <h2 className='pb-3 italic text-lg'>Développeur web</h2>
      <h3 className='pb-3'>
        Statut : <span className='text-popover'>Disponible</span>
      </h3>
      <div className='flex gap-2 pb-2 justify-center'>
        <Button className='rounded-full font-normal h-6 w-auto bg-secondary text-accent'>
          <Github className='mr-2 h-4 w-4' />{" "}
          <Link href='https://github.com/beren87' target='_blank'>
            Github
          </Link>
        </Button>
        <Button className='rounded-full font-normal h-6 w-auto bg-secondary text-accent'>
          <Linkedin className='mr-2 h-4 w-4' />
          <Link
            href='https://www.linkedin.com/in/berenger-ferguenis/'
            target='_blank'
          >
            LinkedIn
          </Link>
        </Button>
      </div>
      <div className='flex gap-2 justify-center items-center'>
        <Button className='rounded-full font-normal h-6 w-auto bg-secondary text-accent'>
          <ScrollText className='mr-2 h-4 w-4' /> Mon CV
        </Button>
        <Button className='rounded-full font-normal h-6 w-auto bg-secondary text-accent'>
          <Mail className='mr-2 h-4 w-4' /> Me contacter
        </Button>
      </div>
      <div className='container gap-16 pt-10'>
        <div>
          <h1 className='font-bold text-lg sm:text-3xl'>À propos de moi</h1>
        </div>
        <div className='flex flex-row py-4 sm:py-10'>
          <div>
            <p className='font-normal text-sm sm:text-base pb-3'>
              J'ai 36 ans, je réside en Bretagne dans les côtes-d'Armor.
            </p>
            <p className='font-normal text-sm sm:text-base pb-3'>
              Anciennement adjoint administratif, je me suis réorienté
              professionnellement comme Développeur Web.
            </p>
            <p className='font-normal text-sm sm:text-base'>
              Voilà 6 ans que je me consacre avec passion à la calisthenics et à
              la musculation. Parallèlement, je ne rate aucun championnat MotoGP
              depuis 25 ans.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
