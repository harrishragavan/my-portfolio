import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <motion.div 
      className="container my-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-center fw-bold">About Me</h2>
      
      {/* Profile Section */}
      <div className="row align-items-center mt-4">
        <div className="col-md-4 text-center">
          <motion.img 
            src="/img.png"  // Replace with your image path
            alt="Harrish Ragavan J"
            className="rounded-circle shadow-lg"
            width="200"
            height="200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Info Section */}
        <motion.div 
          className="col-md-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="lead">
          Hi, I'm <strong>Harrish Ragavan J</strong>, a Full-Stack Web Developer and Cybersecurity Enthusiast.  
          With a passion for creating modern web applications and securing digital platforms, I specialize in React.js, Node.js, MongoDB, Express.js, MySQL and cybersecurity techniques like Web-Application Pentesting , Malware analysis, Linux.
          </p>

          <h5 className="fw-bold mt-3">💡 Skills & Technologies:</h5>
          <ul className="list-unstyled">
            <li><strong>🖥️ Frontend:</strong> React.js, Bootstrap, JavaScript</li>
            <li><strong>🛠️ Backend:</strong> Node.js, Express.js</li>
            <li><strong>💾 Database:</strong> MongoDB, MySQL</li>
            <li><strong>🔐 Cybersecurity:</strong> Ethical Hacking, Penetration Testing, Security Monitoring</li>
            <li><strong>🌐 Network Security:</strong> Firewalls, VPN, IDS/IPS</li>
            <li><strong>👩🏻‍💻 Programming Languages:</strong> Java, Python, Javascript</li>
            <li><strong>📌 Other:</strong> AWS, Linux, GitHub</li>
          </ul>

          <h5 className="fw-bold mt-3">🎓 Education:</h5>
          <p><strong>Bachelor's Degree</strong> Information Technology (2022-2026)</p>

          <h5 className="fw-bold mt-3">🎯 Hobbies & Interests:</h5>
          <p>🎵 Music Production | 🛡️ Bug Hunting | 🚀 Online Tools Surfing</p>

          <h5 className="fw-bold mt-3">🌍 Languages Known:</h5>
          <p>Tamil | English | Kannada</p>

          {/* Download CV Button */}
          <motion.a 
            href="/cv.pdf"  // Replace with the actual CV file path
            download="Harrish_Ragavan_CV.pdf"
            className="btn btn-primary btn-lg mt-4 d-inline-flex align-items-center gap-2"
            whileHover={{ scale: 1.1 }}
          >
            <FaDownload /> Download My CV
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
