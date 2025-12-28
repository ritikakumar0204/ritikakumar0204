import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Data Science Co-Op',
    company: 'Bevi',
    companyUrl: 'https://www.bevi.co/',
    period: 'Jan 2025 - Jun 2025 | Boston, MA',
    description: [
      'Developed and deployed a Python-based generative AI call-summarization system on Vertex AI + Cloud Run, exposed via Flask REST API to process 3K+ monthly calls and cut manual documentation time by 90%.',
      'Upgraded an enterprise LangChain RAG chatbot to Gemini 2.0 Flash, iterating on retrieval strategies, prompt orchestration, and system behavior from live feedback to lift perceived relevance by 30%.',
      'Automated CI/CD MLOps pipelines for LLM applications on GCP to enable seamless updates and 99.9% uptime.',
      'Built an XGBoost churn model with SHAP interpretability, improving early-risk visibility by 40%.',
    ],
    technologies: ['Python', 'Vertex AI', 'Cloud Run', 'LangChain', 'Gemini', 'GCP', 'Flask', 'XGBoost', 'SHAP'],
  },
  {
    title: 'Data Engineer',
    company: 'Tata Digital',
    companyUrl: 'https://www.tatadigital.com/',
    period: 'Aug 2022 - Aug 2023 | Mumbai, India',
    description: [
      'Engineered a Python ETL pipeline on Azure Databricks integrating Canvas LMS, Azure Blob, and PostgreSQL to automate ingestion, schema validation, and preprocessing, boosting processing efficiency by 50%.',
      'Delivered Power BI dashboards for student engagement and course completion KPIs, improving visibility of trends across teams.',
    ],
    technologies: ['Python', 'Azure Databricks', 'Azure Blob', 'PostgreSQL', 'Power BI', 'ETL'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 justify-center">
          <Briefcase className="text-primary" size={28} />
          <h2 className="text-2xl lg:text-3xl font-bold">Technical Experience</h2>
          <div className="flex-1 h-px bg-border/50 ml-4" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl w-full mx-auto space-y-8 text-left">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 card-hover"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 lg:gap-4 mb-4">
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {exp.title}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary/90 hover:text-primary transition-colors duration-200"
                    >
                      {exp.company}
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-2">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono text-primary/90 bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
