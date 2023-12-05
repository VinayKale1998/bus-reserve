import Logo from "../../reusableComponents/Logo";
import HeaderLogo from "../../assets/HeaderLogo.png";

const NavBar = () => {
  return (
    <nav className="h-[10vh] bg-slate-100  flex">
      <Logo
        className=" w-[70px] object-contain"
        src={HeaderLogo}
        alt="Route Rover"
      />
    </nav>
  );
};

export default NavBar;
