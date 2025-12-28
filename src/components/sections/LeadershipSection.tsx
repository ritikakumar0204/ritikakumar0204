import { GraduationCap, Users } from 'lucide-react';

const leadership = [
  {
    title: 'MS Advisory Board Member',
    org: 'Khoury College of Computer Sciences',
    period: 'Sep 2025 - Present · Boston, MA',
    description: [
      'Represent MS student perspectives on curriculum and student experience improvements.',
    ],
  },
  {
    title: 'Graduate Student Assistant',
    org: 'Northeastern University',
    period: 'Sep 2025 - Present · Boston, MA · Part-time',
    description: [
      'Provide graduate-level academic support and assist with program operations.',
    ],
  },
  {
    title: 'Career Peer Advisor',
    org: 'Khoury College of Computer Sciences',
    period: 'Sep 2025 - Present · Boston, MA · Part-time',
    description: [
      'Advise graduate students on resumes, cover letters, and LinkedIn tailored to data science, AI, and software engineering roles.',
      'Coach students to articulate technical projects, quantify impact, and align experiences with industry expectations.',
      'Collaborate with career advisors to run professional development events, peer panels, and networking sessions.',
      'Support inclusive mentorship and peer-to-peer guidance for data science and computer science students.',
    ],
  },
  {
    title: 'Graduate Teaching Assistant · CS 1800 Discrete Structures',
    org: 'Northeastern University',
    period: 'Jul 2025 - Aug 2025 · Boston, MA · On-site',
    description: [
      'Supported instruction and student learning for CS 1800 Discrete Structures.',
    ],
  },
  {
    title: 'Director of Events',
    org: 'Khoury SHEROS of Color',
    period: 'Dec 2023 - Present · Boston, MA · Part-time',
    description: [
      'Led event strategy and execution for a graduate organization supporting women of color in STEM.',
      'Planned technical workshops, networking sessions, and panels with industry leaders in AI and technology.',
      'Coordinated with university departments and partners to secure speakers, sponsorships, and logistics.',
    ],
  },
  {
    title: 'Chair, NU Boston ACM-W Student Chapter',
    org: 'Northeastern University',
    period: 'Jul 2024 - Present · Boston, MA',
    description: [
      'Lead chapter programming and outreach for women in computing across Northeastern’s Boston campus.',
    ],
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24 lg:py-32 relative">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 justify-center">
          <Users className="text-primary" size={28} />
          <h2 className="text-2xl lg:text-3xl font-bold">Leadership & Academic Experience</h2>
          <div className="flex-1 h-px bg-border/50 ml-4" />
        </div>

        <div className="max-w-5xl w-full mx-auto grid lg:grid-cols-2 gap-6 text-left">
          {leadership.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-7 rounded-xl bg-card/40 border border-border/50 hover:border-primary/30 transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-3 mb-3">
                <GraduationCap className="text-primary" size={22} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-primary/90 text-sm">{item.org}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1">{item.period}</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {item.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
