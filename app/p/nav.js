import ExpandableContent from "../component/expand";
import SlidingContent from "../component/Nav";

export default function Home() {
  return (
    <div
      className="h-96 flex  text-center  bg-cover  bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/qJYW2Tv/Stone-Coated-Roofing-Tiles-1.jpg')",
      }}
    >
      <div className="  bg-opacity-40 py-4 text-center  bg-black w-screen  rounded-lg">
        <SlidingContent />

        <h1 className="text-4xl p-16 font-bold text-white">Our Pricing</h1>
        <p className="mt-4 text-xl text-white">Jumac Aluminium Roofing</p>
        <ExpandableContent />
      </div>
    </div>
  );
}
