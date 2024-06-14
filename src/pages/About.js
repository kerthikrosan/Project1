import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const containerVariants = {
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 500 });
  }, []);
  return (
    <motion.div
      id="about"
      className="container d-flex justify-content-center about-container"
      style={{ marginTop: "200px", marginBottom: "200px" }}
      variants={containerVariants}
      exit="exit"
    >
      <Tilt>
        <div className="card about-card " data-aos="zoom-in">
          <div className="card-body about-card-body">
            <h1 className="fw-bold text-center my-3 card-about-h1">
              ABOUT{" "}
              <span
                style={{
                  color: "#00ff00",
                  textShadow: "0px 0px 8px #a020f0",
                }}
              >
                US
              </span>
            </h1>
            <motion.p
              className="m-5"
              style={{
                wordSpacing: "3px",
                letterSpacing: "2px",
                lineHeight: "1.5em",
                fontSize: "25px",
                color: "#FFDBE9",
                fontFamily: "Vesper Libre, serif",
                fontStyle: "normal",
              }}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{ duration: 0.5 }}
            >
              Jarul Arts teaches its students realistic drawing and painting,
              which helps in strengthening confidence. Jarul instructions help
              students avoid continual dissatisfaction with their artistic
              abilities, so that they will not eventually give up pursuing art
              as a viable interest. Drawing and painting are learned subjects,
              just like any other. Jarul takes a very classical approach in
              teaching drawing and painting. What it means is that instructions
              coupled with practice, will bring about an independent and
              confident artist in you. Student have worked for years before they
              ever became "masters" themselves. After months with Jarul ,
              students and their families are constantly amazed at their new
              abilities, and, that it is a real fun to learn how to draw and
              paint
            </motion.p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
