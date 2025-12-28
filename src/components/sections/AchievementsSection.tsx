import { Trophy, Award, Star, Medal, ExternalLink } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Best Poster - Technical Depth',
    year: '2025',
    description: "Recognized at Khoury Master's Research Showcase for technical rigor in research presentation.",
  },
  {
    icon: Medal,
    title: 'Research Apprenticeship Scholarship',
    year: 'Fall 2025',
    description: 'Awarded semester-long scholarship with full tuition waiver to pursue research in data science and AI.',
  },
  {
    icon: Trophy,
    title: 'BU Sparks! Hackathon Winner - Best Impact (ThinkFlow)',
    year: '2025',
    description:
      'Built ThinkFlow, an AI-powered mind-map generator that won Best Impact at BU Sparks!; featured in BU article.',
    link: 'https://www.bu.edu/spark/2025/03/05/2025-civic-tech-hackathon-breaks-record-in-attendance-and-creativity/',
  },
  {
    icon: Star,
    title: '2024 Azure PyRIT Contributor',
    year: '2024',
    description: 'Merged PR enhancing Azure PyRIT (Microsoft AI red teaming framework) for AI safety research.',
    link: 'https://github.com/Azure/PyRIT/pull/503',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 lg:py-32 relative">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 justify-center">
          <Trophy className="text-primary" size={28} />
          <h2 className="text-2xl lg:text-3xl font-bold">Achievements</h2>
          <div className="flex-1 h-px bg-border/50 ml-4" />
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl w-full mx-auto text-left">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>

                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {achievement.title}
                  </h3>
                  <span className="text-sm font-mono text-primary/80 whitespace-nowrap">
                    {achievement.year}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Link</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
