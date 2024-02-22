"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      className='absolute top-4 right-4'
      variant='ghost'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        size={24}
        className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
      />
      <Moon
        size={24}
        className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
