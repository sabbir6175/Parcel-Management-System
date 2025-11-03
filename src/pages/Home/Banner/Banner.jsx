import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full lg:h-[624px] xl:h-full mt-10 ">
      <div className="relative h-full container mx-auto">
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={banner1}
              alt="Banner 1"
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner2}
              alt="Banner 2"
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner3}
              alt="Banner 3"
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white border border-green-500 p-2 rounded-full text-green-600 hover:bg-green-100 shadow-md">
          <FaChevronLeft />
        </button>
        <button className="custom-next absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white border border-green-500 p-2 rounded-full text-green-600 hover:bg-green-100 shadow-md">
          <FaChevronRight />
        </button>
      </div>

      {/* Swiper pagination custom style */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #86efac;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #22c55e;
        }
      `}</style>
    </div>
  );
};

export default Banner;
