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

const AboutPara = () => {
  return (
    <div className="grid sm:grid-cols-4 md:px-16 sm:px-9 px-1">
      <h2 className="text-4xl font-semibold sm:col-span-1">
        <span className={koulen.className}>ABOUT</span>
      </h2>
      <p className="sm:col-span-3 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-normal lg:leading-[80px] md:leading-[60px] sm:leading-[40px] leading-[30px]">
        <span
          className={`lg:text-3xl md:text-2xl sm:text-xl text-lg leading-[30px] ${lato.className}`}
        >
          {` A curious mind immersed in the world of web development, exploring the boundless possibilities of Web 3.0. I empower myself by taking on diverse web projects, learning new technologies, and applying my skills in crafting the web of tomorrow with ReactJS, NextJS, and blockchain innovations.`}
        </span>
        <span className={lato.className}>
          {" "}
          {`I'm on a quest to shape the future of the web, one line of code at a time.`}
        </span>
      </p>
    </div>
  );
};

export default AboutPara;
