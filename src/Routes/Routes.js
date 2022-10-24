import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Booking from "../Page/Booking/Booking";
import Home from "../Page/Home/Home";
import Hotels from "../Page/Hotels/Hotels";
import Login from "../Page/Login/Login";
import SingUp from "../Page/Sing Up/SingUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch(
            "https://travel-guru-server-cristain333.vercel.app/api/v2/places"
          );
        },
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: `/api/v2/details/:id`,
        loader: async ({ params }) => {
          return fetch(
            `https://travel-guru-server-cristain333.vercel.app/api/v2/details/${params.id}`
          );
        },
        element: <PrivateRoute><Booking /></PrivateRoute>,
      },
      {
        path: "/hotels/:id",
        loader: async({params})=>{
          return fetch(`https://travel-guru-server-cristain333.vercel.app/hotels/${params.id}`)
        },
        element: <PrivateRoute><Hotels /></PrivateRoute>,
      },
    ],
  },
]);
export default router;
