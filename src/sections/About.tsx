"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section
      id="about"
      className="relative py-32"
    >
      <div className="container mx-auto px-6">
        
        <div className="mx-auto max-w-4xl text-left">
          
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-12"
          >
            Sobre
          </motion.h2>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-2xl text-foreground/80 leading-relaxed"
          >
            <p>
              Sou desenvolvedor focado em construir interfaces funcionais,
              bem estruturadas e orientadas a resultado.
            </p>

            <p>
              Trabalho com <span className="font-medium text-foreground">React, Next.js e TypeScript</span>, aplicando boas práticas
              de componentização, organização de código e performance.
              Busco escrever código previsível, escalável e fácil de manter.
            </p>

            <p>
              Mais do que entregar telas, me preocupo com clareza,
              acessibilidade e experiência do usuário — entendendo que cada
              detalhe impacta diretamente a percepção do produto.
            </p>

            <p>
              Atualmente estou evoluindo minha atuação para <span className="font-medium text-foreground">Full Stack</span>,
              ampliando minha visão sobre arquitetura, integração com APIs
              e modelagem de aplicações modernas.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}