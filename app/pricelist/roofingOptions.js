import Image from "next/image";
import alum from "../images/WhatsApp Image 2025-02-18 at 10.38.11 (1).jpeg";
import stone from "../images/WhatsApp Image 2025-01-14 at 11.11.38 (2).jpeg";

const PriceList = () => {
  const roofingOptions = [
    {
      title: "Aluminium Roofing Sheets",
      image: alum,
      link: "our-price",
    },
    {
      title: "Stone Coated Roofing Sheets",
      image: stone,
      link: "p",
    },
  ];

  return (
    <div className="flex flex-col items-center  text-blue-950 mt-40 p-8">
      <h1 className="text-4xl font-bold mb-4">What roofing do you need?</h1>
      <div className="text-lg mb-8">
        Click on the image below to see our prices
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roofingOptions.map((option, index) => (
          <div key={index} className="relative group">
            <a href={option.link}>
              <Image
                src={option.image}
                alt={option.title}
                width={400}
                className=" h-96 w- rounded-lg hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-blue-950 hover:cursor-pointer hover:opacity-45 bg-opacity-70 text-white text-center p-2 rounded-b-lg">
                {option.title}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
