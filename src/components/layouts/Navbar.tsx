"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Logo from "../../public/logo.png"
import Image from "next/image"

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/70 border-b border-border"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-black tracking-tight"
        >
          <Image
            src={Logo}
            alt="Logo de Raí"
            width={120}
            height={40}
            priority
            className="h-15 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-muted">
          <Link href="#about" className="hover:text-foreground transition-colors">
            Sobre
          </Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">
            Projetos
          </Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}