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
import { projectData } from "@/lib/data"

export const Projects = () => {
  return (
    <section
      id='projets'
      className='container scroll-m-1 sm:scroll-m-24 md:scroll-m-1 sm:pb-32 pt-32 sm:pt-24 md:pt-24'
    >
      <div>
        <h1 className='font-bold text-lg sm:text-3xl'>Mes projets</h1>
      </div>
      <div className='flex flex-row'>
        <Accordion type='single' collapsible>
          {projectData.map((project, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{project.title}</AccordionTrigger>
              <AccordionContent>
                <div>
                  <p className='text-primary text-xs sm:text-xl'>
                    {project.description}
                  </p>

                  <Separator className='my-4 bg-accent' />
                  <div className='flex flex-wrap sm:flex-nowrap h-5 items-center space-x-4 text-sm'>
                    {project.separator.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <div className='b-2 flex items-center'>
                          {project.svgdata[idx]}
                          <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                            {item}
                          </span>
                        </div>
                        {idx < project.separator.length - 1 && (
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
                <div className='pb-2'>
                  <Link href={project.site} target='_blank'>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className='ml-4 sm:mt-8 mt-12 text-secondary border-secondary border-2 bg-accent hover:bg-secondary-foreground sm:text-base text-sm hover:scale-110 active:scale-105 transition'>
                            Consulter
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className='text-primary '>{project.site}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
