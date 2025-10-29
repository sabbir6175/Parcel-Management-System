import img from "../../../assets/logo.png";
const ProFastLogo = () => {
  return (
    <div className="flex items-end">
      <img className="mb-2" src={img} alt="proFastLogo" />
      <p className="text-2xl md:text-3xl -ml-2">ProFast</p>
    </div>
  );
};

export default ProFastLogo;
