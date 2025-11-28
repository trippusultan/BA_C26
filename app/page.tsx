import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { GameModes } from "@/components/game-modes"
import { Gallery } from "@/components/gallery"
import { SystemRequirements } from "@/components/system-requirements"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <GameModes />
      <Gallery />
      <SystemRequirements />
      <CTASection />
      <Footer />
    </main>
  )
}
