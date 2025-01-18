export default function FooterMessage() {
  return (
    <div>
      <div className="bg-blue-100 p-4 text-center">
        <p className="text-gray-700">
          Please always call to confirm the price. Thank you for your patronage.
        </p>
        <p className="font-bold text-gray-800 mt-2">
          Tel: 09011424578, 08132361070, 07084531118
        </p>
      </div>

      <div className="bg-red-700 p-6 text-center">
        <h2 className="text-white text-2xl font-bold">
          Get A Free Estimate and Exclusive Discounts
        </h2>
        <a
          href="/contact"
          className="inline-block mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
