import { BurgerMenu, CartIcon, ProfilePicPlaceHolder } from "@assets/svgs";
type NavigationProps = {
  username: String;
};
export const Navigation = ({ username }: NavigationProps) => {
  return (
    <>
      <nav className="hidden md:flex lg:gap-12 md:gap-5 t-14 font-lato font-medium">
        <a className="cursor-pointer">PRODUCTS</a>
        <a className="cursor-pointer">BRANDS</a>
        <div className="flex items-center">
          <ProfilePicPlaceHolder />
          <a className="cursor-pointer px-2">HELLO, {username.toUpperCase()}</a>
        </div>
        <div className="flex items-center">
          <CartIcon />
          <a className="cursor-pointer px-2">CART</a>
        </div>
      </nav>
      <button className="md:hidden">
        <BurgerMenu />
      </button>
    </>
  );
};
