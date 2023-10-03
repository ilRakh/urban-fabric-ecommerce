import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavbarHeaderLink from "./navbar-header-link";
import NavbarHeaderLogo from "./navbar-header-logo";
import NavbarHeaderSearch from "./navbar-header-search";
import NavbarHeaderDropdownButton from "./navbar-header-dropdown-button";

export default function NavbarHeader() {
  return (
    <div
      id="navbar-header"
      className="relative bg-uf-black w-full h-[80px] flex justify-center py-2.5 sm:grid sm:grid-cols-12 sm:py-0 sm:border-b-2 border-uf-dark-gray"
    >
      <NavbarHeaderDropdownButton />
      <NavbarHeaderLogo />
      <NavbarHeaderSearch />
      <div
        id="navbar-header-link"
        className="hidden sm:col-span-4 sm:flex sm:justify-end sm:items-center sm:mr-12"
      >
        <NavbarHeaderLink
          NavbarHeaderIcon={AiOutlineUser}
          linkText={"Account"}
          customClass="pl-[1px]"
        />
        <NavbarHeaderLink
          NavbarHeaderIcon={AiOutlineShoppingCart}
          linkText={"My Cart"}
          productsInCart={1}
          customClass="pl-[3px]"
        />
      </div>
    </div>
  );
}
