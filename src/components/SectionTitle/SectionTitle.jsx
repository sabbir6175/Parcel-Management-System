const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <h3 className="text-3xl md:text-4xl text-white font-bold mb-2 ">
        {heading}
      </h3>
      <p className="text-[#DADADA]  mb-2">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;

export const SectionTitleBlack = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <h3 className="text-3xl md:text-4xl text-black font-bold mb-2 ">
        {heading}
      </h3>
      <p className="text-black  mb-2">{subHeading}</p>
    </div>
  );
};

SectionTitleBlack;
