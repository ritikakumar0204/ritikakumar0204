import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const containerRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const wheelTimeoutRef = useRef(null);
  const accumulatedDeltaRef = useRef(0);
  const [direction, setDirection] = useState('next'); // Track animation direction

  const projects = [
    {
      title: "ThinkFlow",
      subtitle: "BU Sparks! Hackathon Winner - Best Impact",
      description: "Created a web-app to enhance digital learning using AI-powered mind map generator. Used Deepseek-R1 through Ollama on local system to generate mind map JSON objects of user topics. Integrated accessibility features like OpenDyslexic fonts and text-to-speech in the React app for inclusivity.",
      technologies: ["Ollama", "Mistral", "Deepseek-R1", "Streamlit", "React.js", "MongoDB", "PyMongo"],
      featured: true,
      github: "https://github.com/ritikakumar0204/ThinkFlow",
      devpost: "https://devpost.com/software/thinkflow"
    },
    {
      title: "Visual Question-Answering for People with Visual Impairment",
      description: "Developed a Visual Question Answering (VQA) system for visually impaired users using the VizWiz-VQA dataset using PyTorch and HuggingFace Transformers to answer natural language questions about real-world images. Fine-tuned the BLIP model on HPC Discovery cluster using NVIDIA V100 32GB GPUs; Increased accuracy and F-1 score by 3% as compared to baseline model.",
      technologies: ["BLIP", "Computer Vision", "PyTorch", "Image Processing", "Fine-tuning", "HuggingFace", "NVIDIA V100"],
      github: "https://github.com/ritikakumar0204/Visual-Question-Answering-on-Vizwiz-Dataset"
    },
    {
      title: "Cross-Lingual Translation for Indian Languages",
      description: "Implemented fine-tuning and PEFT technique, LoRA on models (Opus-mt, mBART50, Llama-2) to improve cross-lingual generalization for Indian language translation. Evaluated 10 models with BLEU scores; the best model achieved 35.93, outperforming mBART50 and M2M100 by 15% on IN22 Gen and Tatoeba Challenge benchmarks.",
      technologies: ["PyTorch", "Huggingface", "Transformers", "PEFT", "LoRA", "LLM", "Google Colab", "Kaggle"],
      github: "https://github.com/Varsha-Ranganathan/CrossLingual-Translation-Models"
    },
    {
      title: "AI and Human Generated Text Detection",
      subtitle: "Using LLM Text Embeddings",
      description: "Performed EDA on merged dataset of AI vs Human text and analyzed embedding from GPT-3, Instructor-XL, GPT-2, BERT-uncased; identified optimal embedding for prediction increasing accuracy by 10%. Extracted embedding using GPT-2 on HPC cluster; trained models like XGBoost, LightGBM, SVM, AdaBoost. Created a voting ensemble model; achieved 99% accuracy on unseen data.",
      technologies: ["Python", "NLTK", "XGBoost", "AdaBoost", "LightGBM", "GPT-2", "Instructor-XL", "BERT-Base-Uncased"],
      github: "https://github.com/ritikakumar0204/DS5010-Final-Project"
    }
  ];

  // Removed auto-scroll functionality

  const goToProject = (index) => {
    if (isNavigating) return;
    setIsNavigating(true);
    // Determine direction based on current vs target index
    setDirection(index > currentProject ? 'next' : 'prev');
    setCurrentProject(index);
    setTimeout(() => setIsNavigating(false), 500);
  };

  const nextProject = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    setDirection('next'); // Set direction for animation
    setCurrentProject((prev) => {
      const next = (prev + 1) % projects.length;
      console.log(`Next: ${prev} -> ${next}`); // Debug log
      return next;
    });
    setTimeout(() => setIsNavigating(false), 500);
  };

  const prevProject = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    setDirection('prev'); // Set direction for animation
    setCurrentProject((prev) => {
      const next = (prev - 1 + projects.length) % projects.length;
      console.log(`Prev: ${prev} -> ${next}`); // Debug log
      return next;
    });
    setTimeout(() => setIsNavigating(false), 500);
  };

  // Swipe detection
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextProject();
    } else if (isRightSwipe) {
      prevProject();
    }
  };

  // Smooth wheel/trackpad detection with debouncing
  const handleWheel = (e) => {
    e.preventDefault();

    if (isNavigating) return;

    // Accumulate delta values for smoother detection
    accumulatedDeltaRef.current += e.deltaX;

    // Clear existing timeout
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }

    // Set a timeout to process the accumulated delta
    wheelTimeoutRef.current = setTimeout(() => {
      const totalDelta = accumulatedDeltaRef.current;
      const threshold = 15; // Lower threshold for higher sensitivity

      if (Math.abs(totalDelta) > threshold) {
        if (totalDelta > 0) {
          nextProject(); // Swipe left → next project
        } else {
          prevProject(); // Swipe right → previous project
        }
      }

      // Reset accumulated delta
      accumulatedDeltaRef.current = 0;
    }, 30); // 50ms debounce delay for faster response
  };

  // Add wheel event listener
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        container.removeEventListener('wheel', handleWheel);
        // Clean up timeouts
        if (wheelTimeoutRef.current) {
          clearTimeout(wheelTimeoutRef.current);
        }
      };
    }
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="projects section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Projects</h2>

        <div
          className="projects-carousel-container"
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="project-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                className={`project-card card ${projects[currentProject].featured ? 'featured' : ''}`}
                initial={{
                  opacity: 0,
                  x: direction === 'prev' ? -300 : 300
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: direction === 'prev' ? 300 : -300
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {projects[currentProject].featured && (
                  <div className="featured-badge">
                    <FaTrophy /> Featured Project
                  </div>
                )}

                {projects[currentProject].award && (
                  <div className="award-badge">
                    🏆 {projects[currentProject].award}
                  </div>
                )}

                <div className="project-content">
                  <h3 className="project-title">{projects[currentProject].title}</h3>
                  {projects[currentProject].subtitle && (
                    <p className="project-subtitle">{projects[currentProject].subtitle}</p>
                  )}

                  <p className="project-description">{projects[currentProject].description}</p>

                  <div className="project-tech">
                    {projects[currentProject].technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {projects[currentProject].github && (
                      <a href={projects[currentProject].github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Code
                      </a>
                    )}
                    {projects[currentProject].devpost && (
                      <a href={projects[currentProject].devpost} className="project-link" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Devpost
                      </a>
                    )}
                    {projects[currentProject].demo && (
                      <a href={projects[currentProject].demo} className="project-link" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button className="carousel-nav prev" onClick={prevProject}>
            ‹
          </button>
          <button className="carousel-nav next" onClick={nextProject}>
            ›
          </button>

          {/* Dot Indicators */}
          <div className="dot-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;