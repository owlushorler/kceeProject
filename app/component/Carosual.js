// components/Carousel.js
"use client";
import { useState, useEffect } from "react";
import one from "../images/WhatsApp Image 2024-12-10 at 14.55.13 (1).jpeg";
import two from "../images/WhatsApp Image 2024-12-10 at 14.55.13.jpeg";
import three from "../images/WhatsApp Image 2025-01-06 at 14.35.01.jpeg";
import Image from "next/image";
import SlidingContent from "./Nav";
import Link from "next/link";

const pictures = [one, two, three];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [off, setoff] = useState(true);

  // Function to go to the next picture
  const nextPicture = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  // Function to go to the previous picture
  const prevPicture = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  // Effect for automatic transition
  useEffect(() => {
    const interval = setInterval(() => {
      nextPicture();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative  h-96 flex  flex-col mt-40 justify-center">
      {/* Fixed Image at the Top  
      <Image 
        src=""
        alt="Top Fixed"  
        className="absolute top-0 left-0 w-full h-20 object-cover"  
      />  */}
      <div className="">
        <SlidingContent />
      </div>

      {/* Carousel Container */}
      <div className="  h-full">
        {/*<button  
          onClick={prevPicture}  
          className="absolute left-5 bg-white p-2 rounded-md shadow-md"  
        >  
          &lt; Prev  
        </button>  */}

        <Image
          src={pictures[currentIndex]}
          alt={`Picture ${currentIndex + 1}`}
          style={{ height: "38rem" }}
          className="w-screen   vx   -mt-52  transition-transform duration-200 object-cover"
        />

        {/* <button  
          onClick={nextPicture}  
          className="absolute right-5 bg-white p-2 rounded-md shadow-md"  
        >  
          Next &gt;  
        </button>  */}
      </div>

      {/* Fixed Image at the Bottom */}
      <div className="absolute  bottom-0 left-0 w-full px-5  h-20 object-cover">
        <div className="-mt-40   md:w-2/3 text-shadow-outline  text-white">
          <h1 className="md:text-2xl font-bold   text-xl ">
            Leading Aluminium Roofing Company In Lagos
          </h1>
          <p className="mb-6 text-sm md:text-sm text-str">
            Our aluminium roofing company is certified in manufacturing and
            installing high-quality aluminium roofing sheets in Lagos. We
            deliver top-tier roofing solutions tailored to the specific needs of
            residential, commercial, and industrial buildings.
          </p>
          <div className="flex flex-col w-40 gap-1">
            <Link href="pricelist">
              <button className="bg-blue-950 text-white font-semibold py-2 px-4 rounded transition duration-1000 ease-in-out hover:bg-red-500">
                View Price List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
