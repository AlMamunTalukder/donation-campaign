import { useEffect, useState } from "react";
import DonationCart from "./DonationCart";

const Donation = () => {
  const [donations, setDonations] = useState([]);

  const [noFound, setNoFound] = useState(false);

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
            {donations.map((donation) => (
              <DonationCart
                key={donation.id}
                donation={donation}
              ></DonationCart>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
