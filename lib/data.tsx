// Purpose: Data for the navigation bar
import React from "react"
import { Book, Briefcase, Home, Send } from "lucide-react"

export const links = [
  {
    icon: <Home className='w-full' size={24} />,
    hash: "#accueil",
  },
  {
    icon: <Book className='w-full' size={24} />,
    hash: "#competences",
  },
  {
    icon: <Briefcase className='w-full' size={24} />,
    hash: "#projets",
  },
  {
    icon: <Send className='w-full' size={24} />,
    hash: "#contact",
  },
] as const
