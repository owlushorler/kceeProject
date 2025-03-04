// components/PricingSection.js
"use client";

import { useEffect, useRef, useState } from "react";

const pricingData = [
  {
    design: "Bond Design",
    priceOld: "N6400 for 0.55mm",
    priceNew: "N5850 for 0.45mm",
    logo: "",
    imgUrl:
      "https://i.ibb.co/tzXcSsC/Whats-App-Image-2025-01-15-at-06-49-04.jpg",
  },
  {
    design: "Classic Design",
    priceOld: "N6400 for 0.55mm",
    priceNew: "N5850 for 0.45mm",
    imgUrl:
      "https://i.ibb.co/h9Scvtx/Whats-App-Image-2025-01-15-at-06-49-10.jpg",
  },
  {
    design: "Shingle Design",
    priceOld: "N6400 for 0.55mm",
    priceNew: "N5850 for 0.45mm",
    imgUrl:
      "https://i.ibb.co/Qd2ZHY8/Whats-App-Image-2025-01-15-at-06-49-15.jpg",
  },
  {
    design: "Milano Design",
    priceOld: "N6400 for 0.55mm",
    priceNew: "N5850 for 0.45mm",
    imgUrl:
      "https://i.ibb.co/c23v3cS/Whats-App-Image-2025-01-15-at-06-49-23.jpg",
  },
  {
    design: "Roman Design",
    priceOld: "N6400 for 0.55mm",
    priceNew: "N5850 for 0.45mm",
    imgUrl:
      "https://i.ibb.co/q9s8Vnk/Whats-App-Image-2025-01-15-at-06-49-35.jpg",
  },
  {
    design: "Flatsheet & Ridges Cover",
    priceOld: "5600 per sq meter and",
    priceNew: "N2500 per Ridge",
    imgUrl:
      "https://i.ibb.co/qRqWDtg/Whats-App-Image-2025-01-15-at-06-49-36.jpg",
  },
];

export default function PricingSection() {
  const [visibleItems, setVisibleItems] = useState(
    Array(pricingData.length).fill(false)
  );
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemsRef.current.indexOf(entry.target);
          setVisibleItems((prev) => {
            const newVisibleItems = [...prev];
            newVisibleItems[index] = true;
            return newVisibleItems;
          });
          observer.unobserve(entry.target); // Unobserve after visibility is achieved.
        }
      });
    });

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-8 -mt-40 bg-gray-100">
      <h1 className="text-4xl text-blue-950 font-bold text-center mb-4">
        Top Ken Prices For Stone Coated Roofing Sheets
      </h1>
      <h2 className="text-2xl  font-semibold text-center mb-2">
        Stone coated roofing sheets have gained popularity
      </h2>
      <div className="grid  place-items-center content-center grid-cols-1 md:grid-cols-2   gap-6">
        {pricingData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)} // Reference for the Intersection Observer
            className={`bg-white flex flex-col border rounded-lg   shadow-md p-4 items-center text-center transition-all   
              ${visibleItems[index] ? "animate-slide-in" : "opacity-0"}`}
          >
            <img
              src="https://i.ibb.co/tpDfLpWg/Whats-App-Image-2025-02-06-at-20-49-04-1.jpg"
              alt={item.design}
              className="h-14 W-14"
            />
            <img
              src={item.imgUrl}
              alt={item.design}
              className="h-64  w-96  rounded"
            />
            <h3 className="text-xl font-bold text-blue-950 mt-2">
              {item.design}
            </h3>
            <div className="text-sm text-white py-2 bg-blue-950 w-96   text-center">
              {item.priceOld}, <br /> {item.priceNew}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
