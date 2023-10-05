import sanityClient from "@/sanity/config/client.config";
import { getProjects } from "@/sanity/sanity.utils";
import { groq } from "next-sanity";
import Image from "next/image";
import DataRow from "./components/DataRow";
const query = groq`*[_type == "projects"]`;

export default async function Home() {
  const projects = await sanityClient.fetch(query);
  // console.log("data:", projects);

  return (
    <main>
      <div>hi</div>
      {/* {projects.map((p: any) => (
        <div key={p.}>{p.name}</div>
      ))} */}
    </main>
  );
}
