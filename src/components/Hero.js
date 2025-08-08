import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        Hi, I'm Ritika Kumar
                        {/* <span className="gradient-text">Ritika Kumar</span> */}
                    </h1>
                    <h2 className="hero-subtitle">Data Scientist & AI Engineer</h2>
                    <p className="hero-description">
                        Masters student at Northeastern University passionate about leveraging AI and machine learning
                        to solve real-world problems. Currently working as a Graduate Teaching Assistant and
                        building innovative solutions in data science.
                    </p>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">3.9</span>
                            <span className="stat-label">GPA</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">1.5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn-primary">Get In Touch</a>
                        <a href="#projects" className="btn-secondary">View My Work</a>
                    </div>

                    <div className="hero-social">
                        <a href="https://github.com/ritikakumar0204" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/ritika-kumar-98a393191/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:kumar.riti@northeastern.edu">
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="floating-elements">
                        <div className="floating-element python">Python</div>
                        <div className="floating-element ml">Machine Learning</div>
                        <div className="floating-element ai">AI</div>
                        <div className="floating-element data">Data Science</div>
                        
                        <motion.div 
                            className="profile-image"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <img src="/profile.jpg" alt="Ritika Kumar" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;