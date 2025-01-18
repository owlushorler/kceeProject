// components/RoofingSolutions.js

import Hom from "../component/bodycontrol";
import Homeeee from "../component/bodyscroll2";

export default function RoofingSolutions() {
  return (
    <div>
      <Homeeee />
      <div className="flex flex-col p-10 items-center -mt-96 text-center md:grid gap-4  md:grid-cols-2 justify-between ">
        <div className="">
          <h2 className="text-xl font-bold mb-4">
            Making A Difference In Roofing Solutions
          </h2>
          <p className="text-sm mb-6">
            At Jumac Aluminium Roofing, we specialize in designing customized
            aluminium roofing solutions at competitive prices. Our commitment to
            delivering high-quality products that meet our clients’ needs has
            made us a preferred choice across Nigeria.
          </p>
          <p className="text-sm mb-6">
            Our aluminium roofing products have been widely used across various
            industries, consistently proving to be of the best quality and
            providing excellent value for money.
          </p>
          <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
            View Price List
          </button>
        </div>
        <div className="">
          <img
            className="h-60"
            src="https://i.ibb.co/F5kDx6k/man-on-roof.jpg"
            alt="man-on-roof"
          />
        </div>
      </div>
    </div>
  );
}
