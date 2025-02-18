import Link from "next/link";
import { useState } from "react";
import ReactDOM from "react-dom";

const Dialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0  flex -ml-96   items-center justify-center z-50 backdrop-blur-sm">
      <div className="absolute   mt-2 w-48 bg-white border rounded shadow-lg -z">
        <div>
          <div className=" sm:hidden  h-screen opacity-95 bg-blue-950 w-screen  justify-between items-center">
            <div className=" flex flex-col items-center gap-3 text-2xl text-left p-16 ">
              <img
                src="https://i.ibb.co/LdZx030c/Whats-App-Image-2025-02-06-at-20-49-04.jpg"
                alt="48cd37a027bb45f29c58ceabdce99972-1737213099"
                className="h-32 w-32 rounded-lg"
              />

              <Link href="/" className="text-white hover:text-blue-500">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-blue-500">
                About us
              </Link>
              <Link href="pricelist" className="text-white hover:text-blue-500">
                our Price
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
              <Link href="/contact" className="text-white hover:text-blue-500">
                Contact
              </Link>
              <button
                className="mt-4 bg-blue-950 text-white p-2 rounded"
                onClick={onClose}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Box = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5">
      <button
        className=" text-white p-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        &#9776;
      </button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Box;
