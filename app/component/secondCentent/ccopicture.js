"use client";
import Image from "next/image";

import kcee from "../../images/kcecco.jpeg";
import kcee2 from "../../images/kceeManger.jpeg";
import kcee3 from "../../images/senior patner.jpeg";

import React from "react";

const teamMembers = [
  {
    name: "Ugochukwu Nwobodo Jude",
    role: "CEO",
    image: kcee,
  },
  {
    name: "Nwobodo Kenechukwu Daniel",
    role: "Senior partner",
    image: kcee3,
  },

  {
    name: "Nwobodo Juliet Ujunwa",
    role: "FINANCE MANAGER",
    image: kcee2,
  },
];

const TeamMembers = () => {
  return (
    <div className="bg-blue-950 p-8">
      <h2 className="text-white text-4xl mb-8 text-center">
        Meet Our Aluminium Roofing Experts
      </h2>
      <div className="flex flex-wrap items-center gap-4 justify-center">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white w-60 h-72 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105"
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-full h-48 "
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
