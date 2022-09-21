import { AddButton, CartIcon, LocationPin } from "@assets/svgs";

export const OptionButton = () => {
  return (
    <button className="">
      <CartIcon />
    </button>
  );
};

export const InteractionButton = ({ value }: { value: number }) => {
  return (
    <button className="px-2 flex items-center text-grey">
      <LocationPin />
      <span className="pl-2">{value}</span>
    </button>
  );
};
