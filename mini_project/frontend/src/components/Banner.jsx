import React from "react";
import bannerImage from "../assets/banner_final3.png";

const Banner = () => {
  return (
    <div className="position-relative w-100" >
      <img src={bannerImage} alt="Banner" className="img-fluid w-100" style={{height: "650px"}}/>
      <div className="position-absolute top-0 start-50 translate-middle-x mt-5 text-black">
        {/* <h2 className="fw-bold">Beauty Delivered to Your Doorstep!</h2>
        <p className="fs-1">Glow like never before with our premium cosmetics.</p> */}
      </div>
    </div>
  );
};

export default Banner;
