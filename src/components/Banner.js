import Image from "next/image";
import React from "react";

import banner from "../assets/banner.webp";

function Banner() {
  return (
    <div className="banner_container">
      <img src="/images/banner.webp" alt="drawing_image" />
    </div>
  );
}

export default Banner;
