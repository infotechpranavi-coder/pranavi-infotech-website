import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { LogoCloud } from '@/components/logo-cloud'
import { ServicesSection } from '@/components/services-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { IndustrySectors } from '@/components/industry-sectors'
import { ProcessSection } from '@/components/process-section'
import { CTASection } from '@/components/cta-section'
import { TechAnnouncementBar } from '@/components/tech-announcement-bar'
import { TechTickerBanner } from '@/components/tech-ticker-banner'
import { TechSectionBanner } from '@/components/tech-section-banner'

export const metadata = {
  title: 'Pranavi Infotech - Enterprise Technology Solutions',
  description:
    'Transform your business with cutting-edge software solutions, strategic consulting, and digital transformation services.',
}

export default async function HomePage() {
  return (
    <main>
      <TechAnnouncementBar />
      <Navbar />
      <HeroSection />
      <TechTickerBanner />
      <LogoCloud />
      <ServicesSection />
      <WhyChooseUs />
      <IndustrySectors />
      <TechSectionBanner />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}

