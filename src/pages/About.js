import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const skills = [
    { name: 'JavaScript', level: 90, icon: '🟨' },
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'MongoDB', level: 70, icon: '🍃' },
    { name: 'AWS', level: 65, icon: '☁️' }
  ];

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Appolo Computers.',
      period: 'July 2023 - Till Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.'
    },
    {
      title: 'Software Engineer',
      company: 'Tecnics Integration Technologies',
      period: 'Feb 2021 - June 2023',
      description: 'Developed and maintained multiple client projects, focusing on performance optimization and user experience.'
    },
    {
      title: 'IT Support',
      company: 'Samaprk Software Pvt. Ltd',
      period: 'Dec 2018 - Dec 2020',
      description: 'Built responsive web applications and collaborated with cross-functional teams to deliver high-quality solutions.'
    },

    {
      title: 'System Engineer',
      company: 'Foray Software Pvt. Ltd',
      period: 'Aug 2016 - Oct 2018',
      description: 'Built responsive web applications and collaborated with cross-functional teams to deliver high-quality solutions.'
    },
    {
      title: 'Operation Executive',
      company: 'Medi Assist TPA Pvt. Ltd',
      period: 'Feb 2016 - Aug 2016',
      description: 'Built responsive web applications and collaborated with cross-functional teams to deliver high-quality solutions.'
    },

    {
      title: 'Application Support',
      company: 'BoB ePrecure Pvt. Ltd',
      period: 'Feb 2015 - Aug 2015',
      description: 'Built responsive web applications and collaborated with cross-functional teams to deliver high-quality solutions.'
    }
  ];

  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="about-header" variants={itemVariants}>
        <h1>About Me</h1>
        <p className="about-intro">
          Passionate software engineer with 5+ years of experience in building scalable web applications
          and delivering innovative solutions that make a difference.

          
        </p>

      </motion.div>

      <div className="about-content">
        <motion.div className="about-section" variants={itemVariants}>
          <div className="section-card">
            <h2>My Story</h2>
            <p>
              I'm Reet Kumar Bind, a dedicated software engineer who believes in the power of technology
              to solve real-world problems. My journey began with a curiosity about how things work,
              which led me to pursue computer science and eventually specialize in full-stack development.
            </p>
            <p>
              Over the years, I've had the privilege of working with diverse teams and technologies,
              from startups to established companies. Each experience has shaped my approach to
              problem-solving and reinforced my commitment to writing clean, efficient code.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community through blogs and mentoring.
            </p>
          </div>
        </motion.div>

        <motion.div className="about-section" variants={itemVariants}>
          <div className="section-card">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="about-section" variants={itemVariants}>
          <div className="section-card">
            <h2>Professional Experience</h2>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-item"
                  variants={itemVariants}
                >
                  <div className="experience-marker"></div>
                  <div className="experience-content">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <span className="experience-period">{exp.period}</span>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="about-section" variants={itemVariants}>
          <div className="section-card">
            <h2>Let's Connect</h2>
            <p>
              I'm always excited to discuss new opportunities, collaborate on interesting projects,
              or simply chat about technology and innovation.
            </p>
            <div className="contact-links">
              <a href="mailto:reet.kumar.bind@example.com" className="contact-btn">
                📧 Email Me
              </a>
              <a href="https://linkedin.com/in/reetkumarbind" className="contact-btn">
                💼 LinkedIn
              </a>
              <a href="https://github.com/reetkumarbind" className="contact-btn">
                🐙 GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;