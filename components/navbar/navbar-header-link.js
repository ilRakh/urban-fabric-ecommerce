export default function NavbarHeaderLink({
  NavbarHeaderIcon,
  linkText,
  productsInCart,
  customClass,
}) {
  return (
    <a href="#" className="inline-block relative ml-6 mb-3">
      <i className="text-[42px]">
        <NavbarHeaderIcon></NavbarHeaderIcon>
      </i>
      <span className={"absolute -bottom-3 text-[10px]" + " " + customClass}>
        {linkText}
      </span>
      {productsInCart ? (
        <span
          className={
            "absolute top-0 -right-1 text-[10px] leading-3 bg-uf-red px-1 mr-0.5 rounded-full"
          }
        >
          {productsInCart}
        </span>
      ) : (
        false
      )}
    </a>
  );
}
