import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
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

  const projectCategories = [
    {
      title: 'Web Applications',
      icon: '🌐',
      projects: [
        {
          name: 'E-Commerce Platform',
          description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, inventory management, and admin dashboard.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
          status: 'Completed',
          link: 'https://github.com/reetkumarbind/ecommerce-platform',
          image: '🛒',
          highlights: ['Payment Integration', 'Real-time Inventory', 'Admin Dashboard']
        },
        {
          name: 'Task Management System',
          description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.',
          technologies: ['React', 'Express.js', 'PostgreSQL', 'Socket.io', 'Redux'],
          status: 'Completed',
          link: 'https://github.com/reetkumarbind/task-manager',
          image: '📋',
          highlights: ['Real-time Updates', 'Team Collaboration', 'Advanced Analytics']
        },
        {
          name: 'Social Media Dashboard',
          description: 'A comprehensive social media management platform that allows users to schedule posts, analyze engagement, and manage multiple social accounts.',
          technologies: ['Vue.js', 'Python', 'Django', 'Redis', 'Chart.js'],
          status: 'Completed',
          link: 'https://github.com/reetkumarbind/social-dashboard',
          image: '📱',
          highlights: ['Multi-platform Support', 'Analytics Dashboard', 'Post Scheduling']
        }
      ]
    },
    {
      title: 'Mobile Applications',
      icon: '📱',
      projects: [
        {
          name: 'Fitness Tracker App',
          description: 'A React Native mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
          technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Expo'],
          status: 'In Progress',
          link: 'https://github.com/reetkumarbind/fitness-tracker',
          image: '💪',
          highlights: ['Health Tracking', 'Personalized Plans', 'Progress Analytics']
        },
        {
          name: 'Weather Forecast App',
          description: 'A beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts.',
          technologies: ['React Native', 'OpenWeather API', 'Maps SDK', 'AsyncStorage'],
          status: 'Completed',
          link: 'https://github.com/reetkumarbind/weather-app',
          image: '🌤️',
          highlights: ['Location-based', 'Interactive Maps', 'Weather Alerts']
        }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      projects: [
        {
          name: 'Sentiment Analysis Tool',
          description: 'An AI-powered tool that analyzes text sentiment using natural language processing and machine learning algorithms.',
          technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'scikit-learn'],
          status: 'Completed',
          link: 'https://github.com/reetkumarbind/sentiment-analyzer',
          image: '🧠',
          highlights: ['NLP Processing', 'Real-time Analysis', 'API Integration']
        },
        {
          name: 'Image Recognition System',
          description: 'A computer vision application that can identify and classify objects in images using deep learning models.',
          technologies: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'NumPy'],
          status: 'In Progress',
          link: 'https://github.com/reetkumarbind/image-recognition',
          image: '👁️',
          highlights: ['Object Detection', 'Deep Learning', 'Real-time Processing']
        }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '⚙️',
      projects: [
        {
          name: 'CI/CD Pipeline Automation',
          description: 'Automated deployment pipeline using Docker, Jenkins, and AWS for seamless application deployment and monitoring.',
          technologies: ['Docker', 'Jenkins', 'AWS', 'Kubernetes', 'Terraform'],
          status: 'Completed',
          link: 'https://github.com/reetkumarbind/cicd-pipeline',
          image: '🚀',
          highlights: ['Automated Deployment', 'Container Orchestration', 'Infrastructure as Code']
        },
        {
          name: 'Monitoring Dashboard',
          description: 'A comprehensive monitoring solution for tracking application performance, server metrics, and user analytics.',
          technologies: ['Grafana', 'Prometheus', 'Node.js', 'InfluxDB', 'Docker'],
          status: 'Completed',
          link: 'https://github.com/reetkumarbind/monitoring-dashboard',
          image: '📊',
          highlights: ['Real-time Monitoring', 'Custom Alerts', 'Performance Metrics']
        }
      ]
    }
  ];

  // Get featured projects from existing categories instead of duplicating
  const getFeaturedProjects = () => {
    const featured = [];
    projectCategories.forEach(category => {
      // Pick the first project from each category as featured
      if (category.projects.length > 0) {
        featured.push(category.projects[0]);
      }
    });
    return featured.slice(0, 3); // Limit to 3 featured projects
  };

  const featuredProjects = getFeaturedProjects();

  return (
    <motion.div
      className="projects-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="projects-header" variants={itemVariants}>
        <h1>My Projects</h1>
        <p className="projects-intro">
          A showcase of my work spanning web applications, mobile apps, AI/ML projects, and DevOps solutions.
          Each project represents a unique challenge and learning opportunity.
        </p>
      </motion.div>

      <motion.div className="featured-section" variants={itemVariants}>
        <h2>Featured Projects</h2>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="featured-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <span className={`status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="projects-content">
        {projectCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="project-category"
            variants={itemVariants}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.title}</h2>
            </div>
            <div className="projects-grid">
              {category.projects.map((project, projectIndex) => (
                <motion.div
                  key={project.name}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="project-header">
                    <div className="project-image">{project.image}</div>
                    <div className="project-info">
                      <h3>{project.name}</h3>
                      <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>

                  <div className="project-highlights">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                    <button className="btn btn-secondary">
                      Live Demo
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="projects-cta" variants={itemVariants}>
        <div className="cta-content">
          <h2>Interested in Collaborating?</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Let's build something amazing together!
          </p>
          <div className="cta-buttons">
            <a href="/about" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="https://github.com/reetkumarbind" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              View GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
