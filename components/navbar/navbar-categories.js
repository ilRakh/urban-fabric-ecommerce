import NavbarCategoriesDropdown from "./navbar-categories-dropdown";

export default function NavbarCategories() {
  return (
    <div
      id="navbar-categories"
      className="hidden bg-uf-black w-full h-[50px] sm:flex sm:justify-center sm:py-2.5 sm:space-x-10"
    >
      <NavbarCategoriesDropdown />
      <NavbarCategoriesDropdown />
      <NavbarCategoriesDropdown />
      <NavbarCategoriesDropdown />
    </div>
  );
}
