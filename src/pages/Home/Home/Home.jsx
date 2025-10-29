import Banner from "../Banner/Banner";
import FAQSection from "../FAQ/FAQSection";
import HowItWork from "../HowItWork/HowItWork";
import Sales from "../Sales/Sales";
import Service from "../Services/Service";
import Services from "../Services/Services";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <HowItWork></HowItWork>
      <Services></Services>
      <Sales></Sales>
      <Service></Service>
      <TestimonialSection></TestimonialSection>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
