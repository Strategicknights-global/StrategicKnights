import { WelcomeAnimation } from '@/components/welcome-animation';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { FeaturesSection } from '@/components/features-section';
import { CTASection } from '@/components/cta-section';

export default function Home() {
  return (
    <>
      <WelcomeAnimation />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
}