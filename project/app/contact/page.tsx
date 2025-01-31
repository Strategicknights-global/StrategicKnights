import { ContactHero } from '@/components/contact/contact-hero';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}