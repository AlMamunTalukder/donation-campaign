const SeeDetails = ({ donation }) => {
  const { id, details, name, image, price } = donation || {};

  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  relative">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-lg w-full" src={image} alt="" />
        <div className="absolute bottom-0 left-0 w-full h-12 bg-black opacity-80">
          <div>
            <h6 className="absolute top-1/2 left-6 transform -translate-y-1/2 mb-2 px-2 rounded-sm text-lg font-medium leading-tight text-black bg-[#FF444A] dark:text-[#FFF] z-10">
              Donate ${price}
            </h6>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h5 className="mb-4 font-bold text-xl text-neutral-600 dark:text-neutral-200">
          {name}
        </h5>
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          {details}
        </p>
      </div>
    </div>
  );
};

export default SeeDetails;
