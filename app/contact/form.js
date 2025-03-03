import Head from "next/head";

export default function Form() {
  const phoneNumber = "+2348069254277"; // Replace with your phone number
  const message = "Hello! I need assistance."; // Default message

  return (
    <div className="min-h-screen mt-10 w-screen flex flex-col text-center py-20 px-3 items-center justify-center bg-gray-100">
      <Head>
        <title>Get A Free Quotation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" md:flex  items-center justify-center md:flex-row  flex flex-col p-8 rounded-lg shadow-md w-full ">
        <div>
          <h1 className="text-2xl font-bold mb-4">Get A Free Quotation</h1>
          <p className="mb-6">
            Fill the form below to get a Free Quote and qualify for Exclusive
            discounts (we'll be in touch asap).
          </p>

          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="block w-full border rounded-md p-2 text-gray-900"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="block w-full border rounded-md p-2 text-gray-900"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="block w-full border rounded-md p-2 text-gray-900"
                rows="4"
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-950 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send
            </button>
          </form>

          <div className="mt-8 items-center ">
            <h2 className="font-bold text-blue-800">Follow Our Socials</h2>
            <div className="flex space-x-2">
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>

                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>

                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>

                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                YouTube
              </a>
            </div>
          </div>
        </div>
        {/**second flex */}
        <div className="mt-6 bg-white text-black rounded-lg  ">
          <div className="p-2  mx-auto rounded-lg ">
            <div className="bg-white justify-center gap-3 hover:shadow-2xl hover:cursor-pointer text-black flex flex-row  shadow-md">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/wFYFstRm/whatapp0222.webp"
                  alt="WhatsApp"
                  className="w-10 h-10 mr-2"
                />
              </div>
              <div className=" flex flex-col  items-center p-4">
                <p className="font-bold">Send a Message on WhatsApp</p>
                <p>Click here to contact us</p>

                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  {" "}
                  <div className="bg-green-600 rounded-lg p-1 text-white">
                    Send A Message
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-row justify-center gap-3 hover:shadow-2xl shadow-md p-3 ">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/PvJFjKw3/535239.png"
                    alt="location"
                    className="w-10 h-10 mr-2"
                  />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Address</h3>
                  <p>
                    198, Ipaja Road, Funmilayo Bus Stop,
                    <br /> Agege, Lagos State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-center gap-3 hover:shadow-2xl shadow-md p-3 ">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/hRbc1DB9/pngtree-email-icon-png-image-1757854.jpg"
                    alt="location"
                    className="w-10 h-10 mr-2"
                  />
                </div>
                <div>
                  <h3 className="font-bold mb-2">E-Mail</h3>
                  <p>info@topkenroofingsolutions.com</p>
                </div>
              </div>

              <div className="flex justify-center flex-row gap-3 hover:shadow-2xl shadow-md p-3 ">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/fzMGzszg/pngtree-phone-icon-in-solid-circle-png-image-2380227.jpg"
                    alt="location"
                    className="w-10 h-10 mr-2"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p> +2348069254277 +234 9067734915</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
