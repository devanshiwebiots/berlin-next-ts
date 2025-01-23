export interface DropdownWithHeaderProps {
    heading?: string;
    dropDownList: string[];
    headerClass?: string;
    dropDownTitle?: string;
    headingClass?: string;
    caret?: boolean;
    dropDownClass?: string;
    dropDownIcon?: boolean;
    topDivClass?: string;
}
 
export interface Activity {
    id: number;
    title: string;
    description: string;
    icon: string;
    time: string;
    bgColorClass: string;
    href: string;
    iconcolor:string
  }
  