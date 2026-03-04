import { Navbar } from "@/components/layouts/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}