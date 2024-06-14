import React, { useEffect, useState, Fragment } from "react";
import Loader from "./Loader";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SampleArt() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDatFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    fakeDatFetch();
  }, []);
  useEffect(() => {
    AOS.init({ duration: 700, delay: 500 });
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <Fragment>
      <div className="container">
        <div className="card sampleArt-card my-5">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
                    data-aos="flip-left"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
                    data-aos="flip-left"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
                    data-aos="flip-left"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
                    data-aos="flip-left"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
                    data-aos="flip-left"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
                    data-aos="flip-left"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
                    data-aos="flip-left"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
                    data-aos="flip-left"
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
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div
                    className="card service-innercard mx-md-3 my-5"
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
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
