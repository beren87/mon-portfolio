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
import { useToast } from "@/components/ui/use-toast"

export const AccordionTheme = () => {
  const { toast } = useToast()
  return (
    <>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Quai Antique</AccordionTrigger>
          <AccordionContent>
            <div>
              <p className='text-primary text-lg sm:text-xl'>
                Quai Antique est une site vitrine pour un restaurant
                gastronomique savoyard. C'est un projet réalisé pour une
                évaluation de fin de formation DWWM.
              </p>

              <Separator className='my-4' />
              <div className='flex h-5 items-center space-x-4 text-sm'>
                <div className='b-2 flex items-center'>
                  <svg
                    viewBox='0 0 32 32'
                    width={14}
                    height={14}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='m16 2a14 14 0 1 1 -14 14 14 14 0 0 1 14-14zm6.121 5.18a5.022 5.022 0 0 0 -3.588 1.92 12.09 12.09 0 0 0 -2.194 4.038 7.827 7.827 0 0 0 -2.962-2.056 3.621 3.621 0 0 0 -3.281.6 2.943 2.943 0 0 0 -1 1.462 3.31 3.31 0 0 0 .837 3.034l.86.922a1.306 1.306 0 0 1 .4 1.328 1.588 1.588 0 0 1 -2.021.93c-.406-.124-.989-.426-.858-.852a3.937 3.937 0 0 1 .245-.455 2.136 2.136 0 0 0 .109-.283 1.138 1.138 0 0 0 -.641-1.427.954.954 0 0 0 -1.319.659c-.244.792.135 2.231 2.167 2.857 2.38.731 4.393-.565 4.679-2.255.18-1.059-.3-1.845-1.174-2.857l-.713-.789a1.3 1.3 0 0 1 -.133-1.733 1.531 1.531 0 0 1 1.8-.441c1.285.349 1.858 1.241 2.814 1.96-.395 1.295-.653 2.594-.886 3.759l-.142.869c-.683 3.584-1.2 5.552-2.56 6.681a2.195 2.195 0 0 1 -1.252.505.36.36 0 0 1 -.412-.3c-.007-.217.175-.316.3-.413a.75.75 0 0 0 .437-.788 1.188 1.188 0 0 0 -1.276-1.134 1.48 1.48 0 0 0 -1.373 1.5c.033.99.956 1.732 2.347 1.685a5.621 5.621 0 0 0 4.041-2.274 14.159 14.159 0 0 0 2.828-6.648l.447-2.47c.248.03.514.05.8.057 2.373.05 3.559-1.179 3.577-2.073a.969.969 0 0 0 -.868-1.061.99.99 0 0 0 -.94.763c-.108.5.755.949.08 1.386a3.762 3.762 0 0 1 -2.549.351l.22-1.216c.449-2.306 1-5.143 3.1-5.212.153-.008.713.007.726.377 0 .124-.027.155-.172.439a1 1 0 0 0 -.2.625.984.984 0 0 0 1.116.952 1.207 1.207 0 0 0 1.1-1.306c-.035-1.018-1.109-1.662-2.53-1.615z'
                      fill='#D9D9D9'
                    />
                  </svg>

                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    Symfony
                  </span>
                </div>
                <Separator className='bg-primary' orientation='vertical' />
                <div className='b-2 flex items-center'>
                  <svg
                    height='12'
                    preserveAspectRatio='xMidYMid'
                    viewBox='0 0 256 252'
                    width='12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g fill='#D9D9D9'>
                      <path d='m235.648276 194.211632c-13.918425-.347073-24.705404 1.04564-33.752672 4.872332-2.609705 1.043442-6.785677 1.044534-7.133837 4.349494 1.392731 1.392731 1.566267 3.654258 2.784329 5.567597 2.089096 3.478496 5.741151 8.177288 9.047221 10.613452 3.653144 2.783241 7.307374 5.566482 11.134099 8.002646 6.785676 4.175972 14.441209 6.611017 21.052261 10.78697 3.8289 2.433944 7.654446 5.567588 11.482257 8.177288 1.914473 1.390515 3.131447 3.653134 5.567615 4.523035v-.521714c-1.218107-1.566253-1.566267-3.82778-2.783241-5.567588-1.738716-1.739803-3.479606-3.306061-5.219409-5.045864-5.045874-6.78458-11.308766-12.700296-18.094352-17.571532-5.566482-3.827798-17.746192-9.047198-20.007783-15.484697 0 0-.174624-.173541-.34816-.347081 3.827767-.348183 8.350812-1.73979 12.005087-2.784347 5.915775-1.566249 11.308766-1.218075 17.397986-2.783241 2.783242-.696352 5.567615-1.566253 8.350856-2.43616v-1.565147c-3.130313-3.132543-5.392945-7.307391-8.699016-10.265297-8.872552-7.656665-18.616138-15.136509-28.706753-21.399384-5.394079-3.479602-12.353292-5.742243-18.094352-8.699025-2.086876-1.04564-5.567615-1.566249-6.784589-3.30607-3.132521-3.827776-4.872324-8.872539-7.133841-13.39672-5.043653-9.569974-9.917119-20.181273-14.266572-30.271914-3.130314-6.785672-5.044759-13.5713758-8.872548-19.8341417-17.919696-29.5766179-37.405767-47.4964131-67.330554-65.0690659-6.4374848-3.6531522-14.0919301-5.2194033-22.2692452-7.132745-4.3483979-.1746441-8.6990159-.5217158-13.0485556-.6963599-2.7832411-1.2180946-5.5675877-4.5230433-8.0037607-6.0893084-9.914871-6.263948-35.49132349-19.83311518-42.7986917-1.91334173-4.69769062 11.30874923 6.95921274 22.44277463 10.9604927 28.18497883 2.9589885 4.0013366 6.785672 8.52437 8.8736578 13.0485651 1.2180888 2.9556763 1.5651568 6.0893021 2.7832456 9.2207303 2.7843421 7.6533624 5.3929413 16.1798978 9.0471895 23.3138294 1.9144451 3.6531517 4.0013253 7.4809362 6.4374893 10.78586 1.391616 1.9133395 3.8266789 2.7843466 4.3494989 5.9157703-2.4350539 3.4795927-2.6097002 8.6990157-4.0024309 13.0485557-6.2628429 19.6595-3.8266834 44.016808 5.0458733 58.456898 2.7832411 4.348407 9.3953359 13.919531 18.2679606 10.265292 7.8291099-3.131438 6.0893021-13.048556 8.3508288-21.747572.522829-2.089087.1746418-3.479593 1.2180842-4.871227.0009062.173541 0 .348178 0 .348178 2.4361595 4.871227 4.8712269 9.568949 7.1327445 14.440095 5.3940469 8.524369 14.7883543 17.398018 22.6174139 23.313847 4.177078 3.130305 7.482033 8.524374 12.70142 10.43881v-.522829h-.348178c-1.044544-1.566253-2.6097-2.261526-4.001325-3.479592-3.131429-3.131429-6.612136-6.959227-9.04719-10.438811-7.3062853-9.743595-13.7448892-20.529446-19.4859814-31.664585-2.7832411-5.392941-5.2194005-11.308762-7.4809272-16.701685-1.0445434-2.089082-1.0445434-5.219405-2.7843466-6.262838-2.6097003 3.826674-6.4363837 7.132744-8.3508287 11.830444-3.3038545 7.480927-3.6531427 16.70168-4.8712269 26.27053-.6952689.174651-.3481872 0-.6963699.348191-5.5664866-1.39273-7.4809317-7.132744-9.5689538-12.005086-5.219405-12.352126-6.089302-32.186368-1.5651568-46.451816 1.2180843-3.654248 6.4374893-15.1365232 4.3495035-18.6161341-1.0434424-3.3060746-4.5241498-5.219405-6.4374893-7.8291052-2.2615267-3.3060701-4.6976861-7.4809317-6.2628429-11.1351391-4.1759717-9.7424765-6.2639485-20.5294466-10.7869746-30.2730422-2.0879858-4.5241489-5.7411285-9.2207317-8.6990159-13.3956091-3.3049555-4.6976779-6.9592128-8.0037489-9.56894927-13.5713557-.86880057-1.9133417-2.08798584-5.0447591-.69636078-7.132754.34818266-1.3916119 1.04343788-1.9133367 2.43615945-2.26152163 2.2615266-1.91444548 8.6990159.52171573 10.9604927 1.56516133 6.4374893 2.6085888 11.8304442 5.0458724 17.2244911 8.699015 2.4350584 1.739801 5.0447586 5.0458719 8.1761869 5.9157726h3.6542437c5.5675876 1.2169814 11.8304441.3481659 17.0498446 1.9133413 9.2218359 2.9567828 17.5715365 7.3073891 25.0536417 12.005086 22.7920604 14.4400978 41.5805834 34.9706635 54.2820934 59.5014942 2.087986 4.0002246 2.956782 7.6555646 4.871227 11.8304446 3.654248 8.525475 8.177288 17.224486 11.83044 25.575328 3.653142 8.176183 7.132744 16.528144 12.352131 23.31383 2.610806 3.652046 13.048542 5.566482 17.746165 7.480927 3.479606 1.565166 8.873685 2.957896 12.005086 4.871231 5.914689 3.652037 11.830464 7.829124 17.398033 11.83044 2.784329 2.086889 11.482257 6.437498 12.005086 9.916004z' />
                      <path d='m58.1864892 43.0222644c-2.9578829 0-5.0447587.3492882-7.1327445.8710162 0-.0009062 0 .1746419 0 .3481827h.3481872c1.3927261 2.7832401 3.8266835 4.6976852 5.5664821 7.1327345 1.3927306 2.7832411 2.6097003 5.5675967 4.0024309 8.3519434.1735317-.1746464.3470726-.3481827.3470726-.3481827 2.437274-1.7409087 3.6542482-4.5241498 3.6542482-8.6990159-1.044548-1.2180843-1.2180888-2.436164-2.0879859-3.6542482-1.0434424-1.7409124-3.3060746-2.6096994-4.6976906-4.00243z' />
                    </g>
                  </svg>

                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    MySQL
                  </span>
                </div>
                <Separator className='bg-primary' orientation='vertical' />
                <div className='b-2 flex items-center pb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 118 94'
                    role='img'
                  >
                    <title>Bootstrap</title>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z'
                      fill='#D9D9D9'
                    ></path>
                  </svg>
                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    Bootstrap
                  </span>
                </div>
                <Separator className='bg-primary' orientation='vertical' />
                <div className='b-2 flex items-center pb-1'>
                  <svg
                    viewBox='0 0 24 24'
                    className='fill-svg'
                    width={14}
                    hanging={14}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-2.385 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267-1.843 1.721-2.136 3.221-2.015 3.848.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256a.362.362 0 0 0 -.105-.105c-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505z' />
                  </svg>
                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    Sass
                  </span>
                </div>
                <Separator className='bg-primary' orientation='vertical' />
                <div className='b-2 flex items-center pb-1'>
                  <svg
                    height='12'
                    preserveAspectRatio='xMidYMid'
                    viewBox='0 0 256 285'
                    width='12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='m230.4 0c13.99552 0 25.37047 11.2315104 25.59657 25.1765997l.00343.4234003v233.244444c0 13.99552-11.234995 25.370471-25.176704 25.59657l-.423296.00343h-204.8c-13.99552 0-25.3704704-11.234995-25.59656986-25.176704l-.00343014-.423296v-233.244444c0-13.99904 11.2349952-25.3705408 25.1767043-25.59657091l.4232957-.00342909zm0 14.2222222h-204.8c-6.174 0-11.2179375 4.9474688-11.3740532 11.084647l-.0037246.2931308v233.244444c0 6.174 4.9474688 11.217938 11.084647 11.374054l.2931308.003724h204.8c6.1775 0 11.218047-4.947469 11.374056-11.084647l.003722-.293131v-233.244444c0-6.272-5.102222-11.3777778-11.377778-11.3777778zm-166.4 170.6666668 32 28.444444-32 28.444445zm28.4444444-142.2222223v80.7502223c14.2008886-4.622222 34.0515556-9.639111 53.3333336-9.639111 17.582222 0 28.106666 6.912 33.838222 12.711111 12.1088 12.2496 12.397158 27.820214 12.381015 29.896777l-.000571.058778.003556 85.333334h-28.444444v-84.942222c-.138667-6.638223-3.338667-14.613334-17.777778-14.613334-28.63168 0-60.7133122 14.256317-61.6660273 14.682891l-.0193063.008665-20.0924444 9.102222v-123.3493333zm99.5555556 0c-1.92 16.1564444-8.469333 31.6444444-21.333333 46.2222222h-28.444445c11.178667-14.6666667 18.197334-30.1013333 21.333334-46.2222222z'
                      fill='#D9D9D9'
                    />
                  </svg>
                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    Heroku
                  </span>
                </div>
              </div>
            </div>
            <div className='pb-2'>
              <Link
                href={"https://quai-antique-chambery.herokuapp.com/"}
                target='_blank'
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button className='mt-8 text-accent bg-secondary sm:text-base text-sm'>
                        Consulter
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className='text-primary '>
                        quai-antique-chambery.herokuapp.com
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>AFAV</AccordionTrigger>
          <AccordionContent>
            <div>
              <p className='text-primary text-lg sm:text-xl'>
                Mon premier projet étudiant est un site statique visant à
                repenser le site de l'Association Française pour l'Archéologie
                du Verre (AFAV).
              </p>

              <Separator className='my-4' />
              <div className='flex h-5 items-center space-x-4 text-sm'>
                <div className='b-2 flex items-center'>
                  <svg
                    viewBox='0 0 384 512'
                    className='fill-svg'
                    width={14}
                    height={14}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m0 32 34.9 395.8 156.6 52.2 157.6-52.2 34.9-395.8zm308.2 127.9h-183.8l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7l3.5 38.1 53.5 14.5 53.7-14.5 6-62.2h-166.9l-12.8-145.6h241.1z' />
                  </svg>

                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    HTML
                  </span>
                </div>
                <Separator className='bg-primary' orientation='vertical' />
                <div className='b-2 flex items-center'>
                  <svg
                    viewBox='0 0 384 512'
                    className='fill-svg'
                    width={14}
                    height={14}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m0 32 34.9 395.8 157.1 52.2 157.1-52.2 34.9-395.8zm313.1 80-4.8 47.3-115.3 49.3-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3 112.1-46.7 6.5-2.7h-122.9l-5.8-47.3z' />
                  </svg>

                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    CSS
                  </span>
                </div>
                <Separator className='bg-primary' orientation='vertical' />
                <div className='b-2 flex items-center pb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 118 94'
                    role='img'
                  >
                    <title>Bootstrap</title>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z'
                      fill='#D9D9D9'
                    ></path>
                  </svg>
                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    Bootstrap
                  </span>
                </div>
                <Separator className='bg-primary' orientation='vertical' />
                <div className='b-2 flex items-center pb-1'>
                  <svg
                    viewBox='0 0 24 24'
                    className='fill-svg'
                    width={14}
                    hanging={14}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-2.385 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267-1.843 1.721-2.136 3.221-2.015 3.848.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256a.362.362 0 0 0 -.105-.105c-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505z' />
                  </svg>
                  <span className='ml-1 text-[0.60rem] sm:text-xs font-thin'>
                    Sass
                  </span>
                </div>
              </div>
            </div>
            <div className='pb-2'>
              <Link href={"https://afav.netlify.app/"} target='_blank'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button className='mt-8 text-accent bg-secondary sm:text-base text-sm'>
                        Consulter
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className='text-primary '>afav.netlify.app/</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </AccordionContent>
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
              <Link href={""}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={() => {
                          toast({
                            description:
                              "Le projet est en cours de développement et sera bientôt disponible",
                          })
                        }}
                        className='mt-8 text-accent bg-secondary sm:text-base text-sm'
                      >
                        Consulter
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className='text-primary '>Bérenger-fgs.com</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
