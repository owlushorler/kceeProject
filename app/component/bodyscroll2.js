import CappedScroll from "./Body";
import slate from "../images/slate.jpg";
import Image from "next/image";
import CappedScrolll from "./bodyScroll";

const Homeeee = () => {
  return (
    <nav className="bg-gradient-to-bl  justify-between  mt-40">
      <div className="relative p-3 h-96 text-black  ">
        {/* Create some content to scroll */}
        <div className="h-[50vh] flex  justify-center items-center">
          <CappedScrolll />
        </div>
      </div>
    </nav>
  );
};

export default Homeeee;
