import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Teaching Assistant",
      company: "Khoury College of Computer Sciences, Northeastern University",
      location: "Boston, USA",
      duration: "Sep 2024 – Dec 2024, Jan 2025 – Present",
      description: [
        "Served as Graduate Teaching Assistant for two separate terms, demonstrating consistent academic excellence and teaching capability.",
        "Mentoring and conducting office hours with students online and assisting with grading assignments.",
        "Supporting course instruction and providing academic guidance to undergraduate and graduate students.",
        "Facilitating learning through one-on-one tutoring sessions and group discussions."
      ],
      current: true,
      technologies: ["Teaching", "Mentoring", "Academic Support"]
    },
    {
      title: "Data Science Co-op",
      company: "Bevi",
      location: "Boston, USA",
      duration: "Jan. 2025 – June 2025",
      description: [
        "Designed and deployed a real-time AI-powered summarization pipeline processing 3000+ monthly customer service calls using AssemblyAI and Gemini 2.0 Flash via Vertex AI and Cloud Run, reducing manual documentation time.",
        "Upgraded an internal LangChain-based RAG chatbot from Gemini 1.5 to 2.0 Flash, improved multi-step agent workflows and optimized prompt chains. Integrated a cross-encoder model for improved document reranking.",
        "Built an XGBoost-based churn prediction model to identify units at high risk of churn and analyzed key factors impacting customer retention."
      ],
      technologies: ["Python", "AssemblyAI", "Gemini 2.0", "Vertex AI", "Cloud Run", "LangChain", "XGBoost"]
    },
    {
      title: "Summer Intern",
      company: "C3i Hub",
      location: "Kanpur, India (Remote)",
      duration: "May 2024 – July 2024",
      description: [
        "Engineered a web scraping system using Python and BeautifulSoup to extract Tactics, Techniques, and Procedures (TTPs) from the MITRE ATT&CK framework, reducing manual data collection time by 60%.",
        "Leveraged BERT for NLP tasks to categorize TTPs from scraped data, significantly enhancing threat intelligence capabilities.",
        "Built a robust extraction pipeline that streamlined TTP identification, contributing to enhanced cybersecurity threat intelligence measures."
      ],
      technologies: ["Python", "BeautifulSoup", "BERT", "NLP", "Web Scraping", "Cybersecurity", "MITRE ATT&CK"]
    },
    {
      title: "Data Engineer - EdTech",
      company: "Tata Digital Pvt. Ltd.",
      location: "Mumbai, India",
      duration: "July 2022 – July 2023",
      description: [
        "Increased course completion rate by 40% by developing a personalized learning insights ETL pipeline on an education platform; Automated data extraction by engineering a Python-based system on Azure Databricks.",
        "Integrated Canvas LMS, Azure Blob Storage, and PostgreSQL using Canvas REST APIs and Azure Functions, resulting in a 50% improvement in data processing efficiency and enabling seamless data flow across platforms.",
        "Created Power BI dashboards to showcase KPIs of student engagement to cross-functional teams, improving data-driven decision-making and increasing the visibility of student performance trends by 60%."
      ],
      technologies: ["Python", "Azure Databricks", "Canvas LMS", "Azure Blob Storage", "PostgreSQL", "Power BI", "Azure Functions"]
    },
    {
      title: "Summer Intern",
      company: "Concentrix",
      location: "Mumbai, India",
      duration: "May 2021 – July 2021",
      description: [
        " Researched on deep learning, convolutional neural networks and computer vision for anomaly detection in CCTV surveillance videos.",
        "Performed data pre-processing and feature extraction on the UCF- crime dataset using OpenCV − Modelled a deep learning CNN model for classification of anomaly in CCTV surveillance videos using TensorFlow 2.0. Successfully achieved the accuracy of 86% with limited data.",
        "Built a GUI application for the deployment of anomaly classification model− Researched on deep learning, convolutional neural networks and computer vision for anomaly detection in CCTV surveillance video."
      ],
      technologies: ["Python", "CNN", "OpenCV", "Tkinter", "Deep Learning", "TensorFlow 2.0"]
    }

  ];

  return (
    <section className="experience section" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`experience-item ${exp.current ? 'current' : ''}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experience-dot">
                <FaBriefcase />
              </div>

              <div className="experience-content card">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="company">{exp.company}</span>
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                    <span className="duration">
                      <FaCalendarAlt /> {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="experience-description">
                  {Array.isArray(exp.description) ? (
                    <ul>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>

                {exp.technologies && (
                  <div className="experience-tech">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;