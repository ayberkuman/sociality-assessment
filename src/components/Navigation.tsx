import { SocialLogo } from "@assets/svgs";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { menuData, subMenu } from "../json/menuData";

export const Navigation = () => {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div className="flex max-w-[300px] fixed h-full text-white">
      <div className="bg-darkGrey p-2">
        {menuData.map((item) => {
          return (
            <Menu
              key={item.id}
              {...item}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
            />
          );
        })}
      </div>
      <div className="bg-lightGrey">
        {subMenu.map((subMenuItem) => {
          return <SubMenu key={subMenuItem.title} {...subMenuItem} />;
        })}
      </div>
    </div>
  );
};

export const Menu = ({
  title,
  setSelectedId,
  selectedId,
  id,
}: {
  title: ReactNode;
  setSelectedId: Function;
  selectedId: number;
  id: number;
}) => {
  return (
    <motion.div
      onClick={() => setSelectedId(id)}
      className={`relative p-2 py-3 cursor-pointer ${
        selectedId !== id && "opacity-50"
      }`}
    >
      {title}
      {selectedId === id && (
        <motion.div
          layoutId="selected"
          className="absolute bg-mainRed rounded-r-xl h-full -left-2 top-0 w-2"
        ></motion.div>
      )}
    </motion.div>
  );
};

export const SubMenu = ({
  title,
  subOfSub,
}: {
  title: string;
  subOfSub: Array<string>;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <motion.ul
        className={`${
          open ? "bg-mainRed" : ""
        } cursor-pointer px-8 py-4 gap-2 flex items-center`}
        onClick={() => setOpen(!open)}
      >
        <SocialLogo />

        <div>{title.toUpperCase()}</div>
        <div className="absolute right-0 px-2 text-xl font-semibold text-black">
          {open ? "-" : "+"}
        </div>
      </motion.ul>
      <AnimatePresence>
        {open &&
          subOfSub.map((subOfSubItem) => {
            return (
              <motion.li
                initial={{ opacity: 0, y: -20, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.5 }}
                whileHover={{ color: "#F55661" }}
                className="px-8 py-2 cursor-pointer"
                key={subOfSubItem}
              >
                {subOfSubItem.charAt(0).toUpperCase() + subOfSubItem.slice(1)}
              </motion.li>
            );
          })}
      </AnimatePresence>
    </div>
  );
};
