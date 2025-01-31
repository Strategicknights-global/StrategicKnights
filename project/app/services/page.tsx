import { ServiceHero } from '@/components/services/service-hero';
import { ServicesGrid } from '@/components/services/services-grid';
import { ProcessSection } from '@/components/services/process-section';
import { ServicePricing } from '@/components/services/service-pricing';

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServiceHero />
      <ServicesGrid />
      <ProcessSection />
      <ServicePricing />
    </div>
  );
}