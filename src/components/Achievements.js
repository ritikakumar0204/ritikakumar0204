import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaGithub, FaGraduationCap, FaCode } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "BU Sparks! Hackathon Winner",
      subtitle: "Best Impact Award",
      description: "Won the Best Impact Award at BU Sparks! Hackathon for creating ThinkFlow, an AI-powered mind map generator that enhances digital learning with accessibility features for inclusive education.",
      date: "2025",
      category: "Hackathon",
      color: "#ffd700"
    },
    {
      icon: <FaGraduationCap />,
      title: "Research Apprenticeship Scholarship",
      subtitle: "Semester-long Scholarship with Tuition Waived",
      description: "Awarded a prestigious research apprenticeship scholarship for Fall 2025 semester with full tuition waiver. Will be working on cutting-edge research projects in data science and AI.",
      date: "Fall 2025",
      category: "Scholarship",
      color: "#667eea"
    },
    {
      icon: <FaGithub />,
      title: "Azure PyRIT Contributor",
      subtitle: "Microsoft Open Source Project",
      description: "Contributed to Azure PyRIT (Python Risk Identification Tool), Microsoft's AI red teaming framework for identifying security risks in AI systems. Merged pull request enhancing the tool's capabilities for AI safety research.",
      date: "2024",
      category: "Open Source",
      color: "#764ba2",
      link: "https://github.com/Azure/PyRIT/pull/503"
    }
  ];

  return (
    <section className="achievements section" id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Achievements & Recognition</h2>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="achievement-icon" style={{ color: achievement.color }}>
                {achievement.icon}
              </div>

              <div className="achievement-content">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-category">{achievement.category}</span>
                </div>

                <p className="achievement-subtitle">{achievement.subtitle}</p>
                <p className="achievement-description">{achievement.description}</p>

                <div className="achievement-footer">
                  <span className="achievement-date">{achievement.date}</span>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                    >
                      <FaGithub /> View PR
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="achievements-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <div className="stat-icon">
              <FaTrophy />
            </div>
            <div className="stat-content">
              <span className="stat-number">1</span>
              <span className="stat-label">Hackathon Win</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <FaGraduationCap />
            </div>
            <div className="stat-content">
              <span className="stat-number">1</span>
              <span className="stat-label">Research Scholarship</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <FaCode />
            </div>
            <div className="stat-content">
              <span className="stat-number">1</span>
              <span className="stat-label">Azure Contribution</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;