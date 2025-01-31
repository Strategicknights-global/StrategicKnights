import { Timeline } from '@/components/about/timeline';
import { Stats } from '@/components/about/stats';
import { Mission } from '@/components/about/mission';

export default function AboutPage() {
  return (
    <div className="pt-16">
      <Mission />
      <Timeline />
      <Stats />
    </div>
  );
}