import HeroSection from '@/components/sections/HeroSection'
import PropertyListing from '@/components/sections/PropertyListing'
import FeaturedProperties from '@/components/sections/FeaturedProperties'
import AboutSection from '@/components/sections/AboutSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AgentProfiles from '@/components/sections/AgentProfiles'
import Testimonials from '@/components/sections/Testimonials'
import SalesChart from '@/components/sections/SalesChart'
import DealSignature from '@/components/sections/DealSignature'
import LocationsSection from '@/components/sections/LocationsSection'
import BlogSection from '@/components/sections/BlogSection'
import ContactSection from '@/components/sections/ContactSection'
import Partners from '@/components/sections/Partners'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PropertyListing />
      <FeaturedProperties />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <AgentProfiles />
      <Testimonials />
      <SalesChart />
      <DealSignature />
      <LocationsSection />
      <BlogSection />
      <Partners />
      <ContactSection />
    </>
  )
}
