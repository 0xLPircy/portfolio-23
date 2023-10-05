import React from "react";
import sanityClient from "@/sanity/config/client.config";
import TechIcon from "../components/TechIcon";
import Technologies from "../containers/Technologies";
import UpperBar from "../components/UpperBar";
import Navbar from "../components/Navbar";
import { Koulen, Lato } from "next/font/google";
import ProjectCard from "../components/ProjectCard";
import { groq } from "next-sanity";
import Contact from "../containers/Contact";
import Projects from "../containers/Projects";
const query = groq`*[_type == "projects"]`;

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
// import git from "@/assets/techs/git.svg";

const projectsPage = async () => {
  // const git = "/git.svg";
  const projects = await sanityClient.fetch(query);
  // console.log("data:", projects);

  return (
    <>
      <UpperBar />
      <div className="h-[fit] w-[100vw] py-20">
        {/* technologies */}
        <Technologies />
        {/* projects */}
        <Projects />
      </div>
      <Contact />
      <Navbar current="projects" />
    </>
  );
};

export default projectsPage;
