import React from 'react'
import logo_url from "../../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid px-3">
      <img src={logo_url} alt="" width="70" height="50" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-lg-3 me-auto ms-lg-4 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fs-7 fw-bold" aria-current="page" href="#">Lunsj Pa Dora Plans</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fs-7 fw-bold" href="#">How it works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fs-7 fw-bold" href="#">Our Menus</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fs-7 fw-bold" href="#">Sustainability</a>
            </li>
          </ul>
          <button className='btn btn-success px-4 me-5 text-light fw-bold rounded-pill'>Login</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar