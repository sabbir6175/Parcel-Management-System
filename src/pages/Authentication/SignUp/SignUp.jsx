import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import AuthImage from "../../../assets/authImage.png";
import ProFastLogo from "../../shared/proFastLogo/ProFastLogo";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="  flex items-center justify-center">
      <div className="w-full  grid md:grid-cols-2 gap-8 bg-white rounded-3xl  overflow-hidden">
        {/* Left: Login Form */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          {/* Logo */}
          <Link to={"/"} className="flex items-center gap-2 mb-8">
            <ProFastLogo></ProFastLogo>
          </Link>

          <div className="md:w-4/6 md:mx-auto ">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Create an Account
            </h1>
            <p className="text-gray-600 mb-8">Register with Profast</p>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Register
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have any account?{" "}
              <Link
                to={"/signIn"}
                className="text-lime-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>

            <div className="flex items-center justify-center my-4">
              <span className="text-gray-500 text-sm">Or</span>
            </div>

            {/* Google Login */}
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded-xl transition-all">
              <FcGoogle className="w-5 h-5" />
              <span className="font-medium">Register with Google</span>
            </button>
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

export default SignUp;
