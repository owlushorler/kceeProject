// components/PriceTable.js

export default function PriceTable() {
  const data = [
    {
      gauge: "0.40mm",
      longspan: "N 4,550",
      steptiles: "-------",
      metcop: "-------",
    },
    {
      gauge: "0.45 (B) mm",
      longspan: "N 5,200",
      steptiles: "-------",
      metcop: "-------",
    },
    {
      gauge: "0.45 (A) mm",
      longspan: "N 5,600",
      steptiles: "N 5,700",
      metcop: "N 5,800",
    },
    {
      gauge: "0.50 mm",
      longspan: "N 6,100",
      steptiles: "N 6,200",
      metcop: "N 6,300",
    },
    {
      gauge: "0.55 (B) mm",
      longspan: "N 6,500",
      steptiles: "N 6,600",
      metcop: "N 6,700",
    },
    {
      gauge: "0.55 (A) mm",
      longspan: "N 7,200",
      steptiles: "N 7,300",
      metcop: "N 7,400",
    },
    {
      gauge: "0.58 mm",
      longspan: "N 7,900",
      steptiles: "N 8,000",
      metcop: "N 8,100",
    },
    {
      gauge: "0.60 (B) mm",
      longspan: "N 8,400",
      steptiles: "-------",
      metcop: "-------",
    },
    {
      gauge: "0.60 (A) mm",
      longspan: "N 8.900",
      steptiles: "-------",
      metcop: "-------",
    },
    //{
    // gauge: "0.70 (B) mm",
    // longspan: "N 10,300",
    // steptiles: "-------",
    //  metcop: "-------",
    // },
    {
      gauge: "0.70 (A) mm",
      longspan: "N 12,600",
      steptiles: "-------",
      metcop: "-------",
    },
  ];

  return (
    <div className="overflow-x-auto px-3 md:px-52 -mt-48   ">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="py-2 px-4 border border-gray-300">
              GAUGE/THICKNESS
            </th>
            <th className="py-2 px-4 border border-gray-300">LONGSPAN PRICE</th>
            <th className="py-2 px-4 border border-gray-300">
              STEPTILES PRICE
            </th>
            <th className="py-2 px-4 border border-gray-300">METCOP PRICE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border border-gray-300">{item.gauge}</td>
              <td className="py-2 px-4 border border-gray-300">
                {item.longspan}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {item.steptiles}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {item.metcop}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
