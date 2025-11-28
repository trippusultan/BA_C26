import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Cricket 26 - The Ultimate Cricket Experience",
  description: "Experience the most realistic cricket simulation game with advanced gameplay, stunning graphics, and multiple game modes.",
  keywords: ["Cricket 26", "cricket game", "sports simulation", "Big Ant Studios"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.variable,
        poppins.variable,
        "font-sans antialiased"
      )}>
        {children}
      </body>
    </html>
  )
}
