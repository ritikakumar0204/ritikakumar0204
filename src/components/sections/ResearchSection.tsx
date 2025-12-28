import { FileText, ExternalLink, BookOpen } from 'lucide-react';

const publications = [
  {
    title: 'ICD Codes Extraction from Clinical Notes Using Large Language Models',
    authors: 'Advisor: Dr. Deahan Yu',
    venue: 'Khoury Research Apprentice Scholarship (50% tuition waiver) | Best Poster - Technical Depth',
    year: 'Aug 2025 - Present',
    link: '',
    abstract:
      'Formulating reliable multi-label ICD-10 prediction for long-form clinical notes. Fine-tuning BioMistral-7B with QLoRA across distributed GPUs while experimenting with hierarchical supervision, label-space decomposition, and prompt-finetune hybrids to improve rare-code recall and parent-child consistency.',
    milestones: [
      'Designed scalable multi-GPU training workflows with monitoring and failure-mode analysis.',
      'Exploring hybrid prompting plus finetuning strategies for long-context clinical reasoning.',
    ],
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 lg:py-32 relative">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 justify-center">
          <BookOpen className="text-primary" size={28} />
          <h2 className="text-2xl lg:text-3xl font-bold">Research</h2>
          <div className="flex-1 h-px bg-border/50 ml-4" />
        </div>

        {/* Publications List */}
        <div className="max-w-4xl space-y-6 mx-auto text-left w-full">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-xl bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex shrink-0 p-3 rounded-lg bg-primary/10 text-primary">
                  <FileText size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                      {pub.title}
                    </h3>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-muted-foreground hover:text-primary transition-colors duration-200"
                        aria-label="View publication"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mt-2">
                    {pub.authors}
                  </p>

                  <p className="text-sm mt-1">
                    <span className="text-primary/90">{pub.venue}</span>
                    <span className="text-muted-foreground"> - {pub.year}</span>
                  </p>

                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {pub.abstract}
                  </p>

                  {pub.milestones && (
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {pub.milestones.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
