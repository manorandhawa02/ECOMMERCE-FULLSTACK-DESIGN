import React from "react";
import assets from "../assets/assets";
const Hero = () => {
  return (
    <div
      style={{
        flex: 1,
        height: "300px",
        borderRadius: "6px",
        padding: "40px",
        backgroundImage: `url(${assets.banner_board})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#000",
      }}
    >
      <h3>Latest trending</h3>
      <h1>Electronic items</h1>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Learn more
      </button>
    </div>
  );
};

export default Hero;
