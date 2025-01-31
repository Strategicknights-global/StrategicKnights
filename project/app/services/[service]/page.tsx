import { notFound } from 'next/navigation';
import { ServiceDetails } from '@/components/services/service-details';
import { ProcessSection } from '@/components/services/process-section';
import { ServicePricing } from '@/components/services/service-pricing';
import { ServiceHero } from '@/components/services/service-hero';

const validServices = [
  'website-design',
  'digital-marketing',
  'seo-optimization',
  'social-media',
  'content-marketing',
  'email-marketing',
  'ppc-advertising',
  'brand-strategy',
  'ecommerce'
];

export default function ServicePage({ params }: { params: { service: string } }) {
  if (!validServices.includes(params.service)) {
    notFound();
  }

  return (
    <div className="pt-16">
      <ServiceHero service={params.service} />
      <ServiceDetails service={params.service} />
      <ProcessSection />
      <ServicePricing />
    </div>
  );
}