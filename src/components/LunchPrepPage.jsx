import React from "react";
import chatriImage from "../assets/chatri-removebg-preview.png"
import chiefImage from "../assets/chief.png"
import deliveryImage from "../assets/delivery-removebg-preview.png"

const LunchPrepPage = () => {
  return (
    <div
      className="container-fluid pt-3"
      style={{ backgroundColor: "#dde9d1" }}
    >
      <div className="row">
        <div className="col-12 align-items-center justify-content-center d-flex">
          <b>
            <span style={{ fontFamily: "Oswald" }} className="h2">
              Take The Stress Out Of
            </span>
            <span
              style={{ fontFamily: "Oswald", color: "#69d152" }}
              className="h2"
            >
              Lunch-Prep!
            </span>
          </b>
        </div>
      </div>
      <div className="row d-flex justify-content-center gap-5">
        <div
          className="col-2 align-items-center justify-content-center d-flex shadow p-2 mb-5 bg-body my-4"
          style={{ borderRadius: "10px" }}
        >
          <div className="d-flex flex-column align-items-center">
            <img src={chatriImage} alt="chatri-img" height="50px" width="50px" />
            <br />
            <span style={{ fontFamily: "Oswald" }} className="text-center">
              Set your Prefrence once and get your meals accordingly each day
            </span>
          </div>
        </div>
        <div
          className="col-2 align-items-center justify-content-center d-flex shadow p-3 mb-5 bg-body my-4"
          style={{ borderRadius: "10px" }}
        >
          <div className="d-flex flex-column align-items-center">
            <img src={chiefImage} alt="chief-img" height="50px" width="50px" />
            <br />
            <span style={{ fontFamily: "Oswald" }} className="text-center">
              {" "}
              Food made with fresh ingredients
            </span>
          </div>
        </div>
        <div
          className="col-2 align-items-center justify-content-center d-flex shadow p-3 mb-5 bg-body my-4"
          style={{ borderRadius: "10px" }}
        >
          <div className="d-flex flex-column align-items-center">
            <img
              src={deliveryImage}
              alt="delivery-img"
              height="50px"
              width="50px"
            />
            <br />
            <span style={{ fontFamily: "Oswald" }} className="text-center">
              {" "}
              Enjoy varied food delivered to work before 11 a.m.
            </span>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 align-items-center justify-content-center d-flex">
          <span className="h2">Why &nbsp;</span>
          <span className="h2" style={{ color: "#69d152" }}>
            Lunsj Pa Dora?
          </span>
        </div>
      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-8">
          <div className="d-flex flex-column text-center">
            <span style={{ fontFamily: "Oswald" }}>
              A healthier, happier meal while you work
            </span>
            <span style={{ fontFamily: "Oswald" }}>
              2 lines on the ethos of the brand. lorem ipsum is simply dummy
              test of the printting and
            </span>
            <span style={{ fontFamily: "Oswald" }}>
              typesetting industry. lorem ipsum has been the industry standard
              dummy test ever since the
            </span>
            <span style={{ fontFamily: "Oswald" }}>1500s</span>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center mb-3 mt-2">
          <button
            type="button"
            className="btn "
            style={{ backgroundColor: "#69d152", borderRadius: "20px" }}
          >
            <span className="px-4 py-2" style={{ fontFamily: "Oswald" }}>Our Story</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LunchPrepPage;
