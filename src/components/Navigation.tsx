import { SocialLogo } from "@assets/svgs";
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
    <div
      onClick={() => setSelectedId(id)}
      className="relative p-2 cursor-pointer"
    >
      {title}
      {selectedId === id && (
        <div className="absolute bg-mainRed h-full -left-2 top-0 w-2"></div>
      )}
    </div>
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
      <ul
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
      </ul>
      {open &&
        subOfSub.map((subOfSubItem) => {
          return (
            <li
              className="px-8 py-2 cursor-pointer hover:bg-mainRed"
              key={subOfSubItem}
            >
              {subOfSubItem.charAt(0).toUpperCase() + subOfSubItem.slice(1)}
            </li>
          );
        })}
    </div>
  );
};
