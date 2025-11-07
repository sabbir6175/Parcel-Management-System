import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom"; // Use react-router-dom for navigation
import { toast } from "react-toastify";
import AuthImage from "../../../assets/authImage.png";
import useAuth from "../../../hooks/useAuth";
import ProFastLogo from "../../shared/proFastLogo/ProFastLogo";
import SocialLogin from "../../shared/SocailLogin/SocialLogin";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.form || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    signInUser(data.email, data.password)
      .then(
        (result) => (
          console.log(result.user),
          toast.success("user login successfully"),
          navigate(from)
        )
      )
      .then((error) => toast.warn(error));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full grid md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden">
        {/* Left: Login Form */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <ProFastLogo />
          </Link>

          <div className="md:w-4/6 md:mx-auto">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 mb-8">Login with Profast</p>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"} // 👁️ Toggle effect
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all pr-10 ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                  />

                  {/* 👁️ Eye Icon Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Forgot Password Link */}
              <Link
                to="/forgetPassword"
                className="block text-sm hover:underline text-lime-600 hover:text-lime-700 font-medium"
              >
                Forgot Password?
              </Link>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Login
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link
                to="/signUp"
                className="text-lime-600 font-medium hover:underline"
              >
                Register
              </Link>
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center my-4">
              <span className="text-gray-500 text-sm">Or</span>
            </div>

            {/* Google Login */}
            <SocialLogin />
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="hidden md:flex items-center justify-center p-8 bg-gradient-to-br from-lime-50 to-green-50">
          <div className="relative w-full max-w-md">
            <img
              src={AuthImage}
              alt="Delivery illustration"
              className="w-full h-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
