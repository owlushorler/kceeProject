import Hom from "../component/bodycontrol";

export default function CompanyInfo() {
  return (
    <div>
      <Hom />
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Establishment Info */}
        <div className="border-l-4 border-yellow-600 pl-4">
          <h2 className="text-2xl font-bold mb-2">Established In 2017</h2>
          <p className="text-sm text-gray-700">
            Founded in 2017 by our Managing Director, Mr. Daniel Kenechukwu
            Nwobodo, Top Ken Roofing Solutions has been at the forefront of
            aluminium roofing sheet manufacturing and supply for residential,
            commercial, and industrial purposes
          </p>
          <p className="text-lg text-gray-700 mt-4">
            With over a decade of expertise, we've built a reputation for
            reliability and excellence in the roofing industry.
          </p>
        </div>

        {/* Certification Info */}
        <div className="border-l-4 border-yellow-600 pl-4">
          <h2 className="text-2xl font-bold mb-2">Certified In April 2024</h2>
          <p className="text-lg text-gray-700">
            In November 2024, Top Ken Roofing Solutions earned its official
            certification after more than eight years of gaining extensive
            experience in the roofing industry.
          </p>
          <p className="text-sm text-gray-700 mt-4">
            Since then, we have worked with hundreds of roofing contractors and
            engineers, helping them deliver superior roofing solutions to their
            customers.
          </p>
        </div>
      </div>
    </div>
  );
}
