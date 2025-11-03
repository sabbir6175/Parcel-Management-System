import { useEffect, useState } from "react";
import img from "../../../assets/service.png";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-[#03373D] p-10 rounded-xl my-20">
      <SectionTitle
        heading={"Our Service"}
        subHeading={
          "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
        }
      ></SectionTitle>

      {/* ✅ dynamic data load */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ease-linear transform hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#CAEB66]"
          >
            <img
              className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform duration-300"
              src={img}
              alt={item.title}
            />
            <h1 className="text-black text-lg font-semibold mb-2 group-hover:text-[#03373D] transition-colors duration-300">
              {item.title}
            </h1>
            <p className="text-gray-600 font-light text-sm group-hover:text-[#03373D] transition-colors duration-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
