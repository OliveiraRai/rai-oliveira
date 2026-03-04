"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] pt-20 flex items-center"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center-safe">
          {/* Coluna Texto */}
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-foreground/50 mb-6 uppercase tracking-[0.15em]"
            >
              Desenvolvedor Full Stack
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
              <Button href="#contact" variant="ghost">
                Entrar em Contato
              </Button>

              <Button href="#projects">Ver Projetos</Button>
            </motion.div>
          </div>

          {/* Coluna Rabisco */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-center"
            aria-hidden="true"
          >
            <Image
              src="/hero-doodle.png"
              alt="?"
              width={500}
              height={500}
              className="w-full max-w-md opacity-90"
              priority
            />
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-2">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-10 bg-foreground/40"
        />
      </motion.div>
    </section>
  );
}
