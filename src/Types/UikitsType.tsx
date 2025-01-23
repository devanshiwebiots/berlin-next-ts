interface SpanType {
  text?: string;
  code?: string;
  mark?: string;
}

export interface CommonCardHeaderProp {
  title: string;
  span?: SpanType[];
  headClass?: string;
  icon?: JSX.Element;
  tagClass?: string;
}

export interface GridCommonCardFooterType {
  className: string;
  valueClass: string;
}

interface DataProp {
  className?: string;
  badgeClass?: string;
  text: string;
  title?: string;
}

interface NumberProp {
  className?: string;
  text?: string;
  icon?: JSX.Element;
}

export interface CommonTagCardBodyType {
  data?: DataProp[];
  number?: NumberProp[];
  pill?: boolean;
}

export interface CommonModalType {
  children?: React.ReactNode;
  size?: string;
  isOpen?: boolean;
  toggle?: () => void;
  title?: string;
  modalBodyClassName?: string;
  modalTitleClassName?: string;
  heading?: string;
  sizeTitle?: string;
  fullTitle?: string;
  staticTitle?: string;
  fullscreen?: true | "sm" | "md" | "lg" | "xl" | "xxl";
  centered?: boolean;
  onClosed?: () => void;
  backdrop?: boolean | "static";
}

export interface FormSubmitProp {
  modal: () => void;
}

export interface CommonFullScreenDataType {
  color: string;
  onClick: () => void;
  title: string;
  fullscreen: "sm" | "md" | "lg" | "xl" | "xxl";
  isOpen: boolean;
  toggle: () => void;
}

export interface ToggleModalType {
  nestedModal?: boolean;
  closeAll?: boolean;
  toggle?: () => void;
  toggleNested?: () => void;
  toggleAll: () => void;
}

export interface ProfileModalType {
  modalOne: boolean;
  modalOneTogggle: () => void;
}

export interface BalanceModalType {
  modalThird: boolean;
  modalThirdToggle: () => void;
}

export interface CommonLagosModalTitleType {
  heading: string;
  subHeading: string;
  text: string;
}

interface ItemProp {
  id: number;
  placement?: any;
  Popoverheader?: string;
  Popoverbody?: string;
  btnColor?: string;
  btntext?: string;
  trigger?: string;
}

export interface CommonPopoverProp {
  key?: number;
  item: ItemProp;
}

interface Itemtype {
  id: number;
  placement?: any;
  tooltip?: string | JSX.Element;
  btnColor?: string;
  btntext?: string;
  className?: string;
}

export interface CommonTooltipProp {
  item: Itemtype;
  outline?: boolean;
}

interface ItemsArray {
  item?: string;
  divider?: boolean;
}

interface itemArray extends React.HTMLAttributes<HTMLElement> {
  btnColor?: string;
  btnText: string;
  items: ItemsArray[];
  dropclassName?: string;
  toggleClassName?: string;
  size?: string;
}
export interface CommonDropdownProp {
  item: itemArray;
}

interface ItemProps {
  item: string;
}

export interface CommonAlignmentProp {
  value: {
    items: ItemProps[];
    btnText: string;
    btnColor: string;
    directions: any;
    dropclassName: string;
  };
}

export interface TabContentProp {
  basicTab: string;
}

interface ItemsArrays {
  item: string;
}
interface ArrayType {
  btnColor: string;
  btnText: string;
  items: ItemsArrays[];
}
export interface SplitButtonDropdownProp {
  item: ArrayType;
}

export interface StaticModalToggleProp {
  staticModalToggle: () => void;
}

export interface DropdownItemData {
  href: string;
  label: string;
}

export interface DropdownButtonProps {
  buttonLabel: string;
  menuItems: DropdownItemData[];
  alignmentClass?: string;
  displayClass?: string;
}

export interface TopBottomOffcanvasType {
  title: string;
  direction: string;
  color: string;
  data?: boolean;
}
export interface TabData {
  id: string;
  title: string;
  imageSrc: string;
  content: string[];
}

export interface AnimatedTabData {
  id: string;
  title: string;
  iconClass: string;
  content: string;
}
export interface CommonMoscowModalTitleType {
  heading: string;
  subHeading: string;
  text: string;
}

export interface DividerCardProps {
  title: string;
  description: string;
  dividers: {
    type: string;
    color: string;
    icon?: string;
    text?: string;
    bg?: string;
  }[];
}

export interface griditem {
  colClasses: string;
  text: string;
}
