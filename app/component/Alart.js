// components/HamburgerMenu.js
"use client";

import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-md focus:outline-none"
        onClick={togglePopup}
      >
        *&#9776;
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={togglePopup}
        >
          Close
        </button>
      </div>

      {isOpen && (
        <div className="absolute -ml-96  mt-2 w-48 bg-white border rounded shadow-lg -z">
          <div>
            <div className=" sm:hidden bg-blue-950  justify-between items-center">
              <div className=" flex flex-col text-left p-16 ">
                <Link href="/" className="text-white hover:text-blue-500">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-blue-500">
                  About us
                </Link>
                <div className="relative inline-block text-left">
                  {/*}  <div>
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center justify-between  px-4 py-2 text-sm font-medium text-white bg-blue-950  rounded-md shadow-sm hover:bg-blue-500"
                    >
                      <Link href="pricelist">Our Prices</Link>
                      <span
                        className={`${
                          isOpen ? "rotate-180" : ""
                        } ml-2 transform transition-transform`}
                      >
                        ▼
                      </span>
                    </button>
                  </div>

                  {isOpen && (
                    <div className="  absolute right-0 z-10 w-48  mt-2 bg-blue-950 border border-gray-300 rounded-md shadow-lg">
                      <div className="py-1 flex flex-col ">
                        <Link
                          href="/our-price"
                          className="px-4 py-2 text-sm text-white"
                        >
                          Aluminuim Roofing Sheet{" "}
                        </Link>
                        <Link
                          href="/p"
                          className="px-4 py-2 text-sm text-white"
                        >
                          Stone Coated roofing Sheet{" "}
                        </Link>
                      </div>
                    </div>
                  )}*/}
                </div>
                <Link href="/blog" className="text-white hover:text-blue-500">
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-blue-500"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
