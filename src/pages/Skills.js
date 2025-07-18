import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'HTML5', level: 95, icon: '🧡' },
        { name: 'CSS3', level: 90, icon: '💙' },
        { name: 'Sass/SCSS', level: 80, icon: '💗' },
        { name: 'Tailwind CSS', level: 85, icon: '🌊' },
        { name: 'Vue.js', level: 70, icon: '💚' }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '🚀' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'Django', level: 70, icon: '🎯' },
        { name: 'PHP', level: 65, icon: '🐘' },
        { name: 'Java', level: 70, icon: '☕' },
        { name: 'C#', level: 60, icon: '🔵' },
        { name: 'GraphQL', level: 75, icon: '🔗' },
        { name: "JavaScript", level: 60, icon: "🟨" },
        
      ]
    },
    {
      title: 'Database & Storage',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'PostgreSQL', level: 75, icon: '🐘' },
        { name: 'MySQL', level: 70, icon: '🐬' },
        { name: 'Redis', level: 65, icon: '🔴' },
        { name: 'Firebase', level: 75, icon: '🔥' },
        { name: 'SQLite', level: 70, icon: '💾' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 75, icon: '🟠' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'Kubernetes', level: 60, icon: '⚓' },
        { name: 'CI/CD', level: 75, icon: '🔄' },
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'Linux', level: 80, icon: '🐧' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'VS Code', level: 95, icon: '💙' },
        { name: 'Webpack', level: 75, icon: '📦' },
        { name: 'Jest', level: 80, icon: '🃏' },
        { name: 'Postman', level: 85, icon: '📮' },
        { name: 'Figma', level: 70, icon: '🎨' },
        { name: 'Jira', level: 75, icon: '📋' }
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: '🏆'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022',
      icon: '⚛️'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      year: '2021',
      icon: '🟨'
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'Coursera',
      year: '2020',
      icon: '🎓'
    }
  ];

  return (
    <motion.div 
      className="skills-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="skills-header" variants={itemVariants}>
        <h1>Technical Skills</h1>
        <p className="skills-intro">
          A comprehensive overview of my technical expertise and proficiency levels 
          across various technologies and tools.
        </p>
      </motion.div>

      <div className="skills-content">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.title}
            className="skill-category"
            variants={itemVariants}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.title}</h2>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skill.name}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <div className="skill-info">
                      <h3>{skill.name}</h3>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 1,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div className="certifications-section" variants={itemVariants}>
          <h2>Certifications & Achievements</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.name}
                className="certification-card"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-info">
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="learning-section" variants={itemVariants}>
          <div className="learning-card">
            <h2>Currently Learning</h2>
            <div className="learning-items">
              <div className="learning-item">
                <span className="learning-icon">🤖</span>
                <span>Machine Learning & AI</span>
              </div>
              <div className="learning-item">
                <span className="learning-icon">📱</span>
                <span>React Native</span>
              </div>
              <div className="learning-item">
                <span className="learning-icon">🦀</span>
                <span>Rust Programming</span>
              </div>
              <div className="learning-item">
                <span className="learning-icon">🔗</span>
                <span>Blockchain Development</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;