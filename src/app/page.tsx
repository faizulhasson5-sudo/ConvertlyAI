import ConverterTool from '@/components/ConverterTool'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FAQSection from '@/components/FAQSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConverterTool />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
    </>
  )
}