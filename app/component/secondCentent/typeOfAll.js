// components/StepTiles.js
import React from "react";
import Hom from "../bodycontrol";

const stepTilesData = [
  {
    title: "Long Span",
    description:
      "Durable, long-lasting, and perfect for large-scale roofing projects.",
    imageUrl:
      "https://i.ibb.co/q5FkzND/Whats-App-Image-2025-01-06-at-14-35-03-1.jpg",
  },
  {
    title: "Metcopo",
    description:
      "Beautifully designed to enhance the aesthetic appeal of any building.",
    imageUrl:
      "https://i.ibb.co/xhPLMqJ/Whats-App-Image-2025-01-06-at-14-35-04.jpg",
  },
  {
    title: "Step Tiles",
    description:
      "Stylish Step Tiles to enhance your roof’s beauty and durability.",
    imageUrl:
      "https://i.ibb.co/KGPGwzM/Whats-App-Image-2025-01-06-at-14-35-02.jpg",
  },
];

const StepTiles = () => {
  return (
    <div>
      <Hom />
      <div className="text-center text-3xl p-4">
        <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-900"></span>
        Types of Aluminium Roofing Sheets
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-6 p-4 bg-gray-200">
        {stepTilesData.map((tile, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <a href="#" className="block">
              <img
                alt=""
                src={tile.imageUrl}
                className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div className=" text-center p-4">
                <strong className="font-medium">{tile.title}</strong>

                <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p className="mt-0.5 opacity-50 sm:mt-0">{tile.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepTiles;
