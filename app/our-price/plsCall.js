export default function FooterMessage() {
  return (
    <div>
      <div className="bg-blue-950 p-4 text-center">
        <p className="text-white">
          Please always call to confirm the price. Thank you for your patronage.
        </p>
        <p className="font-bold text-white mt-2">
          Tel: 09067734915, 08069254277
        </p>
      </div>

      <div className="bg-yellow-600 p-6 text-center">
        <h2 className="text-white text-2xl font-bold">
          Get A Free Estimate and Exclusive Discounts
        </h2>
        <a
          href="/contact"
          className="inline-block mt-4 bg-blue-950 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
