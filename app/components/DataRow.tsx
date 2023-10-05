"use client";
import React, { useState } from "react";
import { Lato } from "next/font/google";
import { Education, Experience } from "../about/types";

type DataProps = { experience?: Experience; education?: Education };
const DataRow = ({ experience, education }: DataProps) => {
  const [vis, SetVis] = useState("hidden");
  const changeVis = () => {
    if (vis == "hidden") {
      SetVis("block");
    } else {
      SetVis("hidden");
    }
  };
  return (
    <div>
      <div
        className="grid gap-6 md:grid-cols-4 grid-cols-2 hover:bg-[#dddddd] p-3 rounded-md"
        onClick={changeVis}
      >
        <h5 className="text-md font-extralight col-span-2 md:col-span-1">
          {experience?.startDate || education?.startDate} -{" "}
          {experience?.endDate || education?.endDate || "Present"}
        </h5>
        <h3 className="text-xl font-light ">
          {experience?.company || education?.college}
        </h3>
        <h4 className="md:text-xl font-light text-md">
          {experience?.title || education?.degree}
        </h4>
        <p className="text-sm font-semibold italic md:text-right md:col-span-1 col-span-2 text-center">
          {experience?.technologies || education?.score}
        </p>
      </div>
      {experience && (
        <div className={`grid md:grid-cols-4 ${vis}`}>
          <div className="col-span-1"></div>
          <div className="col-span-3 font-light text-lg pt-3 italic">
            <ul>
              {experience.description?.map((bullet, id) => (
                <li key={id}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
    </div>
  );
};

export default DataRow;
