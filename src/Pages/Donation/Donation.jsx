import { useEffect, useState } from "react";
import DonationCart from "./DonationCart";

const Donation = () => {
  const [donations, setDonations] = useState([]);

  const [noFound, setNoFound] = useState(false);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem("donation"));

    if (donationItem) {
      setDonations(donationItem);
    } else {
      setNoFound("No Data found");
    }
  }, []);

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-5 mt-4">
            {isShow
              ? donations.map((donation) => (
                  <DonationCart
                    key={donation.id}
                    donation={donation}
                  ></DonationCart>
                ))
              : donations
                  .slice(0, 4)
                  .map((donation) => (
                    <DonationCart
                      key={donation.id}
                      donation={donation}
                    ></DonationCart>
                  ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsShow(!isShow)}
        className="bg-[#009444] text-white py-2 mt-6 px-5 rounded block mx-auto"
      >
        See All
      </button>
    </div>
  );
};

export default Donation;
