import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ForgetPassword from "../pages/Authentication/ForgetPassword/ForgetPassword";
import ResetPassword from "../pages/Authentication/ResetPassword/ResetPassword";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Verify from "../pages/Authentication/Verify/Verify";
import BeARider from "../pages/BeARider/BeARider";
import Coverage from "../pages/Coverage/Coverage";
import Home from "../pages/Home/Home/Home";

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
    ],
  },
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
