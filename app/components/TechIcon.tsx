import React from "react";
import Image from "next/image";
import luci from "@/assets/luci.jpeg";

const TechIcon = (imag: any) => {
  return (
    <div>
      <Image src={imag} alt="" className="h-[150px] w-[150px]" />
      {/* <Image href={imag} height={150} width={150} /> */}
    </div>
  );
};

export default TechIcon;
