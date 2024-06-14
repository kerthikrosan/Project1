import React from "react";
import Nav from "./Nav";
import Logo from "../images/logo.png";
import { motion } from "framer-motion";

const containerVariants = {
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
const col1Variants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};
const imgVariants = {
  hidden: {
    opacity: -1,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
export default function Header() {
  return (
    <motion.header
      className="sticky-top"
      variants={containerVariants}
      exit="exit"
    >
      <div className="row">
        <motion.div className="col-6 d-flex justify-content-start">
          <motion.div
            variants={col1Variants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src={Logo}
              className="ms-3 rounded-circle"
              style={{ width: "150px", height: "150px" }}
              variants={imgVariants}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.5}
            />
          </motion.div>
        </motion.div>
        <div className="col-6 d-flex justify-content-end">
          <Nav />
        </div>
      </div>
    </motion.header>
  );
}
