import Link from "next/link";
import Menu from "./Menu";
import NavIcon from "./NavIcons";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <div className="bg-white h-20 w-full text-black flex">
      {/* Mobile */}
      <div className="h-full w-full p-4 items-center flex  justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>

      {/* Md and Lg */}
      <div className="hidden md:flex h-20 w-full text-black ">
        {/* Left part */}
        <div className="w-1/3 xl:w-1/2 px-12 flex items-center gap-12 ">
          <div className="cursor-pointer items-center justify-center tracking-wide font-semibold text-2xl">
            LAMA
          </div>
          <div className=" hidden xl:flex justify-center items-center gap-8 ">
            <div className="cursor-pointer">Homepage</div>
            <div className="cursor-pointer">Shop</div>
            <div className="cursor-pointer">Deals</div>
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Contact</div>
          </div>
        </div>

        {/* Right part */}
        <div className=" flex items-center justify-between gap-8 px-8 w-2/3 xl:w-1/2 ">
          <SearchBox />
          <NavIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
