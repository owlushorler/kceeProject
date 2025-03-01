import ExpandableContent from "../component/expand";
import SlidingContent from "../component/Nav";

export default function AboutUs() {
  return (
    <div
      className="h-96 flex  text-center  bg-cover  bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/q5FkzND/Whats-App-Image-2025-01-06-at-14-35-03-1.jpg')",
      }}
    >
      <div className=" bg-opacity-40 py-4 text-center  bg-black w-screen  rounded-lg">
        <SlidingContent />

        <h1 className="text-4xl p-16 font-bold text-white">About Us</h1>
        <p className="mt-4 text-xl text-white">TOPKEN ROOFING SOLUTION</p>
        <ExpandableContent />
      </div>
    </div>
  );
}
