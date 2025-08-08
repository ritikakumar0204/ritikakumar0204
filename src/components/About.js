import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = [
    { category: 'Languages', items: ['Python', 'SQL', 'Java', 'JavaScript', 'CSS', 'HTML'] },
    { category: 'Data Science', items: ['Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'NumPy', 'NLTK', 'Spacy', 'Transformers'] },
    { category: 'ML/AI Frameworks', items: ['TensorFlow 2.0', 'PyTorch', 'HuggingFace'] },
    { category: 'Tools & Platforms', items: ['Databricks', 'MongoDB', 'Google Cloud Platform', 'Git/GitHub', 'Snowflake', 'Power BI', 'Tableau'] }
  ];

  return (
    <section className="about section" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Data Scientist and AI Engineer currently pursuing my Master's in Data Science
              at Northeastern University with a 3.9 GPA. My journey began with a Bachelor's in Electrical
              and Electronics Engineering from Visvesvaraya National Institute of Technology, India, where I discovered my love for data and technology.
            </p>
            <p>
              With over 1.5 years of professional experience, I've worked on cutting-edge projects involving
              AI-powered solutions, machine learning models, and data engineering pipelines. I'm particularly
              interested in Natural Language Processing, Computer Vision, and building scalable AI systems
              that make a real impact.
            </p>
            <p>
              Beyond academics, I'm an active leader in student organizations that support women and underrepresented
              groups in STEM, helping create inclusive spaces for growth and collaboration. I'm also excited to begin
              a research apprenticeship next semester, where I’ll dive deeper into real-world applications of generative
              models in the healthcare industry.
            </p>
          </div>

          <div className="education-timeline">
            <h3>Education</h3>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Master of Science in Data Science</h4>
                <p className="institution">Northeastern University, Boston</p>
                <p className="duration">Sept 2023 – May 2026</p>
                <p className="gpa">GPA: 3.9/4.0</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Bachelor of Technology</h4>
                <p className="institution">VNIT Nagpur, India</p>
                <p className="duration">Aug 2018 – May 2022</p>
                <p className="gpa">CGPA: 8.0/10.0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="skill-group card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="cert-item">
            <a
              href="https://www.credly.com/badges/a5b4ec3b-a0c4-4821-a25d-7412fb4bf22a/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-badge"
            >
              AWS AI Practitioner
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;