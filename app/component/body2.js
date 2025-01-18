import CappedScroll from "./Body";
import slate from "../images/slate.jpg";
import Image from "next/image";

const Homeee = () => {
  return (
    <nav className=" flex  flex-col sm:grid z- sm:grid-cols-2 p-7 bg-gradient-to-bl  justify-between  -mt-10 sm:mt-40">
      <div className="p-5 text-center">
        <div className="text-3xl font-bold text-red-700">Our Services</div>
        <div className="text-sm">
          We offer a wide range of services to create the perfect aluminium roof
          for your project.
        </div>
      </div>
      <div className="relative  p-3 h-96 text-black  bg- bg-red-600">
        {" "}
        <Image className="sm:h-to h-too  " src={slate} alt="ee" />
        {/* Create some content to scroll */}
        <div className="h-[10vh] flex justify-center items-center">
          <CappedScroll />
        </div>
      </div>
    </nav>
  );
};

export default Homeee;
