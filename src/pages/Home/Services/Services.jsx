import img from "../../../assets/service.png";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Services = () => {
  return (
    <div className="bg-[#03373D] p-10 rounded-xl my-20">
      <SectionTitle
        heading={"Our Service"}
        subHeading={
          "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
        }
      ></SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-8">
        {[
          {
            title: "Express & Standard Delivery",
            text: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
          },
          {
            title: "Nationwide Delivery",
            text: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
          },
          {
            title: "Fulfillment Solution",
            text: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
          },
          {
            title: "Cash on Home Delivery",
            text: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
          },
          {
            title: "Corporate Service / Contract In Logistics",
            text: "Customized corporate services which includes warehouse and inventory management support.",
          },
          {
            title: "Parcel Return",
            text: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 flex flex-col items-center text-center transition-all duration-500 ease-linear transform hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#CAEB66]"
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
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
