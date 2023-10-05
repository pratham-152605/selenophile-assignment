import React from 'react'
import img1 from "../assets/img1.png"
import finalImg from "../assets/final.png"
import img3 from "../assets/img3.png"

const EatItPage = () => {
  return (
    <div className="container-fluid pb-4">
        <div className="row mt-4">
            <div className="col-12 align-items-center justify-content-center d-flex">
                <span  className="h2" style={{fontFamily: "Oswald", color: "#69d152"}}>Eat&nbsp;</span>
                <span style={{fontFamily: "Oswald"}} className="h2">It.&nbsp;</span>
                <span className="h2" style={{fontFamily: "Oswald", color: "#69d152"}}>Love&nbsp;</span>
                <span className="h2" style={{fontFamily: "Oswald"}}>It.&nbsp;</span>
                <span className="h2" style={{fontFamily: "Oswald", color: "#69d152"}}>Tag&nbsp;</span>
                <span className="h2" style={{fontFamily: "Oswald"}}>It.&nbsp;</span>
            </div>
        </div>

        <div className="row mt-4">
            <div className="col-12 align-items-center justify-content-center d-flex">
                <span style={{fontFamily: "Oswald", color: "#69d152"}}>#LunchAtMyDoor</span>
            </div>
        </div>


        <div className="row justify-content-center mt-4">
            <div className="col-md-2">
                <img src={img1} alt='image1' className="img-fluid shadow" />
            </div>

            <div className="col-md-2">
                <img src={finalImg} alt="final-img" className="img-fluid shadow" />
            </div>

            <div className="col-md-2">
                <img src={img3} alt="image3" className="img-fluid shadow" />
            </div>
        </div>
    </div>
  )
}

export default EatItPage