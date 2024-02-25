import { Projects } from "@/components/Projects"
import { About } from "@/components/About"
import { Skill } from "@/components/Skill"
import { Intro } from "@/components/Intro"
import { Contact } from "@/components/Contact"
import { SectionDivider } from "@/components/SectionDivider"

export default function Home() {
  return (
    <main className='flex-1 max-w-3xl m-auto py-4 w-full'>
      <Intro />
      <About />
      <SectionDivider />
      <Skill />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
    </main>
  )
}
