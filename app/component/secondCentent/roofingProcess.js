// components/RoofingProcess.js
export default function RoofingProcess() {
  return (
    <section className="bg-red-700 py-10">
      <h2 className="text-white text-3xl text-center mb-8">
        Our Roofing Process
      </h2>
      <div className="container flex flex-col  items-center  mx-auto sm:grid  sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <div className="bg-blue-900 p-1 max-w-64 h-52 hover:cursor-pointer ">
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-700 hover:text-white ">
            <div className="flex items-center mb-4">
              <img
                className="w-11"
                src="https://i.ibb.co/wgsd81B/email.jpg"
                alt="email"
              />
              <h3 className="text-lg font-semibold ml-2">Send A Message</h3>
            </div>
            <p className="text-gray-700 hover:text-white">
              We are eager to learn about your ideas and the specific roofing
              solutions you are looking for.
            </p>
          </div>
        </div>
        <div className="bg-blue-900 h-52 p-1 max-w-64  hover:cursor-pointer ">
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-700 hover:text-white ">
            <div className="flex items-center mb-4">
              <img
                className="w-11"
                src="https://i.ibb.co/PMN1ccr/measure.jpg"
                alt="measure"
              />
              <h3 className="text-lg font-semibold ml-2">Get Measurements</h3>
            </div>
            <p className="text-gray-700 hover:text-white">
              We provide accurate measurements to ensure your aluminium roofing
              fits perfectly.
            </p>
          </div>
        </div>
        <div className="bg-blue-900 h-52 p-1 max-w-64  hover:cursor-pointer ">
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-700 hover:text-white ">
            <div className="flex items-center mb-4">
              <img
                className="w-11"
                src="https://i.ibb.co/4N2jCrP/pay.png"
                alt="pay"
              />
              <h3 className="text-lg font-semibold ml-2">Payment</h3>
            </div>
            <p className="text-gray-700 hover:text-white">
              Once payment is complete, we begin production the same day for
              timely delivery.
            </p>
          </div>
        </div>
        <div className="bg-blue-900 h-52 p-1 max-w-64  hover:cursor-pointer ">
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-700 hover:text-white ">
            <div className="flex items-center mb-4">
              <img
                className="w-11"
                src="https://i.ibb.co/4NzCy6F/install.webp"
                alt="install"
              />
              <h3 className="text-lg font-semibold ml-2">Installation</h3>
            </div>
            <p className=" hover:text-white text-gray-700">
              Our team is ready to deliver and install your aluminium roof
              efficiently, ensuring your satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
