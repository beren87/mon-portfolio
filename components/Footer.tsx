import React from "react"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className='flex justify-center items-center'>
      <div className='flex flex-col items-center justify-center'>
        <Image
          className='rounded-full border-[0.08rem] dark:border-primary'
          width={40}
          height={40}
          src={"/berenger.jpg"}
          alt='Bérenger Ferguenis portrait'
          quality={100}
          priority={true}
        />
        <p className='dark:text-primary text-xs sm:text-base py-2'>
          © {new Date().getFullYear()} Bérenger
        </p>
        <p className='font-thin text-base'>
          Conçu et réalisé par Bérenger Ferguenis
        </p>
      </div>
    </footer>
  )
}
