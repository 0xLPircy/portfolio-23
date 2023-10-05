import { Koulen, Lato } from "next/font/google";
import UpperBar from "../components/UpperBar";

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
const Showcase = () => {
  return (
    <>
      {" "}
      {/* upper bar */}
      <UpperBar />
      {/* top header */}
      <div className="lg:text-9xl md:text-8xl sm:text-7xl text-6xl grid justify-center items-center pt-24 text-center">
        <h1 className={`${koulen.className}`}>FRONTEND DEVELOPER</h1>
        <h1 className={koulen.className}>WEB 3.0 ENTHUSIAST</h1>
      </div>
    </>
  );
};

export default Showcase;
