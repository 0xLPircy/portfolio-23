import DataRow from "../components/DataRow";
import { Koulen, Lato } from "next/font/google";
import sanityClient from "@/sanity/config/client.config";
import { groq } from "next-sanity";
const query = groq`*[_type == "experience"]`;

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

const WorkExperience = async () => {
  const workExp = await sanityClient.fetch(query);
  // console.log("data:", workExp);

  return (
    <div className="pt-20">
      <h2
        className={`pl-16 text-4xl tracking-[-0.1rem] font-semibold ${koulen.className}`}
      >
        WORK
      </h2>
      <h2
        className={`pb-12 text-4xl tracking-[-0.1rem] font-semibold ${koulen.className}`}
      >
        EXPERIENCE
      </h2>
      <div>
        {workEx.map((experience: any, _id: any) => (
          <DataRow key={_id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

const workEx = [
  {
    startDate: "Sep 2023",
    endDate: "",
    company: "Google Developer Student Clubs",
    title: "Web Development Mentor",
    location: "Manipal University Jaipur",
    technologies: "HTML, CSS, Javascript, ReactJS, NextJS",
    description: [
      "• Responsible for web development sessions and made continuous efforts to impart a better understanding of development in freshers.",
      "• Hosted API Day Jaipur by Postman",
    ],
  },
  {
    startDate: "Jun 2023",
    endDate: "",
    company: "Technoid",
    title: "Frontend Head",
    location: "",
    technologies: "HTML, CSS, Javascript, ReactJS, Postman API",
    description: [""],
  },
  {
    startDate: "Jun 2023",
    endDate: "",
    company: "CyberSpace Club MUJ",
    title: "Joint Webmaster",
    location: "",
    technologies: "HTML, CSS, Javascript, ReactJS, NextJS",
    description: [
      "• Responsible for upkeep, smooth functioning and weekly update of the community’s official website.",
    ],
  },
  {
    startDate: "Jul 2022",
    endDate: "Jun 2023",
    company: "Enactus Manipal University Jaipur",
    title: "President",
    location: "",
    technologies:
      "Social Entrepreneurship, Event Management, Conflict Resolution, Strategic Planning, Leadership, Marketing and Sales",
    description: [
      "• Directed Project GrapeVine Buzz, directly impacting 25+ underprivileged children; & Project Parivartana addressing 3 UN SDG goals. Also Organized 3 events witnessing a footfall of 100+ (National Level Ideathon, Debating week & event to increase awareness)",
      "• Led the executive committee of 30+ and a team of 100+ in building and implementing Social Entrepreneurship projects.",
    ],
  },
  {
    startDate: "Apr 2022",
    endDate: "",
    company: "Polygon Guild Jaipur",
    title: "Community Representative",
    location: "",
    technologies:
      "Community Building, Public Speaking, Solidity, Ethereum, Marketing and Sales",
    description: [
      "• Hosted largest Web3 event of Rajasthan, Polygon RoadShow Jaipur. Witnessed 300+ industry professionals from across the world and attendees. The event featured activities, workshops, and talks from Web3 leaders.",
      "• Organized launch event for Polygon Guild Jaipur, with 100+ attendees,  headed hospitality for Polygon Representative. Designed IDs, Posters, Crafts with Crisis and Stage Management. Conducted outhouse promotions in 4 colleges through interacting with 500+ students",
    ],
  },
  {
    startDate: "Sept  2021",
    endDate: "Jun 2022",
    company: "Association for Computing Machinery (ACM) MUJ",
    title: "First Year Coordinator",
    location: "",
    technologies:
      "Volunteer Work, Event Management, Documentation, Marketing and Sales",
    description: [
      "• Directed a team of 400+ freshers to guide them on various fields in computing through learning and practical applications.",
    ],
  },
  {
    startDate: "Jul 2021",
    endDate: "Jun 2022",
    company: "Cisco",
    title: "Campus Ambassador",
    location: "",
    technologies: "Computer Networks, Campus Marketing",
    description: [
      "• Helped promote Cisco's message and mission in my university campus to young minds",
    ],
  },
];
