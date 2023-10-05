import ProjectCard from "../components/ProjectCard";
import sanityClient from "@/sanity/config/client.config";
import { groq } from "next-sanity";
const query = groq`*[_type == "projects"]`;

const Projects = async () => {
  const projects = await sanityClient.fetch(query);
  // console.log(projects);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 text-[#212121] m-12 gap-6">
      {proj.map((p: any) => (
        <ProjectCard
          key={p._id}
          title={p.name}
          desc={p.description}
          technologies={p.techs}
          linkGit={p.githubLink}
          tags={p.tags}
          hostedLink={p.hostedLink}
        />
      ))}
    </div>
  );
};

export default Projects;

const proj = [
  {
    _id: "01",
    name: "Uniti",
    tags: ["Made For: ETH Global Hackathon"],
    githubLink: "https://github.com/megabyte0x/uniti-implementation",
    hostedLink: "https://uniti-frontend.vercel.app/",
    techs: "Next.js, Zustand, Tailwind, Figma, HTML, CSS, Javascript",
    description: [
      "• An exciting way to run community programs on-chain by using EIP 6551.",
      "• Used NextJS and Tailwind to create front end for a protocol helping organize onchain programs",
    ],
  },
  {
    _id: "02",
    name: "Cyber_SpaceClub",
    tags: ["Web Master"],
    githubLink: "https://github.com/L-Pircy/csc-23",
    hostedLink: "https://csc-23.vercel.app/",
    techs: ["Next.js, Zustand, Tailwind, HTML, CSS, Javascript, SwiperJS"],
    description: [
      "• Responsible for upkeep, smooth functioning and weekly update of the community official website.",
      "• Created a fully Responsive website of CyberSecurity Club, using NextJS and Tailwind for frontend.",
      "• Fetched JSON files for weekly update of newsletters",
    ],
  },
  {
    _id: "03",
    name: "TravelDapp",
    tags: ["IEEE HackTheMetaVerse", "Finals Qualifier"],
    githubLink: "https://github.com/L-Pircy/travel-dapp",
    hostedLink: "https://travel-dapp.vercel.app/",
    techs: ["Next.js, Zustand, Tailwind, Figma, Clerk Auth"],
    description: [
      "• Incentivizing travel using achievement programs with  issuance of NFTs as prizes.",
      "• Created a fully Responsive website of CyberSecurity Club, using NextJS and Tailwind for frontend.",
      "• Fetched JSON files for weekly update of newsletters",
    ],
  },
  {
    _id: "04",
    name: "ISSC",
    tags: ["Freelance"],
    githubLink: "https://github.com/L-Pircy/portfolio-23",
    hostedLink: "https://issc-23.vercel.app/",
    techs: ["Next.js, Zustand, Tailwind, HTML, CSS, Javascript, SwiperJS"],
    description: [
      "• Responsible for upkeep, smooth functioning and weekly update of the community’s official website.",
      "• Created a fully Responsive website of CyberSecurity Club, using NextJS and Tailwind for frontend.",
      "• Fetched JSON files for weekly update of newsletters",
    ],
  },
  {
    _id: "05",
    name: "ExpenseTracker",
    tags: ["Learning"],
    githubLink:
      "https://github.com/L-Pircy/reactLearn/tree/master/react/expense-tracker-react",
    hostedLink: "https://expense-tracker-six-ecru.vercel.app/",
    techs: ["Next.js, Zustand, Tailwind, HTML, CSS, Javascript, SwiperJS"],
    description: [
      "• Responsible for upkeep, smooth functioning and weekly update of the community’s official website.",
      "• Created a fully Responsive website of CyberSecurity Club, using NextJS and Tailwind for frontend.",
      "• Fetched JSON files for weekly update of newsletters",
    ],
  },
];
