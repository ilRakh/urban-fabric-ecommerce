import NavbarCategories from "./navbar-categories";
import NavbarHeader from "./navbar-header";

export default function Navbar() {
  return (
    <nav className="bg-uf-black w-full h-auto">
      <NavbarHeader />
      <NavbarCategories />
    </nav>
  );
}
