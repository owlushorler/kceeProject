"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import HamburgerMenu from "./Alart";
import Box from "./dialogAlaet";

const SlidingContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [luck, setluck] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Trigger the sliding effect after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transform transition-transform duration-1000 ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <nav
        className="hidden sm:flex sm:justify-end  bg-blue-950 text-white shadow-md text-center rounded-lg   "
        style={{ width: "40rem", height: "100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className=" space-x-20  flex justify-between items-center">
            <div className="text-lg   font-semibold">
              <Link href="/">
                <img
                  src="https://i.ibb.co/LdZx030c/Whats-App-Image-2025-02-06-at-20-49-04.jpg"
                  alt="48cd37a027bb45f29c58ceabdce99972-1737213099"
                  className="h-20 w-32 rounded-lg"
                />
              </Link>
            </div>
            <div className="space-x-4 text-white ">
              <Link href="/" className="text-white hover:text-blue-500">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-blue-500">
                About us
              </Link>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center bg-blue-950 justify-between w-full px-4 py-2 text-sm font-medium text-white   rounded-md shadow-sm hover:bg-blue-500"
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
                  <div className="absolute right-0 z-10 w-48  mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                    <div className="py-1 flex flex-col ">
                      <Link
                        href="/our-price"
                        className="px-4 py-2 text-sm text-gray-700"
                      >
                        Aluminuim Roofing Sheet{" "}
                      </Link>
                      <Link
                        href="/p"
                        className="px-4 py-2 text-sm text-gray-700"
                      >
                        Stone Coated roofing Sheet{" "}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/blog" className="text-white hover:text-blue-500">
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-white 0 hover:text-blue-500"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        *
      </nav>
      <div>
        <div className=" sm:hidden z-20 flex justify-between items-center  px-11 bg-blue-950 shadow-md text-center rounded-lg ">
          <div className="text-lg   font-semibold">
            <Link href="/">
              <img
                src="https://i.ibb.co/LdZx030c/Whats-App-Image-2025-02-06-at-20-49-04.jpg"
                alt="48cd37a027bb45f29c58ceabdce99972-1737213099"
                className="h-20 w-32   rounded-lg"
              />
            </Link>
          </div>

          <div
            onClick={() => setluck(false)}
            className="hover:cursor-pointer text-white"
          >
            <Box />
            {/*&#9776;*/}
          </div>

          {/* {!luck && (
            <div
              onClick={() => setluck(true)}
              className="hover:cursor-pointer text-blue-700"
            >
              
            </div>
          )}*/}
        </div>

        {/*{!luck && (
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
                  <div>
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
                  )}
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
        )}*/}
      </div>
    </div>
  );
};

export default SlidingContent;
