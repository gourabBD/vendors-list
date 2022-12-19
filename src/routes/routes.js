import { createBrowserRouter } from "react-router-dom";
import EditDetails from "../components/EditDetails/EditDetails";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch(`https://js-tigers-server.vercel.app/vendors/count`),
  },
  {
    path: "/vendors/:id",
    element: <EditDetails></EditDetails>,
    loader: ({ params }) =>
      fetch(`https://js-tigers-server.vercel.app/vendors/${params.id}`),
  },
]);
