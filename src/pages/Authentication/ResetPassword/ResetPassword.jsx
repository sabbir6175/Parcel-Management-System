import { useState } from "react";
import { Link } from "react-router";
import AuthImage from "../../../assets/authImage.png";
import ProFastLogo from "../../shared/proFastLogo/ProFastLogo";
const ResetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className=" min-h-screen flex ">
      <div className="w-full  grid md:grid-cols-2 gap-8 bg-white rounded-3xl  overflow-hidden">
        {/* Left: Login Form */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          {/* Logo */}
          <Link to={"/"} className="flex items-center gap-2 mb-8">
            <ProFastLogo></ProFastLogo>
          </Link>

          <div className="md:w-4/6 md:mx-auto">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Reset Password
            </h1>
            <p className="text-gray-600 mb-8">Reset your password</p>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="text"
                  placeholder="new password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="text"
                  placeholder="confirm password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                />
              </div>

              <Link to={"/signIn"}>
                <button
                  type="submit"
                  className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Reset Password
                </button>
              </Link>
            </form>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="hidden md:flex items-center justify-center p-8 bg-gradient-to-br from-lime-50 to-green-50">
          <div className="relative w-full max-w-md">
            {/* Replace with your actual illustration */}
            <img
              src={AuthImage}
              alt="Delivery illustration"
              className="w-full h-auto rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
