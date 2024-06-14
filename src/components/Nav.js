import React from "react";
import { Link } from "react-scroll";
import { useRef } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";

const navVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};
export default function Nav() {
  const navRef1 = useRef();
  const navRef2 = useRef();
  function navLeave1() {
    navRef1.current.classList.add("navPopUp");
  }
  function navEnter1() {
    navRef1.current.classList.remove("navPopUp");
  }
  function navLeave2() {
    navRef2.current.classList.add("navPopUp");
  }
  function navEnter2() {
    navRef2.current.classList.remove("navPopUp");
  }
  return (
    <motion.nav
      className="me-md-5 mt-5"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <ul className="list-inline d-flex  gap-md-5 nav-ul">
        <li
          ref={navRef1}
          className="list-inline-item"
          onMouseEnter={navEnter1}
          onMouseLeave={navLeave1}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-decoration-none fw-bold nav-li"
          >
            <AiFillInfoCircle
              style={{ background: "yellow", color: "a020f0" }}
              className="rounded-circle p-1 me-1"
            />
            About
          </Link>
        </li>
        <li
          ref={navRef2}
          className="list-inline-item "
          onMouseEnter={navEnter2}
          onMouseLeave={navLeave2}
        >
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-decoration-none fw-bold  nav-li"
          >
            <MdDesignServices
              style={{ background: "yellow", color: "a020f0" }}
              className="rounded-circle p-1 me-1"
            />
            Services
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
