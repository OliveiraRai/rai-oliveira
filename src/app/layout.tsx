import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Raí Oliveira | Front-End Developer",
  description:
    "Portfolio profissional de desenvolvedor Front-End especializado em React, Next.js e TypeScript.",
  metadataBase: new URL("https://raioliveira.dev"),
  openGraph: {
    title: "Raí Oliveira | Front-End Developer",
    description:
      "Portfolio profissional de desenvolvedor Front-End especializado em React, Next.js e TypeScript.",
    url: "https://raioliveira.dev",
    siteName: "Raí Oliveira",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`dark ${poppins.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}