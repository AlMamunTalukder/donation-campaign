import { createBrowserRouter } from "react-router-dom";
import FullLayout from "../FullLayout/FullLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import SeeDetails from "../components/DonateCategories/SeeDetails";
import Donate from "../Pages/Donate/Donate";

const createdRouter = createBrowserRouter([
  {
    path: "/",
    element: <FullLayout></FullLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donations/:id",
        element: <Donate></Donate>,
        loader: () => fetch("/donation.json"),
      },
      // {
      //   path: "/donations/:id",
      //   element: <Donation></Donation>,
      //   loader: () => fetch("/donation.json"),
      // },
    ],
  },
]);

export default createdRouter;
