import { CiYoutube } from "react-icons/ci";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";
import ProFastLogo from "../proFastLogo/ProFastLogo";

const Footer = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Coverage</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Pricing</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <footer className="footer footer-horizontal footer-center  bg-neutral text-neutral-content p-10">
        <aside>
          <ProFastLogo></ProFastLogo>
          <p className="text-base font-light">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to <br /> business shipments —
            we deliver on time, every time.
          </p>
          <p className="list-none flex flex-col md:flex-row gap-5 my-4 font-light">
            {links}
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col  gap-4">
            <span className="text-3xl">
              {" "}
              <FaLinkedin></FaLinkedin>
            </span>
            <span className="text-3xl">
              {" "}
              <FaTwitter></FaTwitter>
            </span>
            <span className="text-3xl">
              {" "}
              <FaFacebook></FaFacebook>
            </span>
            <span className="text-3xl bg-red-600 rounded-full p-1 text-white">
              {" "}
              <CiYoutube />
            </span>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
