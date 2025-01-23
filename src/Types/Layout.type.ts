export interface RootLayoutProps {
    children: React.ReactNode;
}

export interface SubChildrenType {
    title: string;
    type: string;
    path: string;
}

export interface SidebarChildrenType {
    lanClass?: string;
    path?: string;
    id?: number;
    icon?: string;
    active?: boolean;
    title: string;
    type: string;
    subMenu?: SubChildrenType[];
    bookmark?: boolean;
    badge?: boolean;
    badgeName?: string;
    badgeColor?: string;
}

export interface SidebarItemType {
    id?: number;
    title?: string;
    icon?: string;
    type?: string;
    lanClass?: string;
    active?: boolean;
    path?: string;
    pathName?: string;
    bookmark?: boolean;
    badge?: boolean;
    badgeName?: string;
    badgeColor?: string;
    subMenu?: SidebarChildrenType[];
}

export interface MenuListType {
    menu: SidebarItemType[];
    setActiveMenu: (temp: SidebarItemType[]) => void;
    activeMenu: any;
    level: number;
}

export interface SidebarMenuType {
    id?: number;
    title: string;
    lanClass?: string;
    menucontent?: string;
    menu: SidebarItemType[];
}

export interface SearchSuggestionItem {
    icon: string | undefined;
    title: string;
    path: string;
    bookmarked?: boolean;
    id?: number;
}

export interface SearchSuggestionListType {
    searchedArray: SearchSuggestionItem[];
    setSearchedWord: (key: string) => void;
}

export interface BookmarkedDataType {
    icon: string;
    path: string;
    title: string;
    color?: string
    id?: number;
    bookmarked?: boolean;
}

export interface BookmarkSliceType {
    linkItemsArray: BookmarkedDataType[] | [];
    bookmarkedData: BookmarkedDataType[];
}

export interface LanguageDataType {
    languageParameter: string,
    languageName: string,
    languageIconClassName: string,
    subTitle?: string
}

export interface PropsLightColor {
    primary : string,
    secondary : string
  }


export interface PropsLightColor {
    primary : string,
    secondary : string
  }
  
  