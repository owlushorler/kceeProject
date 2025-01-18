// components/RoofingPost.js

const RoofingPost = ({ imageUrl, title, date }) => {
  return (
    <div className="bg-white rounded-lg hover:cursor-pointer mt-20 shadow-md overflow-hidden mb-4">
      <img
        src="https://i.ibb.co/0nJH1dR/blog5.png"
        alt={title}
        className="w-too"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">
          Best Types of Aluminium Roofing Sheets In Nigeria For 2025
        </h3>
        <p className="text-gray-500">January 10, 2025</p>
      </div>
    </div>
  );
};

export default RoofingPost;
