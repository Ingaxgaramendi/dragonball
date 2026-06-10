import { LandingNavbar } from "@/components/landing/LandingNavbar"
import { HeroSection } from "@/components/landing/HeroSection"
import { StatsSection } from "@/components/landing/StatsSection"
import { FeaturedCharacters } from "@/components/landing/FeaturedCharacters"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { CharacterCarousel } from "@/components/landing/CharacterCarousel"
import { TestimonialsSection } from "@/components/landing/TestimonialsSection"
import { FAQSection } from "@/components/landing/FAQSection"
import { CTASection } from "@/components/landing/CTASection"
import { LandingFooter } from "@/components/landing/LandingFooter"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LandingNavbar />
      <HeroSection />
      <StatsSection />
      <FeaturedCharacters />
      <FeaturesSection />
      <CharacterCarousel />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <LandingFooter />
    </div>
  )
}
