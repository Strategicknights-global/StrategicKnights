import { CareersHero } from '@/components/careers/careers-hero';
import { JobApplicationForm } from '@/components/careers/job-application-form';

export default function CareersPage() {
  return (
    <div className="pt-16">
      <CareersHero />
      <JobApplicationForm />
    </div>
  );
}