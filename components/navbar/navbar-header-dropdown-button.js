import { AiOutlineMenu } from "react-icons/ai";

export default function NavbarHeaderDropdownButton() {
  return (
    <div className="absolute top-0 left-0 p-4 text-[42px] cursor-pointer sm:hidden">
      <AiOutlineMenu />
    </div>
  );
}
