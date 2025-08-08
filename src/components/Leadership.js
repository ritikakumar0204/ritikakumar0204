import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './Leadership.css';

const Leadership = () => {
  const positions = [
    {
      title: "Chair",
      organization: "NU Boston ACM-W Student Chapter",
      location: "Boston, USA",
      duration: "Aug. 2024 – Present",
      description: "Initiated, led, and organized comprehensive chapter activities to advance diversity in computing through strategic events and community outreach programs. Spearheaded initiatives to create an inclusive environment for women in technology, fostering professional development and networking opportunities.",
      responsibilities: [
        "Led strategic planning and execution of chapter initiatives to promote women in computing",
        "Organized seminars with academic and industry professionals",
        "Collaborated with university administration and external partners to expand program reach",
        "Mentored chapter members and facilitated career development opportunities"
      ],
      current: true,
      icon: "👑"
    },
    {
      title: "Director of Events",
      organization: "Khoury SHEROS of Color",
      location: "Boston, USA", 
      duration: "Dec. 2023 – Present",
      description: "Planned and executed impactful events to empower women of color in STEM through comprehensive networking opportunities, skill-building workshops, and structured mentorship programs. Focused on creating safe spaces for underrepresented groups in technology.",
      responsibilities: [
        "Designed and coordinated events targeting women of color in STEM fields",
        "Established mentorship programs connecting students with industry professionals",
        "Managed event logistics, budgets, and vendor relationships for large-scale programs"
      ],
      current: true,
      icon: "🌟"
    }
  ];

  return (
    <section className="leadership section" id="leadership">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Leadership Positions</h2>
        
        <div className="leadership-timeline">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              className={`leadership-item ${position.current ? 'current' : ''}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="leadership-dot">
                <FaUsers />
              </div>
              
              <div className="leadership-content card">
                <div className="leadership-header">
                  <div className="position-info">
                    <h3 className="leadership-title">
                      <span className="position-icon">{position.icon}</span>
                      {position.title}
                    </h3>
                    <div className="leadership-meta">
                      <span className="organization">{position.organization}</span>
                      <span className="location">
                        <FaMapMarkerAlt /> {position.location}
                      </span>
                      <span className="duration">
                        <FaCalendarAlt /> {position.duration}
                      </span>
                    </div>
                  </div>
                  {position.current && (
                    <div className="current-badge">
                      <FaStar /> Current
                    </div>
                  )}
                </div>
                
                <div className="leadership-description">
                  <p>{position.description}</p>
                </div>
                
                <div className="leadership-responsibilities">
                  <h4>Key Responsibilities & Achievements:</h4>
                  <ul>
                    {position.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Leadership;