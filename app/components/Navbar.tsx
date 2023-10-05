import Link from "next/link";
import Image from "next/image";
// import circleW from "@/assets/semCircleW.svg";
// import homeW from "@/assets/homeW.svg";
// import projectsW from "@/assets/projectsW.svg";
// import aboutW from "@/assets/aboutW.svg";
// import dotW from "@/assets/dotW.svg";
// import circleB from "@/assets/semCircleB.svg";
// import homeB from "@/assets/homeB.svg";
// import projectsB from "@/assets/projectsB.svg";
// import aboutB from "@/assets/aboutB.svg";
// import dotB from "@/assets/dotB.svg";
import { Koulen, Lato } from "next/font/google";
import home from "@/app/home/page";

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

const Navbar = ({ current }: any) => {
  return (
    <>
      <>
        {/* <div className="">
        <div className="p-4 bg-[#eeeeee] fixed bottom-[-15px] left-[48.5%] h-fit w-fit rounded-full"></div>
        <Image
          src={circleW}
          height={240}
          width={240}
          alt="nav"
          className="navCircle fixed bottom-[-120px] left-[40%] rotate-[-67deg]"
        />
        <Image
          src={homeW}
          height={240}
          width={240}
          alt="nav"
          className="navHome fixed bottom-[-120px] left-[40%] rotate-[-69deg]"
        />{" "}
        <Image
          src={dotW}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[-35deg]"
        />
        <Image
          src={projectsW}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[-26deg]"
        />
        <Image
          src={dotW}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[21deg]"
        />
        <Image
          src={aboutW}
          height={240}
          width={240}
          alt="nav"
          className="navAbout fixed bottom-[-120px] left-[40%] rotate-[33deg]"
        />
      </div>
      <div className="">
        <div className="p-4 z-30 bg-[#000000] fixed bottom-[-15px] left-[48.5%] h-fit w-fit rounded-full"></div>
        <Image
          src={circleB}
          height={240}
          width={240}
          alt="nav"
          className="bg-[#eeeeee54] rounded-full navCircle fixed bottom-[-120px] left-[40%] rotate-[-67deg]"
        />
        <Image
          src={homeB}
          height={240}
          width={240}
          alt="nav"
          className="navHome fixed bottom-[-120px] left-[40%] rotate-[-69deg]"
        />{" "}
        <Image
          src={dotB}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[-33deg]"
        />
        <Image
          src={projectsB}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[-24deg]"
        />
        <Image
          src={dotB}
          height={240}
          width={240}
          alt="nav"
          className="navProjects fixed bottom-[-120px] left-[40%] rotate-[23deg]"
        />
        <Image
          src={aboutB}
          height={240}
          width={240}
          alt="nav"
          className="navAbout fixed bottom-[-120px] left-[40%] rotate-[33deg]"
        />
      </div> */}
      </>
      {/* <div className="w-[100vw] grid place-items-center">
        <div
          className={`bg-[#000000] w-[80%] bottom-0 fixed grid grid-cols-3 gap-9 px-12 py-3 text-2xl font-light place-items-center ${lato.className} border-t-[1px] border-solid border-[#eeeeee]`}
        >
          <h3>HOME</h3>
          <h3>PROJECTS</h3>
          <h3>ABOUT</h3>
        </div>
      </div> */}
      <div className="fixed bottom-0 grid place-items-center w-[100vw] text-[#eeeeee] mix-blend-difference z-30">
        <div
          className={` pr-[9px] rounded-t-2xl grid grid-cols-8 text-3xl ${koulen.className}`}
        >
          {/* <div className="absolute bottom-6 left-[66%] border-[#212121] border-solid border-2 rounded-full px-3"></div> */}
          <div className="col-span-1 py-5 px-5 place-self-end border-t-4 border-s-4 mix-blend-difference border-[#eeeeee] border-solid rounded-tl-2xl"></div>
          <div
            className={`col-span-6 grid grid-cols-12 place-items-center pb-6 ${current}`}
          >
            <Link
              href="/home"
              className={`col-span-3 hover:mb-3 hover:border-b-[2.4px] border-solid`}
            >
              <h3>HOME</h3>
            </Link>
            <h3 className="col-span-1">•</h3>
            <Link
              href="/projects"
              className="col-span-4 hover:mb-3 hover:border-b-[2.4px] border-solid"
            >
              <h3 className="">PROJECTS</h3>
            </Link>
            <h3 className="col-span-1">•</h3>
            <Link
              href="/about"
              className="col-span-3 hover:mb-3 hover:border-b-[2.4px] border-solid"
            >
              <h3 className="">ABOUT</h3>
            </Link>
          </div>
          <div className="col-span-1 py-5 px-5 place-self-end border-t-4 border-e-4 mix-blend-difference border-[#eeeeee] border-solid rounded-tr-2xl"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
