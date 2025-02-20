// components/ContractorSection.js

export default function ContractorSection() {
  return (
    <div className="flex justify-center items-center bg-blue-950 p-8">
      <div className="max-w-3xl bg-yellow-600 shadow-md rounded-lg p-6 flex items-center flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-blue-600 text-2xl font-bold mb-4">
            Roofing General Contractor
          </h2>
          <p className="mb-4">
            At Top Ken Roofing Solutions, we aim to provide a complete
            experience in selling, installing, and maintaining aluminium roofing
            sheets. Our goal is to make the process as seamless as possible for
            our clients, and our factory-direct prices ensure you get the best
            aluminium roofing price for your investment. We offer comprehensive
            roofing solutions tailored to your home and business needs.
          </p>
          <h3 className="text-lg font-semibold mb-2">Services Offered:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Sales of Aluminium Coils</li>
            <li>Sales of Stone Coated Tiles</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img
            src="https://i.ibb.co/0sywW1v/roofcontruct.jpg"
            alt="roofcontruct"
            className="h-96"
          />
        </div>
      </div>
    </div>
  );
}
