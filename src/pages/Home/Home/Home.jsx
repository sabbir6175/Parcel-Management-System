import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <HowItWork></HowItWork>
      <Services></Services>
    </div>
  );
};

export default Home;
