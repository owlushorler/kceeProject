import CappedScroll from "./Body";
import slate from "../images/slate.jpg";
import Image from "next/image";

const Homeee = () => {
  return (
    <nav className=" flex  flex-col sm:grid z- sm:grid-cols-2 p-7 bg-gradient-to-bl  justify-between  -mt-10 sm:mt-40">
      <div className="p-5 text-center">
        <div className="text-3xl font-bold text-blue-950">Our Services</div>
        <div className="text-sm">
          We offer a wide range of services to create the perfect aluminium roof
          for your project.
        </div>
      </div>
      <div className="relative  p-3 h-96 text-black   bg-blue-950 ">
        {" "}
        <img
          className="sm:h-to h-too w-svw "
          src="https://i.ibb.co/Q3NjxZZJ/Whats-App-Image-2025-01-06-at-14-35-02-3.jpg"
          alt="ee"
        />
        {/* Create some content to scroll */}
        <div className="h-[10vh] flex justify-center items-center">
          <CappedScroll />
        </div>
      </div>
    </nav>
  );
};

export default Homeee;
