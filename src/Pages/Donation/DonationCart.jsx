// import { Link } from "react-router-dom";

const DonationCart = ({ donation }) => {
  const { id, category, name, image, price, bgColor, fontColor, catBgColor } =
    donation || {};
  const cardStyle = {
    backgroundColor: bgColor,
    fColor: fontColor,
    cateBGColor: catBgColor,
  };

  return (
    <div
      className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      style={{ backgroundColor: cardStyle.backgroundColor }}
    >
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img src={image} alt="image" className="h-full w-full object-cover" />
      </div>

      <div className="p-6">
        <div className="card-actions  ">
          <button
            className=" text-sm  px-2  rounded"
            style={{
              color: cardStyle.fColor,
              backgroundColor: cardStyle.cateBGColor,
            }}
          >
            {category}
          </button>
        </div>

        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 ">
          {name}
        </h4>
        <p
          className="mb-8 block font-sans text-base font-bold leading-relaxed text-gray-700 antialiased"
          style={{ color: cardStyle.fColor }}
        >
          ${price}
        </p>

        <div className="card-actions ">
          <button
            className=" text-white py-2 px-4 rounded"
            style={{ backgroundColor: cardStyle.fColor }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCart;
