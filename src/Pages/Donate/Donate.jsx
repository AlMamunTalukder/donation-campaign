import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";

import SeeDetails from "../../components/DonateCategories/SeeDetails";

const Donate = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();

  const donations = useLoaderData();

  useEffect(() => {
    const seeDonation = donations?.find(
      (donation) => donation.id === Number(id)
    );
    setDonation(seeDonation);
  }, [id, donations]);

  return (
    <div>
      <SeeDetails donation={donation}></SeeDetails>
    </div>
  );
};

export default Donate;
