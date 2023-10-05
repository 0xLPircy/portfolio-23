// import GalleryPage from "../gallery/Gallery";
import { promises as fs } from "fs";
import path from "path";
import React from "react";
import Image from "next/image";
import TechColumn from "../components/TechColumn";
import { Koulen, Lato } from "next/font/google";

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

const Technologies = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/techs");
  const imageFilenames = await fs.readdir(imageDirectory);

  function chunkArray(array: any, chunkSize: number) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      chunks.push(chunk);
    }
    return chunks;
  }

  const imageFilenamesArr = chunkArray(imageFilenames, 2);
  // console.log(imageDirectory);
  // console.log(imageFilenames);
  // console.log(imageFilenamesArr);

  return (
    <div className="text-[#212121] bg-[#eeeeee] rounded-md mx-12 slider px-20 py-12 grid grid-flow-row">
      <h1
        className={`lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-light md:place-self-start place-self-center pb-6 ${lato.className}`}
      >
        I WORK WITH
      </h1>
      <div className="md:grid grid-flow-col md:grid-cols-7 downAlt hidden">
        {imageFilenamesArr.map((ex: Array<string>) => (
          <TechColumn key={ex[0]} images={ex} />
        ))}
      </div>
      <div className="sm:grid grid-flow-row downAlt md:hidden">
        {imageFilenamesArr.map((ex: Array<string>) => (
          <TechColumn key={ex[0]} images={ex} />
        ))}
      </div>
      <h1
        className={`place-self-center text-3xl italic pt-9 ${lato.className} font-light`}
      >
        Other Technologies: Lorem, ipsum, aiejf, tyu, ojbjnk, dfg
      </h1>
      {/* <GalleryPage /> */}
    </div>
  );
};

export default Technologies;
