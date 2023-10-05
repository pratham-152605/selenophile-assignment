import React from "react";
import conluoImg from "../assets/conluo-removebg-preview.png"
import ssImg from "../assets/ss.png"

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid mt-5 pb-5 pt-4"
        style={{backgroundColor: "#21283a"}}
      >
        <div className="row justify-content-around">
          <div className="col-md-3">
            <span style={{color: "#fff"}}>
              Our address
              <br />
            </span>
            <span style={{color: "#fff"}}>
              Ole Deviks Vei 10,
              <br />
            </span>
            <span style={{color: "#fff"}}>
              0666 Oslo
              <br />
            </span>
            <span>
              <button type="button" className="btn btn-outline-success mt-3">
                View On Map
              </button>
            </span>
            <div className="d-flex flex-column gap-3">
              <span>
                <img
                  src={conluoImg}
                  alt="conluo-img"
                  height="10%"
                  width="40%"
                />
              </span>
              <span>
                <img
                  src={ssImg}
                  alt="ss-img"
                  height="40%"
                  width="50%"
                  className="img-fluid mt-0"
                />
              </span>
            </div>
          </div>

          <div className="col-md-3">
            <form className="p-4  shadow" style={{backgroundColor: "#141414"}}>
              <span
                className="text-center d-flex justify-content-center"
                style={{color: "#69d152"}}
              >
                Fill in the form below to express the flavours of Lunsj Pa Dara
                for free
              </span>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  style={{backgroundColor: "#141414", color: "#fff"}}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="exampleInputPassword1"
                  style={{backgroundColor: "#141414", color: "#fff"}}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  style={{backgroundColor: "#141414", color: "#fff"}}
                />
              </div>
              <button
                type="submit"
                className="btn p-0"
                style={{backgroundColor: "#69d152"}}
              >
                TRY THE LUNSJ PA DORA EXPERIENCE
              </button>
            </form>

            <p
              className="text-center d-flex justify-content-center"
              style={{color: "#fff"}}
            >
              If you'd like to talk to our sales team immediately, contact
            </p>

            <div className="d-flex gap-4">
              <div className="d-flex flex-column align-content-left">
                <span style={{color: "#69d152"}}>Sebastian Fredstad</span>
                <span style={{color: "#fff"}}>sebastian@conluo.no</span>
                <span style={{color: "#fff"}}>tlf: 478 38 933</span>
              </div>

              <div className="d-flex flex-column align-content-right">
                <span style={{color: "#69d152"}}>Caroline Borge</span>
                <span style={{color: "#fff"}}>caroline@conluo.no</span>
                <span style={{color: "#fff"}}>tlf: 454 91 920</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="d-flex flex-column pt-4 justify-content-center">
              <span style={{color: "#fff"}}>Contact Us</span>
              <span style={{color: "#fff"}}>Lunsjpadora@conluo.no</span>
              <span style={{color: "#fff"}}>tlf: 40 00 13 15</span>
              <span className="pt-2">
                <button type="button" className="btn btn-outline-success">
                  SEND A MESSAGE
                </button>
              </span>

              <div className="d-flex pt-4 flex-rows gap-3">
                <span style={{color: "#fff"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </span>
                <span style={{color: "#fff"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </span>

                <span style={{color: "#fff"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </span>

                <span style={{color: "#fff"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pinterest"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                  </svg>
                </span>

                <span style={{color: "#fff"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-sunglasses"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        &#169; Copyright{" "}
        <span style={{color: "green"}}> Facility Services AS</span> 2023 | Made
        with <span className="heart">&#10084;</span> by{" "}
        <span style={{color: "green"}}>Investronaut</span>
      </footer>
    </>
  );
};

export default Footer;
