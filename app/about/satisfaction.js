// components/SatisfiedClients.js

export default function SatisfiedClients() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center p-10">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">
          Satisfied Clients And Homeowners
        </h2>
        <p className="text-md text-gray-700 mb-4">
          With over 5,000 satisfied clients, Jumac Aluminium Roofing has helped
          homeowners enjoy quieter, safer, and more aesthetically pleasing homes
          with our aluminium roofing sheets, aluminium coils, stone-coated
          tiles, and more.
        </p>
        <p className="text-md text-gray-700">
          Our clients consistently express their satisfaction with both the
          quality of our roofing products and our exceptional customer service,
          and we continually strive to exceed their expectations.
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          className="h-56"
          src="https://i.ibb.co/4RMv44C/How-to-keeping-customers-happy.jpg"
          alt="How-to-keeping-customers-happy"
        />
      </div>
    </div>
  );
}
