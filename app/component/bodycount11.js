"use client";
import { useEffect, useState } from "react";

const CappedScroAA = () => {
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
      className="absolute text-white text-center  top-96 left-0 transform -translate-x-1/2 bg-blue-900 shadow-lg rounded p-4  max-w-60"
      style={{
        transform: `translateY(${-scrollY * 0.2}px)`, // Inverse effect
        height: "6rem", // Restrict height
        overflow: "hidden", // Hide overflow
      }}
    >
      <h1 className=" font-semibold" style={{ fontSize: "11px" }}>
        Stone Coated Tiles
      </h1>
      <p className="mt-2 " style={{ fontSize: "9px" }}>
        We sell high-grade Stone Coated Tiles
      </p>

      <a style={{ fontSize: "11px" }}>Learn More +</a>
    </div>
  );
};

export default CappedScroAA;
