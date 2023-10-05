import React from 'react'
import menImg from "../assets/men (1).png"
import womenImg from "../assets/women.png"

const ReviewPage = () => {
  return (
    <div className="container-fluid" style={{backgroundColor: "#e3f7df"}}>
        <div className="row mt-5">
            <div className="col-12 align-items-center justify-content-center d-flex">
                <span style={{fontFamily: "Oswald"}} className="h2">Reviews</span>
            </div>
        </div>

        <div className="row mt-1">
            <div className="col-12 align-items-center justify-content-center d-flex">
                <span style={{fontFamily: "Oswald"}}>We Save You Serious &nbsp;</span>
                <span style={{fontFamily: "Oswald", color: "#69d152"}}>Stress</span>
            </div>
        </div>

        <div className="row justify-content-center mt-4 pb-5">
            <div className="col-xl-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={menImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text" style={{fontFamily: "Oswald"}}>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</p>
                      <div className="d-flex flex-column">
                        <span>
                           <b>KYLE MERWIN</b>
                        </span>
                        <span>
                            CO-owner
                         </span>
                      </div>
                    </div>
                  </div>
            </div>

            <div className="col-xl-3 mt-5">
                <div className="card" style={{width: "18rem"}}>
                    <img src={womenImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text" style={{fontFamily: "Oswald"}}>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</p>
                      <div className="d-flex flex-column">
                        <span>
                           <b>KYLE MERWIN</b>
                        </span>
                        <span>
                            CO-owner
                         </span>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewPage