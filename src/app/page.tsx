import { Navbar } from "../components/layouts/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        <section className="container mx-auto px-6 py-32">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Construindo experiências digitais
            <span className="block text-muted font-thin mt-4">
              com foco em performance e design.
            </span>
          </h1>
        </section>
      </main>
    </>
  )
}