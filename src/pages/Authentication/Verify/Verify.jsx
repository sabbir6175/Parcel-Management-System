import { useRef, useState } from "react";
import { Link } from "react-router-dom"; // react-router-dom ব্যবহার করা হয়েছে
import AuthImage from "../../../assets/authImage.png";
import ProFastLogo from "../../shared/proFastLogo/ProFastLogo";

// --- নতুন OTP ইনপুট কম্পোনেন্ট ---
const OtpInput = ({ length = 6, onOtpChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    // 1. ইনপুট ভ্যালু আপডেট করা
    const value = element.value.replace(/[^0-9]/g, ""); // শুধু সংখ্যা রাখা
    if (value.length > 1) return; // একাধিক সংখ্যা হলে উপেক্ষা করা

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // 2. প্যারেন্ট কম্পোনেন্টে আপডেট জানানো
    if (onOtpChange) {
      onOtpChange(newOtp.join(""));
    }

    // 3. স্বয়ংক্রিয়ভাবে পরের ফিল্ডে যাওয়া
    if (value !== "" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // 4. Backspace চেপে আগের ফিল্ডে যাওয়া
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-between gap-2 md:gap-3">
      {otp.map((data, index) => {
        return (
          <input
            key={index}
            type="text"
            name={`otp-${index}`}
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            // Tailwind CSS দিয়ে ছবির মতো ডিজাইন তৈরি
            className="w-10 h-10 md:w-12 md:h-12
                       text-center text-xl font-semibold
                       bg-white
                       border-2 border-gray-300 hover:border-lime-500
                       focus:border-lime-600 focus:ring-0
                       rounded-xl
                       transition-all duration-300 outline-none"
            // প্রথম ইনপুটটিতে স্বয়ংক্রিয় ফোকাস করা
            autoFocus={index === 0}
          />
        );
      })}
    </div>
  );
};
// ---------------------------------

const Verify = () => {
  const [otpCode, setOtpCode] = useState("");

  const handleVerification = (e) => {
    e.preventDefault();
    if (otpCode.length === 6) {
      console.log("OTP Submitted:", otpCode);
      // এখানে আপনার ভেরিফিকেশন লজিক যুক্ত করুন
    } else {
      alert("Please enter the complete 6-digit code.");
    }
  };

  return (
    <div className=" min-h-screen flex">
      <div className="w-full  grid md:grid-cols-2 gap-8 bg-white rounded-3xl  overflow-hidden">
        {/* Left: Login Form */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <Link to={"/"} className="flex items-center gap-2 mb-8">
            <ProFastLogo />
          </Link>

          <div className="md:w-full max-w-sm mx-auto">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Enter Code
            </h1>
            <p className="text-gray-600 mb-8">
              Enter 6 digit code that we sent in your email address
            </p>

            {/* Form */}
            <form onSubmit={handleVerification} className="space-y-6">
              {/* <--- এখানে ৬-ডিজিট ইনপুট বক্স যোগ করা হলো ---> */}
              <OtpInput onOtpChange={setOtpCode} />
              <Link to={"/resetPassword"}>
                <button
                  type="submit"
                  className={`w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 rounded-xl transition-all duration-200 shadow-md ${
                    otpCode.length !== 6 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={otpCode.length !== 6}
                >
                  Verify Code
                </button>
              </Link>
            </form>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Remember your password?{" "}
              <Link
                to={"/signIn"}
                className="text-lime-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="hidden md:flex items-center justify-center p-8 bg-gradient-to-br from-lime-50 to-green-50">
          <div className="relative w-full max-w-md">
            <img
              src={AuthImage}
              alt="Delivery illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
