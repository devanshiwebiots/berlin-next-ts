import { useAppSelector } from "@/Redux/Hooks";
import { Fragment, useState } from "react";
import Menulist from "./Menulist";
import { MenuList } from "@/Data/Layout/Menu";
import { SidebarItemType, SidebarMenuType } from "@/Types/Layout.type";
import { useTranslation } from "react-i18next";

const SidebarMenuList = () => {
  const [activeMenu, setActiveMenu] = useState<SidebarItemType[]>([]);
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const shouldHideMenu = (mainMenu: SidebarMenuType) => { return mainMenu.menu.map((data) => data.title).every((titles) => pinedMenu.includes(titles as string))};
  const { t } = useTranslation("common");

  return (
    <>
      {MenuList &&
        MenuList.map((mainMenu: SidebarMenuType, index) => (
          <Fragment key={index}>
            <li className={`sidebar-main-title ${shouldHideMenu(mainMenu) ? "d-none" : ""}`}>
              <div>
                <h6 className={mainMenu.lanClass ? mainMenu.lanClass : ""}>{t(mainMenu.title)}</h6>
              </div>
            </li>
            <Menulist menu={mainMenu.menu} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={0} />
          </Fragment>
        ))}
    </>
  );
};
export default SidebarMenuList;