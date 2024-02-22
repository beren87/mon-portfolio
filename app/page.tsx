import { Heroe } from "@/src/heroe/Heroe"
import Project from "@/src/project/Project"
import { Skill } from "@/src/skills/Skill"

export default function Home() {
  return (
    <main className='flex-1 max-w-3xl m-auto py-4 w-full'>
      <Heroe />
      <Skill />
      <Project />
    </main>
  )
}
