import { useEffect } from "react";
import SVG from "@/CommonComponent/SVG";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handlePined } from "@/Redux/Reducer/Layout/LayoutSlice";
import { MenuListType, SidebarItemType } from "@/Types/Layout.type";
import { Badge } from "reactstrap";
import { useTranslation } from "react-i18next";

const Menulist: React.FC<MenuListType> = ({ menu, setActiveMenu, activeMenu, level }) => {
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);

  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { t } = useTranslation("common");

  const ActiveNavLinkUrl = (path?: string, active?: boolean) => {
    return pathname === path ? (active ? active : true) : "";
  };
  const shouldSetActive = ({ item }: { item: SidebarItemType }): boolean => {
    var returnValue = false;
    if (item?.path === pathname) returnValue = true;
    if (!returnValue && item?.subMenu) {
      item?.subMenu.every((subItem) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  };
  useEffect(() => {
    menu?.forEach((item) => {
      let gotValue = shouldSetActive({ item });
      if (gotValue) {
        let temp = [...activeMenu];
        temp[level] = item.title;
        setActiveMenu(temp);
      }
    });
  }, []);

  return (
    <>
      {menu.map((item, index) => (
        <li key={index} className={`${level === 0 ? "sidebar-list" : ""} ${pinedMenu.includes(item.title || "") ? "pined" : ""}  ${(item.subMenu ? item.subMenu.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true) : ActiveNavLinkUrl(item.path)) || ""} `}>
          {level === 0 && <i className='fa fa-thumb-tack' onClick={() => dispatch(handlePined(item.title))} />}
          {item.badge ? (
            <Badge color='transparent' className={`badge-${item.badgeColor}`}>
              {item.badgeName}
            </Badge>
          ) : (
            ""
          )}
          <Link
            className={`${level === 0 ? "sidebar-link sidebar-title" : ""}  ${(item.subMenu ? item.subMenu.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true) : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title ? "active" : ""}`}
            href={item.path ? `${item.path}` : ""}
            onClick={() => {
              const temp = activeMenu;
              temp[level] = temp[level] !== item.title && item.title;
              setActiveMenu([...temp]);
            }}
          >
            {item.icon && <SVG className={`${sidebarIconType}-icon`} iconId={`${sidebarIconType}-${item.icon}`} />}
            <span className={item.lanClass ? item.lanClass : ""}>{t(item.title || "")}</span>
            {item.subMenu &&
              (activeMenu[level] === item.title ? (
                <div className='according-menu'>
                  {" "}
                  <i className='fa fa-angle-down' />
                </div>
              ) : (
                <div className='according-menu'>
                  <i className='fa fa-angle-right' />
                </div>
              ))}
          </Link>
          {item.subMenu && (
            <ul
              className={`${level / 2 === 0 ? "sidebar-submenu" : "nav-sub-childmenu submenu-content"}`}
              style={{
                display: `${(item.subMenu ? item.subMenu.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true) : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title ? "block" : "none"}`,
              }}
            >
              <Menulist menu={item.subMenu} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={level + 1} />
            </ul>
          )}
        </li>
      ))}
    </>
  );
};
export default Menulist;
