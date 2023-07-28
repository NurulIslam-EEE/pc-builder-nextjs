import Image from "next/image";
import React from "react";

import banner from "../assets/banner.webp";

function Banner() {
  return (
    <div style={{ width: "100%" }}>
      <Image src={banner} width="100%" alt="drawing_image" />
    </div>
  );
}

export default Banner;
