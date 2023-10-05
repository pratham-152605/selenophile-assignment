import React from "react";
import NavBar from "./HomePage/NavBar";
import Hero from "./HomePage/Hero";

const HomePage = () => {
    const HomeStyle = {
        "height": "80vh",
        "width": "100vw",
    }

  return (
    <div className="home" style={HomeStyle}>
      <NavBar />
      <Hero />
    </div>
  );
};

export default HomePage;
