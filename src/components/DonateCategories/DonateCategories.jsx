import AllCards from "./AllCards";

const DonateCategories = ({ donations }) => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 px-14">
        {donations?.map((donation) => (
          <AllCards key={donation.id} donation={donation}></AllCards>
        ))}
      </div>
    </div>
  );
};

export default DonateCategories;
