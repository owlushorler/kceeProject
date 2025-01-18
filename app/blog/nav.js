import ExpandableContent from "../component/expand";
import SlidingContent from "../component/Nav";

export default function Nav() {
  return (
    <div
      className="h-96 flex  text-center  bg-cover  bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/0nJH1dR/blog5.png')",
      }}
    >
      <div className="  bg-opacity-40 py-4 text-center  bg-black w-screen  rounded-lg">
        <SlidingContent />

        <h1 className="text-4xl p-16 font-bold text-white">BLOG</h1>

        <ExpandableContent />
      </div>
    </div>
  );
}
