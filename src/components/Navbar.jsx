import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Logo2 from "../assets/logo2.png";

const Navbar = () => {
  return (
    <nav
      className="flex flex-row justify-normal items-center md:gap-[122px] sm:gap-[40px] 
      md:mt-[32px] sm:mt-[20px] px-5"
    >
      <Link to={"/"} className="flex items-end">
        <img src={Logo} alt="logo" className="w-[48px] h-[48px] my-0 mr-10" />
      </Link>
      <div className=" flex flex-row gap-[40px] text-[22px]">
        <Link
          to={"/"}
          className=" no-underline text-[#3A1212] border-b-[3px] border-solid border-[#FF2625] "
        >
          Home
        </Link>
        <a href="#exercises" className=" no-underline text-[#3A1212]">
          Exercises
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
