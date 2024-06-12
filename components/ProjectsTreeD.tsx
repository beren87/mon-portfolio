"use client"
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
import { TooltipProvider } from "@radix-ui/react-tooltip"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { projectDataTreeD } from "@/lib/data"

export const ProjectsTreeD = () => {
  return (
    <section
      id='projets'
      className='container scroll-m-1 sm:scroll-m-24 md:scroll-m-1 sm:pb-32 pt-32 sm:pt-24 md:pt-24'
    >
      <div>
        <h1 className='font-bold text-lg sm:text-3xl'>
          Projets 3D réalisés en autodidacte
        </h1>
      </div>
      <div className='flex flex-row py-4 sm:py-10'>
        <div className='sm:pb-16'>
          {" "}
          <p className='font-normal text-sm sm:text-base pb-3'>
            Avant de me lancer dans une nouvelle carrière en tant que
            développeur web, J&apos;ai acquis des compétences en autodidacte
            dans le domaine de la modélisation 3D en utilisant divers logiciels.
          </p>
          <p className='font-normal text-sm sm:text-base'>
            Je vous invite à découvrir quelques-uns de mes projets en 3D afin de
            vous donner un aperçu plus complet de mes compétences et de mes
            capacités au-delà du développement web.
          </p>
        </div>
      </div>
      <div className='flex flex-row'>
        <Accordion type='single' collapsible>
          {projectDataTreeD.map((projectDataTreeD, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{projectDataTreeD.title}</AccordionTrigger>
              <AccordionContent>
                <div>
                  <p className='text-primary text-xs sm:text-xl'>
                    {projectDataTreeD.description}
                  </p>

                  <Separator className='my-4 bg-accent' />
                  <div className='flex flex-wrap sm:flex-nowrap h-5 items-center space-x-4 text-sm'>
                    {projectDataTreeD.separator.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <div className='b-2 flex items-center'>
                          {projectDataTreeD.svgdata[idx]}
                          <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                            {item}
                          </span>
                        </div>
                        {idx < projectDataTreeD.separator.length - 1 && (
                          <Separator
                            key={`separator-${idx}`}
                            className='bg-primary'
                            orientation='vertical'
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className='flex flex-row items-center sm:mt-8 mt-12'>
                  <div className='pb-2'>
                    {projectDataTreeD.site && (
                      <Link href={projectDataTreeD.site} target='_blank'>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button className='ml-4 text-secondary border-secondary border-2 bg-accent hover:bg-secondary-foreground sm:text-base text-sm hover:scale-110 active:scale-105 transition'>
                                Voir le personnage
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='text-primary '>
                                {projectDataTreeD.site}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>
                  <div className='pb-2'>
                    {projectDataTreeD.linkyoutube && (
                      <Link href={projectDataTreeD.linkyoutube} target='_blank'>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button className='ml-4 text-secondary border-secondary border-2 bg-accent hover:bg-secondary-foreground sm:text-base text-sm hover:scale-110 active:scale-105 transition'>
                                Lien Youtube
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='text-primary '>
                                {projectDataTreeD.linkyoutube}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>
                  <div className='pb-2'>
                    {projectDataTreeD.linkweb && (
                      <Link href={projectDataTreeD.linkweb} target='_blank'>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button className='ml-4 text-secondary border-secondary border-2 bg-accent hover:bg-secondary-foreground sm:text-base text-sm hover:scale-110 active:scale-105 transition'>
                                Lien DeviantArt
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='text-primary '>
                                {projectDataTreeD.linkweb}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
