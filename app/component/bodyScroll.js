"use client";
import { useEffect, useState } from "react";

const CappedScrolll = () => {
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
      className="absolute -z-10 w-60 text-white text-center top-1/2 left-0 transform -translate-x-1/2 bg-blue-950 shadow-lg rounded p-4  max-w-60"
      style={{
        transform: `translateY(${-scrollY * 0.5}px)`, // Inverse effect
        height: "15rem", // Restrict height
        overflow: "hidden", // Hide overflow
      }}
    ></div>
  );
};

export default CappedScrolll;
