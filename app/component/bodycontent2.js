import CappedScroll from "./Body";
import slate from "../images/WhatsApp Image 2025-01-06 at 14.35.01.jpeg";
import slate2 from "../images/roofMan.webp";
import Image from "next/image";
import CappedScroA from "./bodycont1";
import CappedScroAb from "./bodyScroll";
import CappedScroAA from "./bodycount11";
import CappedScrolll2 from "./bodyscrol2";
import CappedScrolll from "./bodyscrol2";
import Hom from "./bodycontrol";

const Homeee1 = () => {
  return (
    <div>
      <nav className=" flex flex-col gap-11  sm:grid  sm:grid-cols-2 sm:gap-4 p-7  -mt-80    justify-between">
        <div className="relative -mt-52  p-3 h-96 text-black  bg- bg-red-600">
          {" "}
          <Image
            className=" h-too sm:h-to"
            //style={{ height: "35rem" }}
            src={slate}
            alt="ee"
          />
          {/* Create some content to scroll */}
          <div className="h-[10vh] flex justify-center items-center">
            <CappedScroAA />
          </div>
        </div>

        <div className="relative mb-52  p-3 h-96 text-black  bg- bg-blue-900">
          {" "}
          <Image className=" h-too sm:h-to" src={slate2} alt="ee" />
          {/* Create some content to scroll */}
          <div className="h-[10vh] flex justify-center items-center">
            <CappedScroA />
          </div>
        </div>
      </nav>
      <Hom />
    </div>
  );
};

export default Homeee1;
