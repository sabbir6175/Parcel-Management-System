import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import ProFastLogo from "../proFastLogo/ProFastLogo";

const Navbar = () => {
  const { user, LogOut } = useAuth();

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
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
        <NavLink to={"/beARider"}>Be a Rider</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    LogOut();
    toast.success("user signOut successfully ");
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar  bg-base-100 shadow-sm md:px-20 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="cursor-pointer text-xl">
            <ProFastLogo></ProFastLogo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <>
              <h1>{user?.displayName}</h1>
              <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <button
                onClick={handleSignOut}
                className="btn outline-none hover:bg-[#CAEB66]"
              >
                SignOut
              </button>
            </>
          ) : (
            <>
              <Link
                to={"signIn"}
                className="btn outline-none hover:bg-[#CAEB66]"
              >
                Sing In
              </Link>
            </>
          )}

          <Link className="btn bg-[#CAEB66] hover:bg-white ">Be a rider</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
