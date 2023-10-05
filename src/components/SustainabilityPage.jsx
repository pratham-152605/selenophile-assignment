import React from "react";
import mapImage from "../assets/map.png"
import dustbinImage from "../assets/dustbeen.png"
import packageImage from "../assets/package.png"
import efficiencyImage from "../assets/efficiency-removebg-preview.png"
import communityIcon from "../assets/community-removebg-preview.png"

const SustainabilityPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-12 align-items-center justify-content-center d-flex">
            <span style={{fontFamily: "Oswald"}} className="h2">
              Sustainability at &nbsp;
            </span>
            <span style={{fontFamily: "Oswald", color: "#69d152"}} className="h2">
              Lunsj Pa Dora?
            </span>
          </div>
        </div>

        <div className="row d-flex justify-content-center  mt-4">
          <div className="col-2">
            <div className="d-flex flex-column align-items-center">
              <img src={mapImage} alt="map-img-icon" height="50px" width="50px" />
              <br />
              <span style={{fontFamily: "Oswald"}} className="text-center">
                Locally
                <br />
                Sourced
              </span>
            </div>
          </div>

          <div className="col-2">
            <div className="d-flex flex-column align-items-center">
              <img src={dustbinImage} alt="dustbin-img" height="50px" width="50px" />
              <br />
              <span style={{fontFamily: "Oswald"}} className="text-center">
                Reduced
                <br />
                Food Waste
              </span>
            </div>
          </div>

          <div className="col-2 ">
            <div className="d-flex flex-column align-items-center">
              <img src={packageImage} alt="package-img" height="50px" width="50px" />
              <br />
              <span style={{fontFamily: "Oswald"}} className="text-center">
                Eco-Friendly
                <br />
                Packaging
              </span>
            </div>
          </div>

          <div className="col-2 ">
            <div className="d-flex flex-column align-items-center">
              <img
                src={efficiencyImage}
                alt="efficiency-img"
                height="50px"
                width="50px"
              />
              <br />
              <span style={{fontFamily: "Oswald"}} className="text-center">
                Energy
                <br />
                Efficiency
              </span>
            </div>
          </div>

          <div className="col-2 ">
            <div className="d-flex flex-column align-items-center">
              <img
                src={communityIcon}
                alt="community-icon"
                height="50px"
                width="50px"
              />
              <br />
              <span style={{fontFamily: "Oswald"}} className="text-center">
                Community
                <br />
                Engegement
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="d-flex justify-content-center mb-3 mt-4">
          <button
            type="button"
            className="btn "
            style={{backgroundColor: "#69d152", borderRadius: "20px"}}
          >
            <span className="px-4 py-2" style={{fontFamily: "Oswald"}}>Read More</span>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default SustainabilityPage;
