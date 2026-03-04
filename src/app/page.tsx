import { Navbar } from "@/components/layouts/Navbar"
import { Hero } from "@/sections/Hero"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
      </main>
    </>
  )
}