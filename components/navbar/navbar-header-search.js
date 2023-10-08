import { IoSearchOutline } from "react-icons/io5";

export default function NavbarHeaderSearch() {
  return (
    <div className="hidden sm:col-span-4 sm:flex sm:justify-center sm:items-center">
      <div className="relative w-auto h-auto">
        <input
          className="sm:w-[330px] sm:h-[40px] lg:w-[460px] lg:h-[50px] p-3 text-sm text-uf-black rounded-md outline-none"
          type="search"
          name="search"
          id="search"
          placeholder="What are you looking for?"
        />
        <label htmlFor="search" className="absolute top-1 right-1">
          <i className="text-uf-black sm:text-[32px] lg:text-[42px] cursor-pointer">
            <IoSearchOutline></IoSearchOutline>
          </i>
        </label>
      </div>
    </div>
  );
}
