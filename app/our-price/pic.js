import Hom from "../component/bodycontrol";
import Homeeee from "../component/bodyscroll2";

const Pic = () => {
  return (
    <div>
      <Homeeee />
      <div className="flex justify-center -mt-96 p-5  ">
        <img
          className="h-56 sm:h-too "
          src="https://i.ibb.co/X5Shfr6/Whats-App-Image-2025-01-06-at-14-35-02-2.jpg"
          alt="Whats-App-Image-2025-01-"
        />

        <img
          className="h-56 sm:h-too "
          src="https://i.ibb.co/0Mk0jJD/Whats-App-Image-2025-01-06-at-14-35-02-1.jpg"
          alt="Whats-App-Image-2025-01-06-at-14-35-02-1"
        />
      </div>

      <div className="flex flex-col items-center -mt-44  md:-mt-44 justify-center text-center h-screen p-4">
        <h1 className="text-3xl text-blue-800  font-bold mb-4">
          Aluminium Roofing Price Per Square Metre
        </h1>
        <p className="text-sm text-gray-600 mb-2">
          Updated on 9th January, 2025
        </p>
        <p className="text-center text-sm text-gray-800 max-w-lg">
          We offer the highest-quality aluminum roofing sheets at factory-direct
          aluminum roofing prices.
        </p>
      </div>
      <Hom />
    </div>
  );
};

export default Pic;
