"use client"
import React, { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Le nom doit contenir au moins 2 caractères",
    })
    .max(50, {
      message: "Le nom doit contenir au maximum 50 caractères",
    }),
  message: z.string(), // Ajout du schéma pour le champ message
})

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      message: "", // Définir une valeur par défaut pour le champ message
    },
  })

  const onSubmit = form.handleSubmit(values => {
    console.log("Form submitted with values:", values)
    setIsSubmitted(true)
    form.reset() // Réinitialiser les valeurs du formulaire
  })

  return (
    <section
      id='contact'
      className='scroll-m-1 sm:scroll-m-24 md:scroll-m-1 pt-20 pb-72 sm:pb-20 sm:pt-4'
    >
      <div className='flex flex-row container gap-16 pt-2 sm:pt-10 md:pt-24'>
        <div>
          <h1 className='font-bold text-lg sm:text-3xl'>Me contacter</h1>
          <div className='pt-8 sm:pt-4 pb-4 text-sm sm:text-lg'>
            <p className='text-center'>
              N'hésitez pas à me contacter directement par l'adresse mail{" "}
              <a
                className='text-secondary  hover:underline break-normal indent-20 sm:indent-24'
                href='mailto:berenger.fgs@gmail.com'
              >
                berenger.fgs@gmail.com
              </a>
            </p>
            <p className='text-center'>ou via ce formulaire.</p>
          </div>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={onSubmit} className='space-y-8'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn' {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder='Type your message here.' {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          {isSubmitted ? (
            <p>Votre message a été soumis avec succès!</p>
          ) : (
            <Button type='submit'>Submit</Button>
          )}
        </form>
      </Form>
    </section>
  )
}
