const Banner = () => {
  return (
    <div className="relative h-[70vh]">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-green-200 opacity-10"
        style={{
          backgroundImage: `url('https://i.ibb.co/x1KRTKb/Rectangle-4281.png?fbclid=IwAR3ND_yotWIVc1i9Td9afUnoi93qGlxGdIda8ZQSXe9zeip1OqWFXwf3igA')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <h2 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-3xl font-semibold text-black">
        I Grow By Helping People In Need
      </h2>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center bg-white  rounded-lg shadow-md border border-black">
        <input
          type="text"
          className="w-96 p-2 border-none outline-none rounded-l-md"
          placeholder="Search..."
        />
        <button className="px-4 py-2 bg-[#FF444A] text-white rounded-r-md ml-2">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
