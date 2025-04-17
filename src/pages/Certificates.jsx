import React, { useState } from "react";
import { Row, Col, Modal, Image, Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const certificateList = [
  {
    src: "/EC Concil certificate.png",
    title: "EC Council Android Bug Bounty",
    desc: "EC Council Certified Security Analyst"
  },
  {
    src: "/SQL Injection Certificate.png",
    title: "EC Council SQL Injection",
    desc: "EC Council Certified Security Analyst"
  },
  {
    src: "/jwt.png",
    title: "LinkedIn Learning",
    desc: "User Authentication And Access Control With JWT"
  },
  {
    src: "/Adobe Scan 16 Aug 2024_1.jpg",
    title: "XIGI Tech Internship",
    desc: "Web Development Internship at XIGI Tech"
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Certificates = () => {
  const [showIdx, setShowIdx] = useState(null);

  return (
    <Container className="text-center my-5">
      <motion.h2
        className="fw-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My Certificates
      </motion.h2>

      <Row>
        {certificateList.map((cert, idx) => (
          <Col key={idx} xs={6} md={4} lg={3} className="mb-4">
            <motion.div
              className="certificate-card"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotate: 1,
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Image
                src={cert.src}
                alt={cert.title}
                fluid
                rounded
                onClick={() => setShowIdx(idx)}
                style={{
                  cursor: "pointer",
                  maxHeight: "200px",
                  objectFit: "cover",
                  transition: "0.3s"
                }}
              />
            </motion.div>
            <p className="mt-2 fw-medium">{cert.title}</p>
          </Col>
        ))}
      </Row>

      <AnimatePresence>
        {showIdx !== null && (
          <Modal
            show
            onHide={() => setShowIdx(null)}
            centered
            size="xl"
            dialogClassName="modal-dialog-centered"
            backdrop="static"
          >
            <Modal.Header closeButton>
              <Modal.Title>{certificateList[showIdx].title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <motion.div
                key={showIdx}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <Image
                  src={certificateList[showIdx].src}
                  fluid
                  style={{
                    maxHeight: "80vh",
                    width: "auto",
                    objectFit: "contain",
                    borderRadius: "10px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
                  }}
                />
                <p className="mt-3">{certificateList[showIdx].desc}</p>
              </motion.div>
            </Modal.Body>
          </Modal>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Certificates;
