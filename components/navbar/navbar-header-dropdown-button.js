"use client";
import { AiOutlineMenu } from "react-icons/ai";

const handleDropdown = () => {
  const navbar = document.getElementsByTagName("nav")[0];
  navbar.classList.toggle("open");
};

export default function NavbarHeaderDropdownButton() {
  return (
    <a
      href="#"
      id="dropdown-button"
      onClick={handleDropdown}
      className="absolute top-0 left-0 p-4 text-[42px] cursor-pointer sm:hidden"
    >
      <AiOutlineMenu />
    </a>
  );
}
