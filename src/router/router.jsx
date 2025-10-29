import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import ForgetPassword from "../pages/Authentication/ForgetPassword/ForgetPassword";
import Verify from "../pages/Authentication/Verify/Verify";
import ResetPassword from "../pages/Authentication/ResetPassword/ResetPassword";
import BeARider from "../pages/BeARider/BeARider";

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
