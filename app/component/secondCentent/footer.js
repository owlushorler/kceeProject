import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-950">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-white sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-white lg:text-left lg:text-lg">
              <p>Contact </p>
              198 Ipaja Road, Off Iyana Ipaja, Agege, Lagos State, Nigeria
              info@topkenroofingsolutions.com
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a
                className="text-white transition hover:text-gray-700/75"
                href="https://www.facebook.com/share/18fzN3QZfz/?mibextid=wwXIfr"
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
                className="text-white transition hover:text-gray-700/75"
                href="https://www.youtube.com/@TopKenRoofingSolutions" // Replace with your YouTube channel link
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">YouTube</span>

                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.496 6.168a3.002 3.002 0 00-2.115-2.115C19.646 4.16 12 4.16 12 4.16s-7.646 0-9.381.893A3.002 3.002 0 00.504 6.168C.002 8.1 0 12 0 12s0 3.9.504 5.832a3.002 3.002 0 002.115 2.115C4.354 19.84 12 19.84 12 19.84s7.646 0 9.381-.893a3.002 3.002 0 002.115-2.115C24 15.9 24 12 24 12s0-3.9-.504-5.832zm-13.496 8.174V9.658l6.337 2.342-6.337 2.342z" />
                </svg>
              </a>

              <a
                className="text-white transition hover:text-gray-700/75"
                href="https://www.tiktok.com/@topkenroofingsolutions?_t=ZM-8uhXHrkLW90&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">TikTok</span>

                <div className="flex items-center justify-center w-8 h-8 bg-blue-950 rounded-full">
                  <span className="text-sm  text-white">Tik</span>
                </div>
              </a>

              <a
                className="text-white transition hover:text-gray-700/75"
                href="https://www.instagram.com/topkenroofingsolutions?igsh=MWVpZTF3ZGV1OGVldw%3D%3D&utm_source=qr"
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
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div className="text-sm">
              <strong className="font-medium text-white"> Quick Links</strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    className="text-white transition hover:text-gray-700/75"
                    href="/"
                  >
                    {" "}
                    ~ Home{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-gray-700/75"
                    href="about"
                  >
                    ~ About Us
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-gray-700/75"
                    href="p"
                  >
                    ~ Price of Stone Coated Roofing Sheets
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-gray-700/75"
                    href="our-price"
                  >
                    ~ Prices of Aluminium Roofing Sheets
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-gray-700/75"
                    href="contact"
                  >
                    ~ Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-gray-700/75"
                    href="pricelist"
                  >
                    ~ Our Prices
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-gray-700/75"
                    href="/"
                  >
                    ~ Thank You
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <img
                src="https://i.ibb.co/tpDfLpWg/Whats-App-Image-2025-02-06-at-20-49-04-1.jpg"
                alt="logo"
                className="h-52 W-52"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t bg-yellow-600 border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-white">
            © Company 2025. All rights reserved.
            <br />
            Created by
            <a
              href="#"
              className="text-white underline transition hover:text-gray-700/75"
            >
              owlushorler
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
