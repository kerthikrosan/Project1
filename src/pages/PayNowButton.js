/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useRef, useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGratipay } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
const btnVariants = {
  hidden: {
    x: "-50vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: "300",
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: "#a020f0 0px 5px 15px",
    transition: {
      repeat: Infinity,
      duration: 0.6,
      type: "spring",
      stiffness: 1000,
    },
  },
};
export default function PayNowButton() {
  const navigate = useNavigate();
  const btnRef = useRef();
  function scannerHandler() {
    navigate("/payment/page");
  }
  function btnLeave1() {
    btnRef.current.classList.add("navPopUp");
  }
  function btnEnter1() {
    btnRef.current.classList.remove("navPopUp");
  }

  return (
    <motion.Fragment variants={containerVariants} exit="exit">
      <a
        to=""
        className="text-decoration-none d-flex align-items-center justify-content-center paynow-link"
      >
        <motion.button
          ref={btnRef}
          className="btn app-button fw-bold mb-5"
          style={{ height: "50px", fontSize: "20px" }}
          onMouseEnter={btnEnter1}
          onMouseLeave={btnLeave1}
          onClick={scannerHandler}
          variants={btnVariants}
          whileHover="hover"
          initial="hidden"
          animate="visible"
        >
          Pay Now
          <FaGratipay className="ms-2 mb-1" style={{ fontSize: "30px" }} />
        </motion.button>
      </a>
    </motion.Fragment>
  );
}
