import { AlertTriangle, CheckSquare, X, XCircle } from "react-feather";

export const LiveToastData = [
  {
    text: "Use the ",
    code: ".hide",
  },
  {
    text: "class through hide toast and <code>.show </code>class through visible toast and given directions.",
    code: "[top-0/bottom-0/start-0/end-0]",
  },
];

export const MessageToastData = [
  {
    text: "Use the ",
    code: ".position-fixed",
  },
  {
    text: "class through.",
    code: "[top/end/start/bottom] ",
  },
  {
    text: "toasts.",
  },
];

export const ColorSchema = [
  {
    text: "Use the ",
    code: ".hide",
  },
  {
    text: ".show ",
    code: "class through visible toast.",
  },
];

export const StackingToastData = [
  {
    text: "You can stack toasts by wrapping them in a toast container, which will vertically add some spacing. ",
    code: "[toast-*]",
  },
  {
    text: "through change icons colors.",
  },
];

export const StackingToastDataList = [
  {
    bell: true,
    iconColor: "warning",
    title: "Roxo theme",
    time: "2 sec ago",
    bodyText: "Hello, I'm a UX-designer.",
  },
  {
    bell: true,
    iconColor: "danger",
    title: "Zeta theme",
    time: "6 min ago",
    bodyText: "Hello, I'm a Software developer.",
  },
  {
    bell: true,
    iconColor: "success",
    title: "Voxo theme",
    time: "3 sec ago",
    bodyText: "Hello, I'm a professional web-designer.",
  },
];

export const TranslucentToastData = [
  {
    text: " Use the ",
    code: ".hide ",
  },
  {
    text: "class through hide toast and ",
    code: ".show ",
  },
  {
    text: "class through visible toast and given directions.",
    code: "[toast-*]",
  },
  {
    text: "through change icons colors.",
  },
];

export const TranslucentToastDataList = [
  {
    iconColor: "dark",
    title: "Koho theme",
    time: "1 sec ago",
    bodyText: " Hello, I'm a full-stack developer.",
  },
  {
    iconColor: "secondary",
    title: "Fastkart theme",
    time: "just now",
    bodyText: " Hello, I'm a UX-designer.",
  },
  {
    iconColor: "success",
    title: "Oslo theme",
    time: "44 min ago",
    bodyText: "Hello, I'm a professional web-designer.",
  },
];

export const DefaultToastData = [
  {
    text: " Use the ",
    code: ".hide ",
  },
  {
    text: "class through hide toast and ",
    code: ".show ",
  },
  {
    text: "class through visible toast.",
  },
];

export const UniqueToastData = [
  {
    text: " Use the ",
    code: ".hide ",
  },
  {
    text: "class through hide toast and ",
    code: ".show ",
  },
  {
    text: "class through visible toast.",
  },
];

export const PlacementData = [
  {
    text: " Use the ",
    code: ".hide ",
  },
  {
    text: "class through hide toast and ",
    code: ".show ",
  },
  {
    text: "class through visible toast.",
    code: ".form-select",
  },
  {
    text: " through select any positions.",
  },
];

export const PlacementListData = [
  {
    text: "Top left",
    className: "top-0 start-0",
  },
  {
    text: "Top center",
    className: "top-0 start-50 translate-middle-x",
  },
  {
    text: "Top right",
    className: "top-0 end-0",
  },
  {
    text: "Middle left",
    className: "top-50 start-0 translate-middle-y",
  },
  {
    text: "Middle center",
    className: "top-50 start-50 translate-middle",
  },
  {
    text: "Middle right",
    className: "top-50 end-0 translate-middle-y",
  },
  {
    text: "Bottom left",
    className: "bottom-0 start-0",
  },
  {
    text: "Bottom center",
    className: "bottom-0 start-50 translate-middle-x",
  },
  {
    text: "Bottom right",
    className: "bottom-0 end-0",
  },
];

export const Toaststing = [
  {
    id: "toast-success",
    title: "Success Toast",
    message: "Success: We've updated your info",
    color: "success",
    position: "top-0 end-0",
    isOpen: false,
    alert: "alert-light-success",
    icon:<CheckSquare className="stroke-success"/>
  },
  {
    id: "toast-warning",
    title: "Warning Toast",
    message: "Software drivers needed to be updated in advance",
    color: "warning",
    position: "top-50 end-0",
    isOpen: false,
    alert: "alert-light-warning",
    icon:<AlertTriangle className="stroke-warning"/>
  },
  {
    id: "toast-error",
    title: "Error Toast",
    message: "A database connection error has occurred",
    color: "danger",
    position: "bottom-0 end-0",
    isOpen: false,
    alert: "alert-light-danger",
    icon:<X className="stroke-danger"/>
  },
];
