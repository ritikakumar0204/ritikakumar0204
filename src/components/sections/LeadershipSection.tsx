import { GraduationCap, Users } from 'lucide-react';

const leadership = [
  {
    title: 'MS Advisory Board Member',
    org: 'Khoury College of Computer Sciences',
    period: 'Sep 2025 - Present · Boston, MA',
    description: [
      'Represent MS student perspectives on curriculum and student experience improvements.',
      'Participate in biweekly advisory meetings to surface MS student feedback across four institutional pillars — academics, research, co-op, and co-curricular experience — informing college-level decisions on curriculum design and student outcomes',
      "Bridge the gap between student needs and faculty/administrative priorities by advocating for graduate experience improvements within Khoury College's structured continuous improvement framework"
    ],
  },
  {
    title: 'Graduate Student Assistant',
    org: 'Northeastern University',
    period: 'Sep 2025 - Present · Boston, MA · Part-time',
    description: [
      'Spearheaded Graduate Professional & Student Appreciation Week (GPSAW), a university-wide initiative engaging 400+ graduate students through cross-departmental coordination, end-to-end event logistics, and full project ownership across programming, budgeting, and execution',
      'Conceptualized and launched Care Drops, an independent student wellness initiative for the graduate community, demonstrating ownership from ideation through delivery with zero prior precedent.',
      'Contributed to 3 recurring semester-long event series designed to foster belonging and engagement among graduate students, supporting programming continuity and iterative improvement across two academic semesters',
      'Analyzed enrollment melt and engagement trend data to inform programming decisions and resource allocation; maintained budget tracking and collaborated across university departments to align events with institutional priorities'

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
      'Held office hours and provided targeted support to undergraduate students on core discrete mathematics concepts including logic, proofs, set theory, and combinatorics, reinforcing comprehension alongside primary instruction'
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
