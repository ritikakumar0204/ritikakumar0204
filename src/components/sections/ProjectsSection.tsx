import { FolderGit2, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Vani: AI Research Companion',
    description:
      'Agentic RAG platform built with LangGraph, Vertex AI, and FAISS for deep research synthesis. Specialized Researcher/Reviewer/Synthesizer agents produce citation-backed academic reports and real-time thesis defense feedback.',
    technologies: ['LangGraph', 'FAISS', 'Vertex AI', 'GCP', 'RAG', 'Python'],
    github: 'https://github.com/ritikakumar0204/hack-nation-ai-2025-RS',
    featured: true,
  },
  {
    title: 'ThinkFlow (BU Sparks! Best Impact)',
    description:
      'Multi-LLM workflow prototyped in 48 hours, integrating Ollama, Mistral, and DeepSeek-R1 to generate structured mind-map JSON. Logged 1K+ generations in MongoDB and standardized prompting to cut malformed outputs.',
    technologies: ['LLM', 'Ollama', 'Mistral', 'DeepSeek-R1', 'MongoDB', 'Node.js'],
    github: 'https://github.com/ritikakumar0204/ThinkFlow',
    demo: 'https://devpost.com/software/thinkflow',
    featured: true,
  },
  {
    title: 'Stock Analytics Platform',
    description:
      'End-to-end financial analytics and forecasting pipeline using Yahoo Finance/Alpha Vantage, BigQuery-backed SQL schema, batch + streaming ingestion, and a Streamlit dashboard with eight analytical reports.',
    technologies: ['Python', 'SQL', 'Streamlit', 'Pandas', 'BigQuery', 'PostgreSQL', 'APIs', 'Yahoo Finance', 'Alpha Vantage'],
    github: 'https://github.com/ritikakumar0204/stock-analytics-platform',
    featured: true,
  },
  {
    title: 'Visual Question-Answering for People with Visual Impairment',
    description:
      'BLIP-based VQA system fine-tuned on the VizWiz-VQA dataset (trained on NVIDIA V100s), improving accuracy and F1 by 3% over baseline to better assist users with visual impairments.',
    technologies: ['BLIP', 'PyTorch', 'Computer Vision', 'VizWiz', 'V100'],
    github: 'https://github.com/ritikakumar0204/Visual-Question-Answering-on-Vizwiz-Dataset',
    featured: true,
  },
  {
    title: 'Exploring Cross-Lingual Capabilities for Indian Language Translation',
    description:
      'Fine-tuned multilingual translation models (Opus-MT, mBART50, LLaMA-2) with PEFT/LoRA for low-resource Indian languages; benchmarked 10 models on IN22-Gen achieving BLEU 35.93 (+15% over baselines).',
    technologies: ['PEFT', 'LoRA', 'mBART50', 'LLaMA-2', 'Opus-MT', 'Translation'],
    github: 'https://github.com/Varsha-Ranganathan/CrossLingual-Translation-Models',
    featured: false,
  },
  {
    title: 'Abnormality Detection in Musculoskeletal Radiographs (MURA)',
    description:
      'Benchmarked CNN, ResNet-50, and DenseNet-121 on 14K+ radiographs across 7 joint classes; achieved up to 84.7% test accuracy (Humerus) and 83% (Wrist), outperforming published baselines by 11%.',
    technologies: ['PyTorch', 'DenseNet-121', 'ResNet-50', 'CNN', 'Medical Imaging'],
    github: 'https://github.com/nohrg/DS-5220-Final-Project',
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-deep/10 to-transparent pointer-events-none" />

      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-6 relative flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 justify-center">
          <FolderGit2 className="text-primary" size={28} />
          <h2 className="text-2xl lg:text-3xl font-bold">Projects</h2>
          <div className="flex-1 h-px bg-border/50 ml-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full mx-auto text-left">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 card-hover glow-effect"
            >
              <div className="flex items-start justify-between mb-4">
                <FolderGit2 className="text-primary" size={40} />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      aria-label="Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg lg:text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-muted-foreground">
                    {tech}
                    {i < project.technologies.length - 1 && (
                      <span className="ml-2 text-border">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
