"use client"

import { usePersonalData } from "@/lib/usePersonalData"

export const About = () => {
  const { age, yearsCalisthenics, yearsMotoGP } = usePersonalData()

  return (
    <section
      id='profil'
      className='container gap-16 pt-8 sm:pt-4 scroll-m-1 sm:scroll-m-24 md:scroll-m-1'
    >
      <div className='pt-3 sm:pt-8'>
        <h1 className='font-bold text-lg sm:text-3xl text-primary'>
          À propos de moi
        </h1>
      </div>
      <div className='flex flex-row py-4 sm:py-10'>
        <div className='sm:pb-16'>
          <p className='font-normal text-sm sm:text-base pb-3 '>
            J&apos;ai {age} ans, je réside en Bretagne dans les
            côtes-d&apos;Armor.
          </p>
          <p className='font-normal text-sm sm:text-base pb-3'>
            Anciennement adjoint administratif, je me suis réorienté
            professionnellement comme Développeur Web.
          </p>
          <p className='font-normal text-sm sm:text-base'>
            Voilà {yearsCalisthenics} ans que je me consacre avec passion à la
            calisthenics et à la musculation. Parallèlement, je ne rate aucun
            championnat MotoGP depuis {yearsMotoGP} ans.
          </p>
        </div>
      </div>
    </section>
  )
}
