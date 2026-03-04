"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted mb-6"
          >
            Front-End Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
          >
            Eu construo interfaces
            <span className="block font-thin text-muted mt-3">
              rápidas, acessíveis e memoráveis.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#projects">
              Ver Projetos
            </Button>

            <Button href="#contact" variant="ghost">
              Entrar em Contato
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}