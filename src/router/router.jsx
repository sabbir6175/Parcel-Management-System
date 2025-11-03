import { createBrowserRouter } from "react-router";
import DashboardLayout from "../Layouts/DashboardLayout";
import RootLayout from "../Layouts/RootLayout";
import ForgetPassword from "../pages/Authentication/ForgetPassword/ForgetPassword";
import ResetPassword from "../pages/Authentication/ResetPassword/ResetPassword";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Verify from "../pages/Authentication/Verify/Verify";
import BeARider from "../pages/BeARider/BeARider";
import Coverage from "../pages/Coverage/Coverage";
import MyParcel from "../pages/Dashboard/MyParcels/MyParcel";
import Home from "../pages/Home/Home/Home";
import SendParcel from "../pages/Pricing/SendParcel";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "beARider",
        Component: BeARider,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("./data/warehouses.json"),
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
        loader: () => fetch("./data/warehouses.json"),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myParcels",
        Component: MyParcel,
      },
    ],
  },

  //login
  {
    path: "signIn",
    Component: SignIn,
  },
  {
    path: "signUp",
    Component: SignUp,
  },
  {
    path: "forgetPassword",
    Component: ForgetPassword,
  },
  {
    path: "verify",
    Component: Verify,
  },
  {
    path: "resetPassword",
    Component: ResetPassword,
  },
]);
