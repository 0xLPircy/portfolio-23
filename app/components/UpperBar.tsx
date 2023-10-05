import React from "react";
import { Koulen, Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
});
const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});
const UpperBar = () => {
  return (
    <div className="fixed w-[100vw] grid grid-cols-2 text-[#eeeeee] mix-blend-difference px-8 py-3 place-items-center z-50">
      <div className="justify-self-start grid grid-cols-2">
        <h4
          className={`justify-self-start col-span-1 ${koulen.className} text-3xl
        `}
        >
          LPircy
        </h4>
        <h5
          className={`justify-self-end self-center col-span-1 ${lato.className} lg:text-xl 
        md:text-md
        sm:hidden
        hidden
        md:block
        font-light`}
        >
          FrontEnd Developer
        </h5>
      </div>
      <div className="justify-self-end grid grid-cols-2">
        <h5
          className={`col-span-1 justify-self-end self-center ${lato.className} lg:text-xl md:text-md sm:hidden hidden md:block font-light justify-self-end`}
        >
          Available November 2023
        </h5>
        <Link
          href="https://calendly.com/taveesha-agarwal/30min"
          className="lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2 bg-[#eeeeee] text-[#212121] w-fit h-fit px-[20px] py-[8px] rounded-full justify-self-end hover:bg-[#212121] hover:text-[#eeeeee] hover:border-2 border-solid hover:px-[18px] hover:py-[6px]"
        >
          <div className="">
            <h4 className="lg:text-lg md:text-sm ">Get in Touch</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UpperBar;
