import { useLoaderData } from "react-router-dom";
import DonateCategories from "../../components/DonateCategories/DonateCategories";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
  const donations = useLoaderData();
  return (
    <div>
      <Banner></Banner>

      <DonateCategories donations={donations}></DonateCategories>
    </div>
  );
};

export default Home;
