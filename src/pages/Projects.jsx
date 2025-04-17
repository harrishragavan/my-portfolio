import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectList = [
  {
    title: "🌐 Portfolio Website",
    description: "A personal portfolio built using React, Bootstrap, and Framer Motion for smooth animations.",
    github: "https://github.com/harrishragavan/my-portfolio.git",
    demo: "",  
  },
  {
    title: "🔒 Secure Login System",
    description: "A MERN stack authentication system with JWT, bcrypt for password hashing, and role-based access control.",
    github: "https://github.com/harrishragavan/harrishragavan-E-Book-Library-Using-MERN-Stack.git",
    demo: "",
  },
  {
    title: "📱 E-Book Library",
    description: "An E-Book Library Management Using MERN STACK For online Book Reader .",
    github: "https://github.com/harrishragavan/harrishragavan-E-Book-Library-Using-MERN-Stack.git",
    demo: "",
  },
  {
    title: "🛡️ Phishing Detection API",
    description: "An AI-powered API that analyzes URLs and detects phishing attempts in real-time using machine learning.",
    github: "https://github.com/harrishragavan/Phishing-Detection-mini-project.git",
    
  },
  {
    title: "⚙️ Parental Control Chrome Extension",
    description: "A Chrome extension that helps parents monitor and control their child’s online activity with features like URL blocking, search history tracking, content filtering, and usage time limits.",
    github: "https://github.com/harrishragavan/Parental--control-extension.git",
    
  },
];

const Projects = () => {
  return (
    <motion.div 
      className="container my-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Heading */}
      <motion.h2 
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="row">
        {projectList.map((project, index) => (
          <motion.div 
            className="col-md-6 col-lg-4"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.div 
              className="card shadow-sm p-3 mb-4 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card-body">
                {/* Animated Project Title */}
                <motion.h5 
                  className="card-title"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {project.title}
                </motion.h5>

                <p className="card-text">{project.description}</p>

                {/* Buttons for GitHub & Live Demo */}
                <div className="d-flex justify-content-center gap-3">
                  {project.github && (
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-dark"
                      whileHover={{ scale: 1.1, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> GitHub
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary"
                      whileHover={{ scale: 1.1, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
