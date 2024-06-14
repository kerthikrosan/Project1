import React, { useEffect } from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
const pVariants = {
  hover: {
    scale: 1.3,
    originX: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const iconVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  hover: {
    scale: 1.1,
    filter: "drop-shadow(#a020f0 0px 5px 15px)",
    transition: {
      repeat: Infinity,
      duration: 0.6,
      type: "spring",
      stiffness: 1000,
    },
  },
};

export default function Footer() {
  return (
    <motion.div
      className="container my-5"
      variants={containerVariants}
      exit="exit"
    >
      <div className="row">
        <div className="col d-grid align-content-center ms-3 justify-content-center">
          <h1
            className="mb-5 fw-bold"
            style={{
              color: "#00ff00",
              letterSpacing: "1px",
              cursor: "pointer",
              textShadow: "0px 0px 8px #a020f0",
              fontFamily: "Roboto Mono, monospace",
              fontStyle: "normal",
            }}
          >
            Jarul Art Studio
          </h1>
          <h3 className="fw-bold footer-h3 mb-3" style={{ cursor: "pointer" }}>
            Connect With Us
          </h3>
          <motion.p
            className="footer-p fs-5"
            style={{ cursor: "pointer" }}
            variants={pVariants}
            whileHover="hover"
          >
            93853 20583
          </motion.p>
          <motion.p
            className="footer-p fs-5"
            style={{ cursor: "pointer" }}
            variants={pVariants}
            whileHover="hover"
          ></motion.p>
          <motion.p
            className="footer-p fs-5"
            style={{ cursor: "pointer" }}
            variants={pVariants}
            whileHover="hover"
          >
            14/24, Padikattu Thurai, Karur, Tamilnadu 639001
          </motion.p>
          <div className="d-flex gap-5 mt-3">
            <motion.a
              href="https://www.instagram.com/harinajarul_sketches/?hl=en"
              target="blank"
              className="fw-bold  footer-instagram"
              style={{ color: "#be2ed6" }}
              variants={iconVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <GrInstagram size={30} />
            </motion.a>
            <motion.a
              href=""
              target="blank"
              className="fw-bold"
              style={{ color: "#1877f2" }}
              variants={iconVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <FaFacebook size={30} />
            </motion.a>
            <motion.a
              href=""
              target="blank"
              className="fw-bold"
              style={{ color: "#FF0000" }}
              variants={iconVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <IoLogoYoutube size={30} />
            </motion.a>
            <motion.a
              href="https://x.com/harinajarul?lang=en"
              target="blank"
              className="fw-bold"
              style={{ color: "#08a0e9" }}
              variants={iconVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <FaTwitter size={30} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
