"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, Mail, ScrollText } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        <h2 className='pb-3 italic text-lg'>Développeur Web Junior</h2>
        <h3 className='pb-3'>
          Statut :{" "}
          <span className='text-yellow-200 font-semibold'>
            En immersion du 17/06 au 28/06 2024 chez :
            <Link
              className='flex flex-row justify-center'
              href='https://g5-digital.com/'
              target='_blank'
            >
              G5 Digital
            </Link>
          </span>
        </h3>
        <div className='flex gap-2 pb-2 justify-center'>
          <Button className='hover:scale-110 active:scale-105 transition rounded-full font-normal h-7 w-auto border-secondary bg-accent hover:bg-secondary-foreground border-2'>
            <Link
              href='https://github.com/beren87'
              target='_blank'
              className='flex items-center'
            >
              <svg
                viewBox='0 0 24 24'
                height='18'
                width='18'
                className='fill-svgbutton'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57 4.801-1.574 8.236-6.074 8.236-11.369 0-6.627-5.373-12-12-12' />
              </svg>
              <span className='text-secondary ml-1'>Github</span>
            </Link>
          </Button>
          <Button className='hover:scale-110 active:scale-105 transition rounded-full font-normal h-7 w-auto border-secondary bg-accent hover:bg-secondary-foreground border-2'>
            <Link
              href='https://www.linkedin.com/in/berenger-ferguenis/'
              target='_blank'
              className='flex'
            >
              <svg
                viewBox='0 0 24 24'
                height={18}
                width={18}
                className='fill-svgbutton'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='m0 0h24v24h-24z'
                  fill='#fff'
                  opacity='0'
                  transform='matrix(-1 0 0 -1 24 24)'
                />
                <g fill=''>
                  <path d='m15.15 8.4a5.83 5.83 0 0 0 -5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0 -5.85-5.82z' />
                  <rect height='11.7' rx='.9' width='4.5' x='3' y='9.3' />
                  <circle cx='5.25' cy='5.25' r='2.25' />
                </g>
              </svg>
              <span className='text-secondary ml-1'>LinkedIn</span>
            </Link>
          </Button>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <Button className='hover:scale-110 active:scale-105 transition rounded-full font-normal h-7 w-auto border-secondary bg-accent hover:bg-secondary-foreground border-2'>
            <a
              href='/CV-FERGUENIS-BERENGER.pdf'
              download
              className='flex items-center'
            >
              <ScrollText className='mr-2 h-4 w-4 text-secondary' />{" "}
              <span className='text-secondary'>Mon CV </span>
              <Download className='ml-2 h-4 w-4 text-secondary' />
            </a>
          </Button>

          <Button className='hover:scale-110 active:scale-105 transition rounded-full font-normal h-7 w-auto border-secondary bg-accent hover:bg-secondary-foreground border-2'>
            <Link
              href='mailto:berenger.fgs@gmail.com'
              className='flex items-center'
            >
              <Mail className='mr-2 h-4 w-4 text-secondary' />
              <span className='text-secondary'>Me contacter</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
