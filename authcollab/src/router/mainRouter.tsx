import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../pages/HomeScreen";
import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/Login";
import UVerify from "../pages/Auth/Verifys";
import VerificationCard from "../pages/Auth/Verifys";
import NotificationCard from "../pages/Auth/Notification";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/verify",
    element: <VerificationCard />,
  },
  {
    path: "/notify",
    element: <NotificationCard message={undefined} />,
  },
]);
