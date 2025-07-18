import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
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

  return (
    <motion.div 
      className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-section">
        <motion.div 
          className="hero-content"
          variants={itemVariants}
        >
          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Reet Kumar Bind</span>
          </h1>
          <p className="hero-subtitle">
             Software Engineer
          </p>
          <p className="hero-description">
            Passionate about building innovative solutions and creating exceptional user experiences with modern technologies.
          </p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About Me
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src="/reet.JPG"
            alt="Reet Kumar Bind" 
            className="profile-pic" 
          />
          <div className="profile-glow"></div>
        </motion.div>
      </div>

      <motion.div 
        className="features-section"
        variants={itemVariants}
      >
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Full-Stack Development</h3>
            <p>Building end-to-end solutions with modern frameworks and technologies</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Performance Optimization</h3>
            <p>Creating fast, efficient, and scalable applications</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Crafting beautiful and intuitive user interfaces</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;