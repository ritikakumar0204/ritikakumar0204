import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form service like Formspree, Netlify Forms, etc.
  };

  return (
    <section className="contact section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Let's Connect</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <motion.div
              className="contact-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Get In Touch</h3>
              <p>
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just chat about data science and AI. Feel free to reach out!
              </p>
              <p>
                Currently available for full-time opportunities starting May 2026.
              </p>
            </motion.div>

            <motion.div
              className="contact-details"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:kumar.riti@northeastern.edu" className="contact-value">
                    kumar.riti@northeastern.edu
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <span className="contact-label">Phone</span>
                  <a href="tel:857-753-9567" className="contact-value">
                    857-753-9567
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Boston, USA</span>
                </div>
              </div>

              <div className="contact-item">
                <FaDownload className="contact-icon" />
                <div>
                  <span className="contact-label">Availability</span>
                  <span className="contact-value">May 2026</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="https://linkedin.com/in/ritika-kumar-98a393191/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/ritikakumar0204" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link github"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;