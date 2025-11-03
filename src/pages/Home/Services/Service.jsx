import trackingImg from "../../../assets/live-tracking.png";
import mercent from "../../../assets/mercent.png";
import supportImg from "../../../assets/safe-delivery.png";
import { SectionTitleBlack } from "../../../components/SectionTitle/SectionTitle";
const Service = () => {
  const services = [
    {
      title: "Live Parcel Tracking",
      text: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
      img: trackingImg,
    },
    {
      title: "100% Safe Delivery",
      text: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      img: supportImg,
    },
    {
      title: "24/7 Call Center Support",
      text: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns — anytime you need us.",
      img: supportImg,
    },
  ];

  return (
    <>
      <section className=" py-20  px-5 md:px-16">
        <SectionTitleBlack
          heading="Our core Service"
          subHeading="Delivering excellence through technology, safety, and 24/7 customer support."
        />

        <div className="mt-12 space-y-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-2xl p-6 shadow-sm"
            >
              <div className="md:pr-6 md:border-r-2 md:border-dotted md:border-gray-300">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-40  object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[#03373D] font-semibold text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-10 w-full">
        <img src={mercent} className="w-full" alt="banner" />
      </section>
    </>
  );
};

export default Service;
