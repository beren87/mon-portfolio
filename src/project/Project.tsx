import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Orig Ami</AccordionTrigger>
          <AccordionContent>Bientôt disponible</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Doc Add</AccordionTrigger>
          <AccordionContent>Bientôt disponible</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Portfolio</AccordionTrigger>
          <AccordionContent>
            <div>
              <p className='text-primary text-lg sm:text-xl'>
                Mon portfolio est une vitrine de mes compétences et de mes
                réalisations en tant que développeur web.
              </p>
              <Separator className='my-4' />
              <div className='flex h-5 items-center space-x-4 text-sm'>
                <div className='b-2 flex items-center'>
                  <svg
                    height='12'
                    viewBox='0 0 32 32'
                    width='12'
                    className='fill-svg'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m23.749 30.005c-.119.063-.109.083.005.025.037-.015.068-.036.095-.061 0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016.036-.021.068-.041.068-.047 0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016.037-.021.068-.043.068-.048 0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zm-9.563-29.536c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208-.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792-.057.125-.151.229-.276.287-.099.047-.188.057-.661.057h-.541l-.141-.088c-.088-.057-.161-.136-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125c.063-.077.141-.14.229-.187.131-.063.183-.073.724-.073.635 0 .74.025.907.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083c1.219-.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177.129-.88.145-1.141.145-2.333 0-1.193-.016-1.448-.145-2.328-.871-6.011-5.147-11.057-10.943-12.928-1.084-.343-2.199-.577-3.328-.697-.303-.031-2.371-.068-2.631-.041zm6.547 9.677c.151.072.265.208.317.364.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204.047-.167.161-.307.313-.395.124-.063.172-.068.667-.068.463 0 .541.005.645.063z' />
                  </svg>

                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    Next JS
                  </span>
                </div>
                <Separator className='bg-primary' orientation='vertical' />
                <div className='b-2 flex items-center'>
                  <svg
                    height='12'
                    viewBox='0 0 24 24'
                    width='12'
                    className='fill-svg'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15z' />
                  </svg>

                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    Tailwind CSS
                  </span>
                </div>
                <Separator className='bg-primary' orientation='vertical' />
                <div className='b-2 flex items-center pb-1'>
                  <svg
                    viewBox='0 0 24 24'
                    className='fill-svg'
                    height='12'
                    width='12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m0 12v12h24v-24h-24zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925a1.58 1.58 0 0 1 .22-.141c.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1 -.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002.008.983h-3.125v8.876h-2.21v-8.876h-3.122v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z' />
                  </svg>
                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    TypeScript
                  </span>
                </div>
                <Separator className='bg-primary' orientation='vertical' />
                <div className='b-2 flex items-center pb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 256 256'
                    className='h-3 w-3'
                  >
                    <rect width='256' height='256' fill='none'></rect>
                    <line
                      x1='208'
                      y1='128'
                      x2='128'
                      y2='208'
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='16'
                    ></line>
                    <line
                      x1='192'
                      y1='40'
                      x2='40'
                      y2='192'
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='16'
                    ></line>
                  </svg>
                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    Shadcn/UI
                  </span>
                </div>
                <Separator className='bg-primary' orientation='vertical' />
                <div className='b-2 flex items-center pb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    id='lucide-logo'
                  >
                    <path
                      d='M14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 16.4183 9.58172 20 14 20C18.4183 20 22 16.4183 22 12C22 8.446 20.455 5.25285 18 3.05557'
                      stroke='#fff'
                    />
                    <path
                      d='M10 12C10 14.2091 11.7909 16 14 16C16.2091 16 18 14.2091 18 12C18 7.58172 14.4183 4 10 4C5.58172 4 2 7.58172 2 12C2 15.5841 3.57127 18.8012 6.06253 21'
                      stroke='#D9D9D9'
                    />
                  </svg>
                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    Lucide
                  </span>
                </div>
              </div>
            </div>
            <div className='pb-2'>
              <Link href={"https://quai-antique-chambery.herokuapp.com/"}>
                <Button className='mt-4 text-accent bg-secondary sm:text-base text-sm'>
                  Consulter
                </Button>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Project
