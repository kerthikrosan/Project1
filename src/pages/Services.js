import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { FaRegGrinHearts } from "react-icons/fa";
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

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 700, delay: 500 });
  }, []);
  const navigate = useNavigate();
  function sampleArtHandler() {
    navigate("/sample/art");
  }
  return (
    <motion.Fragment>
      <div
        id="services"
        className="container services-container"
        style={{ marginTop: "200px", marginBottom: "200px" }}
        variants={containerVariants}
        exit="exit"
      >
        <div className="card services-card p-5 ">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5 "
                    data-aos="flip-right"
                  >
                    <div className="card-body">
                      <img
                        src="images/Art1.jpg"
                        style={{
                          width: "700px",
                          height: "200px",
                          borderRadius: "20px",
                        }}
                        className="img-fluid "
                      />
                      <h5 className="fw-bold text-center mt-5 service-card-col-h1">
                        Animation
                        <br />
                        Sketch
                      </h5>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  {" "}
                  <div
                    className="card service-innercard mx-md-3 my-5"
                    data-aos="flip-up"
                  >
                    <div className="card-body">
                      <img
                        src="images/Art2.jpg"
                        style={{
                          width: "700px",
                          height: "200px",
                          borderRadius: "20px",
                        }}
                        className="img-fluid "
                      />
                      <h5 className="fw-bold text-center mt-5 service-card-col-h1">
                        Kids
                        <br />
                        (Level-1)
                      </h5>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-12 col-md-4">
                <Tilt>
                  {" "}
                  <div
                    className="card service-innercard mx-md-3 my-5"
                    data-aos="flip-left"
                  >
                    <div className="card-body">
                      <img
                        src="images/nayanthara.jpg"
                        style={{
                          width: "700px",
                          height: "200px",
                          borderRadius: "20px",
                        }}
                        className="img-fluid "
                      />
                      <h5 className="fw-bold text-center mt-5 service-card-col-h1">
                        Kids
                        <br />
                        (Level-2)
                      </h5>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <motion.button
                  className="btn fw-bold text-center services-button "
                  onClick={sampleArtHandler}
                  variants={btnVariants}
                  whileHover="hover"
                >
                  View Arts
                  <FaRegGrinHearts
                    className="ms-2 mb-1"
                    style={{ fontSize: "25px" }}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.Fragment>
  );
}
