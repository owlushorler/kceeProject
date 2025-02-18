// components/ExpandableContent.js
"use client";
import { useEffect, useState } from "react";

const ExpandableContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollY) {
      // Scrolling down
      setIsExpanded(true); // Expand to the left
    } else {
      // Scrolling up
      setIsExpanded(false); // Shrink back to the right
    }

    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div>
      <div
        className={`hidden  sm:flex   sm:absolute sm:top-64  sm:right-0 sm:transition-transform sm:duration-500 sm:mt-40 f`}
        style={{
          transform: isExpanded
            ? "translate(-60%, -50%)"
            : "translate(0, -50%)",
          // Ensure it doesn't exceed its own width
          width: "350px", // Set a fixed width for the box
        }}
      >
        <div className=" w-96 p-4  bg-blue-950 text-white rounded-lg shadow-lg">
          <div className="flex justify-around p-8 bg-gray-50">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-yellow-600">913+</h1>
              <p style={{ fontSize: "10px" }} className=" text-gray-700">
                Happy Clients
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-yellow-600">8+</h1>
              <p style={{ fontSize: "10px" }} className=" text-gray-700">
                Years In Business
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-yellow-600">2,717+</h1>
              <p style={{ fontSize: "10px" }} className=" text-gray-700">
                Successful Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" sm:hidden p-4  mt-20 bg-blue-950 text-white rounded-lg shadow-lg">
        <div className="flex justify-around p-8 bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-yellow-600">913+</h1>
            <p style={{ fontSize: "10px" }} className=" text-gray-700">
              Happy Clients
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-yellow-600">8+</h1>
            <p style={{ fontSize: "10px" }} className=" text-gray-700">
              Years In Business
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-yellow-600">2,717+</h1>
            <p style={{ fontSize: "10px" }} className=" text-gray-700">
              Successful Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableContent;
