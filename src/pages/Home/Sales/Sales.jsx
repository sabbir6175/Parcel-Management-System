import Marquee from "react-fast-marquee";
import img1 from "../../../assets/brands/amazon.png";
import img2 from "../../../assets/brands/amazon_vector.png";
import img3 from "../../../assets/brands/casio.png";
import img4 from "../../../assets/brands/moonstar.png";
import img5 from "../../../assets/brands/randstad.png";
import img6 from "../../../assets/brands/start-people 1.png";
import img7 from "../../../assets/brands/start.png";
const Sales = () => {
  return (
    <>
      <div className="my-10">
        <h1 className="text-center font-bold text-3xl my-10">
          We've helped thousands of,sales teams
        </h1>
        <Marquee>
          <div className="flex flex-row gap-13 items-center justify-center ">
            <img src={img1} alt="" />
            <img src={img3} alt="" />
            <img src={img2} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Sales;
