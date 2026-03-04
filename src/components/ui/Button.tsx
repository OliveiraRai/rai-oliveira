"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ReactNode,
  ButtonHTMLAttributes,
} from "react"
import clsx from "clsx"

type BaseProps = {
  children: ReactNode
  variant?: "primary" | "ghost"
  className?: string
}

type LinkButtonProps = BaseProps & {
  href: string
}

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonProps = LinkButtonProps | NativeButtonProps

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className,
  } = props

  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"

  const variants = {
    primary:
      "bg-primary text-background hover:bg-foreground/90",
    ghost:
      "border border-border text-foreground hover:bg-border/40",
  }

  const composedClassName = clsx(
    baseStyles,
    variants[variant],
    className
  )

  const animatedWrapper = (content: ReactNode) => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {content}
    </motion.div>
  )

  // 🔎 Narrowing explícito
  if ("href" in props && typeof props.href === "string") {
    return animatedWrapper(
      <Link href={props.href} className={composedClassName}>
        {children}
      </Link>
    )
  }

  return animatedWrapper(
    <button
      {...props}
      className={composedClassName}
    >
      {children}
    </button>
  )
}