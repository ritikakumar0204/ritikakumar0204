import Navigation from '@/components/Navigation';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ResearchSection from '@/components/sections/ResearchSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <LeadershipSection />
        <ProjectsSection />
        <AchievementsSection />
        <ResearchSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
