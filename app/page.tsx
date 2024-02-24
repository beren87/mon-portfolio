import { Projects } from "@/components/Projects"
import { About } from "@/components/About"
import { Skill } from "@/components/Skill"
import { Intro } from "@/components/Intro"

export default function Home() {
  return (
    <main className='flex-1 max-w-3xl m-auto py-4 w-full'>
      <Intro />
      <About />
      <Skill />
      <Projects />
    </main>
  )
}
