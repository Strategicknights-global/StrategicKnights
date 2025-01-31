import { TeamHero } from '@/components/team/team-hero';
import { TeamGrid } from '@/components/team/team-grid';
import { JoinTeam } from '@/components/team/join-team';

export default function TeamPage() {
  return (
    <div className="pt-16">
      <TeamHero />
      <TeamGrid />
      <JoinTeam />
    </div>
  );
}