import Hom from "../component/bodycontrol";
import Homeeee from "../component/bodyscroll2";

const Pic = () => {
  return (
    <div>
      <Homeeee />
      <div className="flex justify-center -mt-96 p-5  ">
        <img
          className="h-56 sm:h-too "
          src="https://i.ibb.co/WDgXb9M/Whats-App-Image-2025-01-14-at-11-11-38.jpg"
          alt="Whats-App-Image-2025-01-"
        />
      </div>

      <div className="flex flex-col items-center -mt-44  md:-mt-44 justify-center text-center h-screen p-4">
        <h1 className="text-3xl text-blue-800  font-bold mb-4">
          The Types & Prices Of Stone Coated Roofing Sheets
        </h1>
        <p className="text-sm text-gray-600 mb-2">
          Updated on 9th January, 2025
        </p>
        <p className="text-center text-sm text-gray-800 max-w-lg">
          Stone-coated roofing sheets have gained popularity in Nigeria,
          renowned for their exceptional durability and aesthetic appeal. Below
          are the prices of stone coated tiles per square meter:
        </p>
      </div>
      <Hom />
    </div>
  );
};

export default Pic;
