import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GiFeather } from "react-icons/gi";
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
  hover: {
    scale: 1.1,
    color: "white",
    textShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
    },
  },
};
export default function Main() {
  const navigate = useNavigate();
  function scannerHandler() {
    navigate("/payment/page");
  }
  return (
    <motion.Fragment variants={containerVariants} exit="exit">
      <div className="row my-5">
        <div className="col-12 col-sm-12 col-md-6 d-grid flex-column justify-content-center align-content-center">
          <h1>
            <span className="fw-bold" style={{ color: "#00ff00" }}>
              <Typewriter
                words={["Hi", "Hello", "Vanakkam"]}
                loop={Infinity}
                cursor
                cursorStyle={<GiFeather className="ms-2" />}
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <motion.h3
            className="mt-3 app-row1-h3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            Welcome to Jarul Arts
          </motion.h3>
        </div>
        <div className="col-12 col-sm-12 col-md-6 d-grid justify-content-center align-items-center">
          <img
            className="main-col-2"
            src="images/Welcome.png"
            style={{
              width: "400px",
              height: "400px",
              // filter: "drop-shadow(#abf7b1 0px 4px 12px)",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center mt-5">
          <div className="card card-1 ">
            <div className="card-body d-flex flex-column  card-1-body">
              <img
                src="images/offlineillus.png"
                style={{
                  width: "500px",
                  height: "300px",
                  borderRadius: "20px",
                  filter: "drop-shadow(#a020f0 0px 4px 12px)",
                }}
                className="img-fluid"
              />
              <h3 className="text-center mt-5 fw-blod card-h3">
                Personal Training
              </h3>
              <motion.button
                className="btn my-4 fw-bold card-button align-self-center"
                onClick={scannerHandler}
                variants={btnVariants}
                whileHover="hover"
              >
                Pay Now <IoIosArrowDropdownCircle className="ms-2 fs-4" />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center mt-5">
          <div className="card card-2">
            <div className="card-body d-flex flex-column card-2-body">
              <img
                src="images/onlineillus.png"
                style={{
                  width: "500px",
                  height: "300px",
                  borderRadius: "20px",
                  filter: "drop-shadow(#a020f0 0px 4px 12px)",
                }}
                className="img-fluid"
              />
              <h3
                className="text-center mt-5 fw-blod card-h3"
                style={{ color: "linear-gradient(#14469F,#DA3068)" }}
              >
                Online Training
              </h3>
              <motion.button
                className="btn my-4 fw-bold card-button align-self-center"
                onClick={scannerHandler}
                variants={btnVariants}
                whileHover="hover"
              >
                Pay Now
                <IoIosArrowDropdownCircle className="ms-2 fs-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.Fragment>
  );
}
