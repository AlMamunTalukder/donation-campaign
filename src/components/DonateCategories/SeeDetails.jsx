import { Link } from "react-router-dom";
import swal from "sweetalert";

const SeeDetails = ({ donation }) => {
  const { id, details, name, image, price } = donation || {};

  const addToDonation = () => {
    const AddDonationValue = [];

    const donationItem = JSON.parse(localStorage.getItem("donation"));
    if (!donationItem) {
      AddDonationValue.push(donation);
      localStorage.setItem("donation", JSON.stringify(AddDonationValue));
      swal("Good job!", "Add the value in Local Storage", "success");
    } else {
      const isExist = donationItem.find((donation) => donation.id === id);
      if (!isExist) {
        AddDonationValue.push(...donationItem, donation);
        localStorage.setItem("donation", JSON.stringify(AddDonationValue));
        swal("Good job!", "Add the value in Local Storage", "success");
      } else {
        swal("Already Added!", "Add another One!", "error");
      }
    }
  };

  return (
    <div className="justify-center items-center rounded-lg shadow-md ">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-lg w-full" src={image} alt="" />
        <div className="absolute bottom-0 left-0 w-full h-12 bg-black opacity-80">
          <div>
            <Link to={`/donations/${id}`}>
              <h6 className="absolute top-1/2 left-6 transform -translate-y-1/2 mb-2 px-2 rounded-sm text-lg font-medium leading-tight text-black bg-[#FF444A] dark:text-[#FFF] z-10">
                <button onClick={addToDonation} type="button">
                  Donate ${price}
                </button>
              </h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h5 className="mb-4 font-bold text-xl text-neutral-600 ">{name}</h5>
        <p className="text-base text-neutral-600 ">{details}</p>
      </div>
    </div>
  );
};

export default SeeDetails;
