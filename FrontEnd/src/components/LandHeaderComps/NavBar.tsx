import Logo from "../../reusableComponents/Logo";
import HeaderLogo from "../../assets/HeaderLogo.png";
import Account from "./Account";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="min-h-[10vh] bg-slate-100 flex items-center relative">
      <Logo
        className=" w-[70px] object-contain"
        src={HeaderLogo}
        alt="Route Rover"
      />
      <a className="text-black text-xl m-1"> FAQs </a>

      <Account></Account>
    </nav>
  );
};

export default NavBar;
