import NavbarCategoriesDropdown from "./navbar-categories-dropdown";

export default function NavbarCategories() {
  return (
    <div className="hidden relative bg-uf-black w-full h-[50px] sm:flex justify-center py-2.5 space-x-10">
      <NavbarCategoriesDropdown />
      <NavbarCategoriesDropdown />
      <NavbarCategoriesDropdown />
      <NavbarCategoriesDropdown />
    </div>
  );
}
