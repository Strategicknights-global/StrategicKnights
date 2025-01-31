import { JobApplicationForm } from '@/components/careers/job-application-form';
import { CareersHero } from '@/components/careers/careers-hero';

export default function JobApplicationPage() {
  return (
    <div className="pt-16">
      <CareersHero />
      <JobApplicationForm />
    </div>
  );
}