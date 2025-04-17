import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-4">
      <p> My Portfolio | Join With Me</p>

      {/* Social Media & Contact Links */}
      <motion.div className="mt-2 d-flex justify-content-center gap-4">
        <motion.a 
          href="https://github.com/harrishragavan" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-light fs-4"
          whileHover={{ scale: 1.2, color: "#ffcc00" }}
        >
          <FaGithub />
        </motion.a>
        
        <motion.a 
          href="https://www.linkedin.com/in/harrish-ragavan/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-light fs-4"
          whileHover={{ scale: 1.2, color: "#0a66c2" }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a 
          href="mailto:harrishragavan155@gmail.com" 
          className="text-light fs-4"
          whileHover={{ scale: 1.2, color: "#EA4335" }}
        >
          <FaEnvelope />
        </motion.a>

        {/* Contact Number */}
        <motion.a 
          href="tel:+919047438173" // Replace with your actual phone number
          className="text-light fs-4"
          whileHover={{ scale: 1.2, color: "#34A853" }}
        >
          <FaWhatsapp />
        </motion.a>
      </motion.div>

      {/* Contact Number Display */}
      <p className="mt-2">📞 +91 9047438173</p>
    </footer>
  );
};

export default Footer;
