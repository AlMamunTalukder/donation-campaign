import { Link } from "react-router-dom";

const AllCards = ({ donation }) => {
  const { id, category, name, image, bgColor, fontColor, catBgColor } =
    donation || {};
  const cardStyle = {
    backgroundColor: bgColor,
    fColor: fontColor,
    cateBGColor: catBgColor,
  };

  return (
    <Link to={`/donations/${id}`}>
      <div
        className="relative flex w-72 flex-col rounded-xl bg-clip-border  shadow-md"
        style={{ backgroundColor: cardStyle.backgroundColor }}
      >
        <div className="relative overflow-hidden rounded-t-md">
          <img src={image} className="h-full w-full object-cover" />
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
          <div className="mb-2 flex items-center justify-between ">
            <p
              className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
              style={{ color: cardStyle.fColor }}
            >
              {name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllCards;
