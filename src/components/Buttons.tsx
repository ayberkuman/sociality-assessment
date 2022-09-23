import { CartIcon, LocationPin } from "@assets/svgs";
import { motion } from "framer-motion";

export const OptionButton = () => {
  return (
    <motion.button whileHover={{ scale: 1.2 }}>
      <CartIcon />
    </motion.button>
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
