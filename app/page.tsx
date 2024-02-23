import { Projects } from "@/components/Projects"
import { Heroe } from "@/components/Heroe"
import { Skill } from "@/components/Skill"

export default function Home() {
  return (
    <main className='flex-1 max-w-3xl m-auto py-4 w-full'>
      <Heroe />
      <Skill />
      <Projects />
    </main>
  )
}
