import Image from "next/image";
import githubLogo from "@/assets/github.png";
import githubText from "@/assets/githubcurve.svg";
import Navbar from "../components/Navbar";
import Link from "next/link";
// import line from "@/assets/line.png";

const HomePage = async () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] grid showcaseBg">
        <Link
          href="https://github.com/L-Pircy"
          className="grid h-[180px] w-fit justify-self-end place-items-end grid-cols-1 hover:-mt-12 -mt-24"
        >
          <Image
            src={githubLogo}
            height={90}
            width={90}
            alt="github"
            className="rotate180 mr-[90px]"
          />
          <Image
            src={githubText}
            height={180}
            width={180}
            alt="github"
            className="mr-[45px] right-[45px] rotate -mt-[180px]"
          />
        </Link>
        <div className="absolute top-[330px] w-[100vw] grid grid-flow-row">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 md:w-[75%] sm:w-[100vw] w-[100vw]">
            {" "}
            <hr className="col-span-1 h-[1px] w-full my-8 bg-gray-200 border-0 dark:bg-gray-400 md:block sm:hidden hidden" />
            <h1 className="col-span-2 font-extralight lg:text-6xl md:text-5xl text-6xl md:place-self-stretch sm:place-self-center place-self-center">
              TAVEESHA AGARWAL
            </h1>
          </div>
          <h2 className="lg:text-[42px] md:text-4xl sm:text-3xl text-2xl font-thin italic place-self-center md:place-self-start">
            FRONTEND DEVELOPER | BLOCKCHAIN ENTHUSIAST
          </h2>
        </div>
      </div>
      <Navbar current="home" />
    </>
  );
};

export default HomePage;
