// components/ContactSection.js

import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="bg-blue-950 text-center text-white p-6">
      <h1 className="text-3xl font-bold">Get In Touch With Us</h1>
      <p className="mt-2 text-lg">
        Your Best Aluminum Roofing Company In Lagos
      </p>
      <Link href="contact">
        <button className="mt-4 bg-yellow-600 text-white py-2 px-4 rounded hover:bg-blue-600">
          Contact Us
        </button>
      </Link>
    </div>
  );
}
