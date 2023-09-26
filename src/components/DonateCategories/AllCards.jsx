import { Link } from "react-router-dom";

const AllCards = ({ donation }) => {
  const { id, category, name, image, bgColor } = donation || {};

  const cardClassName = ``;

  return (
    <Link to={`/donations/${id}`}>
      <div className="relative flex w-72 flex-col rounded-xl bg-[#0052ff26] text-[#0052FF] bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" alt={name} />
        </div>
        <div className="p-6 ">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {category}
          </p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllCards;
