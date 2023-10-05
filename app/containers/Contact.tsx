import Image from "next/image";
import esha from "@/assets/taveesha.jpeg";
import calender from "@/assets/calender.png";
import { Koulen } from "next/font/google";
import Link from "next/link";

const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const Contact = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center">
      <div className="grid grid-cols-3 lg:text-[210px] md:text-[120px] text-[90px] font-extrabold tracking-tighter items-end place-items-center md:px-52 px-12 pb-0">
        <h1 className={`${koulen.className}`}>LET&apos;S</h1>
        <Image
          src={esha}
          height={300}
          width={300}
          className="rounded-full
          lg:block
          hidden"
          alt="No img found"
        />
        <Image
          src={esha}
          height={210}
          width={210}
          className="rounded-full
          lg:hidden
          md:block
          hidden"
          alt="No img found"
        />
        <Image
          src={esha}
          height={300}
          width={300}
          className="rounded-full
          lg:hidden
          md:hidden
          block"
          alt="No img found"
        />
        <h1 className={`${koulen.className}`}>WORK</h1>
      </div>
      <h4 className="bg-[#363636] h-fit w-fit md:text-[27px] text-[21px] text-center font-extralight my-6 justify-self-center self-center mb-9">
        Feel Free To Reach Out To Me. I&apos;m Always Open To Discuss New
        Projects.
      </h4>
      {/* socials */}
      <div className="grid md:grid-cols-5 grid-cols-1 px-30 mx-20 mb-0">
        <div className="grid grid-cols-4 gap-0 col-span-1 justify-self-center self-center">
          <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center col-span-1"></div>
          <Link
            href="https://github.com/L-Pircy"
            className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full lg:text-3xl md:text-xl text-xl px-6 py-1 font-extralight col-span-3"
          >
            <span className="">GitHub</span>
          </Link>
        </div>
        <div className="grid grid-cols-7 gap-0 md:col-span-3 col-span-1 justify-self-center self-center">
          <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center col-span-1"></div>
          <span className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full lg:text-3xl md:text-xl text-xl px-6 py-1 font-extralight col-span-6">
            taveesha.agarwal@gmail.com
          </span>
        </div>
        <div className="grid grid-cols-4 gap-0 col-span-1 justify-self-center self-center">
          <div className="bg-[#eeeeee] text-[#212121] rounded-full px-3 py-3 h-2 w-2 place-self-end self-center col-span-1"></div>
          <Link
            href="https://www.linkedin.com/in/taveesha-agarwal-4a159a1b9/"
            className="hover:bg-[#eeeeee] hover:text-[#212121] hover:rounded-full lg:text-3xl md:text-xl text-xl px-6 py-1 font-extralight col-span-3"
          >
            <span className="">LinkedIn</span>
          </Link>
        </div>
      </div>
      <h1
        className={`lg:text-[210px] md:text-[120px] text-[90px] lg:-mt-10 font-extrabold tracking-tighter justify-self-center self-center ${koulen.className}`}
      >
        TOGETHER
      </h1>
      <Link
        href="https://calendly.com/taveesha-agarwal/30min"
        className="mt-0 mb-20 py-3 justify-self-center w-fit rounded-full bg-[#8e8e8e] text-4xl text-[#121212] grid grid-cols-4 font-extrabold tracking-tighter gap-0 hover:bg-[#eeeeee]"
      >
        <Image
          src={calender}
          height={60}
          width={60}
          className="col-span-1 justify-self-center self-center"
          alt="No img found"
        />
        <h1
          className={`col-span-3 pr-3 justify-self-center self-center ${koulen.className}`}
        >
          BOOK A CALL
        </h1>
      </Link>
    </div>
  );
};

export default Contact;
