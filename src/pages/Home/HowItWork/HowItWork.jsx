import img from "../../../assets/bookingIcon.png";

const HowItWork = () => {
  return (
    <div className="px-6 md:px-20 py-10 ">
      {/* Section Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-left text-gray-800">
          How it Works
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-8">
        {[
          {
            title: "Booking Pick & Drop",
            text: "From personal packages to business shipments — we deliver on time, every time.",
          },
          {
            title: "Cash On Delivery",
            text: "From personal packages to business shipments — we deliver on time, every time.",
          },
          {
            title: "Delivery Hub",
            text: "From personal packages to business shipments — we deliver on time, every time.",
          },
          {
            title: "Booking SME & Corporate",
            text: "From personal packages to business shipments — we deliver on time, every time.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03]"
          >
            <img
              className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300"
              src={img}
              alt={item.title}
            />
            <div>
              <h1 className="text-black text-base font-semibold mb-2">
                {item.title}
              </h1>
              <p className="text-gray-600 font-light">{item.text}</p>
            </div>
            {/* subtle underline animation */}
            <div className="mt-3 w-0 group-hover:w-40 h-[2px] bg-green-500 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
