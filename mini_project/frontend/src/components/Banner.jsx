import React from "react";
import bannerImage from "../assets/trending1.png";

const Banner = () => {
  return (
    <div className="position-relative w-100" >
      <img src={bannerImage} alt="Banner" className="img-fluid w-100" style={{height: "650px" , opacity:0.9}}/>
      <div className="position-absolute top-0 start-0 mt-5 text-white " style={{  transform: "translateX(1%)"  }}>
        <h2 className="fw-bold">Beauty Delivered to Your Doorstep!</h2>
        <p className="fs-1">Glow like never before with our premium cosmetics.</p>
      </div>
    </div>
  );
};

export default Banner;
