import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiChevronDown,
  FiHome,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
} from "react-icons/fi";
import agent from "../../assets/agent-pending.png";

const BeARider = () => {
  const [division, setDivision] = useState([]);
  // console.log(division);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Rider Form Submitted:", data);
    reset(); // optional — form reset after submit
  };

  useEffect(() => {
    fetch("/public/data/division.json")
      .then((res) => res.json())
      .then((data) => setDivision(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-4 md:p-16">
        {/* Header */}
        <div className="mb-10 border-b-1 text-gray-400 border-dashed pb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Be a Rider
          </h1>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal <br /> packages to business shipments —
            we deliver on time, every time.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-0 justify-between">
          {/* Left: Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Tell us about yourself
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your age
                  </label>
                  <input
                    type="number"
                    {...register("age", { required: "Age is required" })}
                    placeholder="Your age"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
                  />
                  {errors.age && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.age.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Enter a valid email address",
                        },
                      })}
                      placeholder="Your Email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Region */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Region
                  </label>
                  <div className="relative">
                    <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      {...register("region", {
                        required: "Region is required",
                      })}
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 appearance-none bg-white"
                    >
                      <option value="">Select your region</option>
                      {division.map((divisionName, index) => (
                        <option key={index} value={divisionName}>
                          {divisionName}
                        </option>
                      ))}
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                  {errors.region && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.region.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* NID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    NID No
                  </label>
                  <input
                    type="text"
                    {...register("nid", { required: "NID is required" })}
                    placeholder="NID"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
                  />
                  {errors.nid && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.nid.message}
                    </p>
                  )}
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      {...register("contact", {
                        required: "Contact is required",
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: "Enter a valid phone number",
                        },
                      })}
                      placeholder="Contact"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />
                  </div>
                  {errors.contact && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contact.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Warehouse */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Which ware-house you want to work?
                </label>
                <div className="relative">
                  <FiHome className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    {...register("warehouse", {
                      required: "Please select a warehouse",
                    })}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 appearance-none bg-white"
                  >
                    <option value="">Select ware-house</option>
                    <option>Dhanmondi Warehouse</option>
                    <option>Mirpur Warehouse</option>
                    <option>Uttara Warehouse</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
                {errors.warehouse && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.warehouse.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right: Rider Illustration */}
          <div className="md:flex items-center justify-center p-8">
            <div className="relative w-full max-w-md">
              <img
                src={agent}
                alt="Delivery illustration"
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeARider;
