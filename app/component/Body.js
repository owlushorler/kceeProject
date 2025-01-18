"use client";
import { useEffect, useState } from "react";

const CappedScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="absolute text-white text-center top-1/2 left-0 transform -translate-x-1/2 bg-red-600 shadow-lg rounded p-4  max-w-60"
      style={{
        transform: `translateY(${-scrollY * 0.2}px)`, // Inverse effect
        height: "6rem", // Restrict height
        overflow: "hidden", // Hide overflow
      }}
    >
      <h1 className=" font-semibold" style={{ fontSize: "11px" }}>
        Manufacturing & Supply Learn More
      </h1>
      <p className="mt-2 " style={{ fontSize: "9px" }}>
        We produce high quality aluminium roofing sheet
      </p>

      <a style={{ fontSize: "11px" }}>more +</a>
    </div>
  );
};

export default CappedScroll;
