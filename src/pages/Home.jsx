import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.section 
      className="container text-center my-5"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image */}
      <motion.img 
        src="/img.png"  // Make sure this path is correct and image is inside the public folder
        alt="Harrish Ragavan J"
        className="rounded-circle shadow-lg mb-4"
        width="200"
        height="200"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <h1 className="display-4 fw-bold">
        Hi, I'm <span className="text-primary">Harrish Ragavan J</span> 👋
      </h1>
      <p className="lead">Web Developer | React Enthusiast | Cybersecurity Specialist</p>
      <p className="fw-medium">
        I’m a Full-Stack Developer passionate about building scalable web applications and ensuring security in digital systems. 
        With expertise in the MERN stack and a strong interest in cybersecurity, I focus on creating efficient, secure, and user-friendly solutions. 
        Always eager to learn and take on new challenges.
      </p>

      <motion.div whileHover={{ scale: 1.1 }}>
        <Link to="/projects" className="btn btn-primary btn-lg mt-3">
          View My Work
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Home;
