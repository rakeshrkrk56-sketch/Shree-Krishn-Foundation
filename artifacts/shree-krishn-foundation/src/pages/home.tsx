import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/sections/hero';
import { MissionSection } from '@/components/sections/mission';
import { ImpactSection } from '@/components/sections/impact';
import { InitiativesSection } from '@/components/sections/initiatives';
import { StorySection } from '@/components/sections/story';
import { GetInvolvedSection } from '@/components/sections/get-involved';
import { DonateSection } from '@/components/sections/donate';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <InitiativesSection />
      <StorySection />
      <GetInvolvedSection />
      <DonateSection />
      <Footer />
    </main>
  );
}
