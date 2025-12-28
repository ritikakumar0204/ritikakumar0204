import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Data Science',
    school: 'Northeastern University, Khoury College of Computer Sciences',
    period: 'Boston, MA | GPA: 3.9/4.0',
    description: 'Coursework across ML systems, NLP, and applied statistics with a focus on productionizing models.',
  },
  {
    degree: 'Bachelor of Technology in Electrical and Electronics Engineering',
    school: 'National Institution of Technology (NIT)',
    period: 'Nagpur, India | CGPA: 8/10',
    description: 'Technical foundation in math, signal processing, and systems; led hands-on engineering projects.',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 lg:py-32 relative">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 justify-center">
          <GraduationCap className="text-primary" size={28} />
          <h2 className="text-2xl lg:text-3xl font-bold">Education</h2>
          <div className="flex-1 h-px bg-border/50 ml-4" />
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto text-left w-full">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />

                <div className="group">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mb-2">
                    <h3 className="text-lg lg:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.degree}
                    </h3>
                    <span className="text-sm font-mono text-primary/80">{item.period}</span>
                  </div>
                  <p className="text-primary/90 font-medium mb-2">{item.school}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
