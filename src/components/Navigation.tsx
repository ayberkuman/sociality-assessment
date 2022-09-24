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
      <div className="bg-lightGrey min-w-[150px]">
        <Submenu />
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

export const Submenu = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <div className="w-full flex flex-col gap-2 ">
      {subMenu.map((i, index) => (
        <Accordion
          item={i}
          key={index}
          i={i.id}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  );
};

const Accordion = ({
  item,
  i,
  expanded,
  setExpanded,
}: {
  item: any;
  i: number;
  expanded: number | boolean;
  setExpanded: Function;
}) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        className=" cursor-pointer px-6 py-4 flex gap-2"
        initial={false}
        animate={{ backgroundColor: isOpen ? "#F55661" : "" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <SocialLogo />
        {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className="overflow-hidden"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <li className="origin-top-center flex flex-col gap-2 px-6 ">
              <li className="hover:text-mainRed cursor-pointer">Compose</li>
              <li className="hover:text-mainRed cursor-pointer">Feed</li>
            </li>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
