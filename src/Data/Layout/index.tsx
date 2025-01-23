import { FileText, Mail, Settings, Users } from "react-feather";

export const NotificationData = [
  {
    
    title: "Delivery processing",
    min: "10 min",
    color: "primary",
    font: "font-danger",
  },
  {
    title: "Order Complete",
    min: "1 hr",
    color: "success",
    font: "font-success",
  },
  {
    title: "Tickets Generated",
    min: "3 hr",
    color: "secondary",
    font: "font-secondary",
  },
  {
    title: "Delivery Complete",
    min: "6 hr",
    color: "warning",
    font: "font-warning",
  },
];

export const BookMarkData = [
  {
    icon: "form",
    path: "/forms/form_controls/validation_form",
    title: "Form",
    color: "primary",
  },
  {
    icon: "user",
    path: "/users/user_profile",
    title: "Profile",
    color: "secondary",
  },
  {
    icon: "table",
    path: "/table/reactstrap_table/basic_table",
    title: "Tables",
    color: "warning",
  },
];

const iconOne = `Hello Miss...&#128522;`;
const iconTwo = `Wishing You a Happy Birthday Dear.. 🥳&#127882;`;

export const MessageData = [
  {
    image: "1.png",
    title: "Hackett Yessenia",
    color: "primary",
    text: <div dangerouslySetInnerHTML={{ __html: iconOne }}></div>,
    time: "10 min.",
  },
  {
    image: "2.png",
    title: "schneider Adan",
    color: "secondary",
    text: <p dangerouslySetInnerHTML={{ __html: iconTwo }}></p>,
    time: "25 min.",
  },
  {
    image: "3.png",
    title: "Mahdi Gholizadeh",
    color: "tertiary",
    text: "Hello Dear!! This Theme Is Very beautiful",
    time: "1 hours.",
  },
];

export const cartDetailsList = [
  "Furniture Chair for Home",
  "Furniture Table for Office",
];

export const UserProfileData = [
  {
    icon: <Users />,
    title: "Account",
    link: "chat/private_chat",
  },
  {
    icon: <Mail />,
    title: "Inbox",
    link: "app/letter_box",
  },
  {
    icon: <FileText />,
    title: "Taskboard",
    link: "app/task",
  },
  {
    icon: <Settings />,
    title: "Settings",
    link: "users/edit_profile",
  },
];

export const LanguagesData = [
  {
    data: "en",
    logo: "flag-icon flag-icon-us",
    language: "English",
  },
  {
    data: "es",
    logo: "flag-icon flag-icon-is",
    language: "Spanish",
  },
  {
    data: "pt",
    logo: "flag-icon flag-icon-uy",
    language: "Portuegse",
  },
  {
    data: "fr",
    logo: "flag-icon flag-icon-nz",
    language: "French",
  },
  {
    data: "ae",
    logo: "flag-icon flag-icon-ae",
    language: "لعربية",
  },
  {
    data: "du",
    logo: "flag-icon flag-icon-de",
    language: "Deutsch",
  },
  {
    data: "cn",
    logo: "flag-icon flag-icon-cn",
    language: "简体中文",
  },
];

export const NavLinkList = [
  {
    path: "https://support.pixelstrap.com/",
    icon: "/customizer/2.png",
    name: "Support",
  },
  {
    path: "https://docs.pixelstrap.net/next/berlin/document/",
    icon: "/customizer/3.png",
    name: "Document",
  },
  {
    path: "https://landing.pixelstrap.net/next/berlin/template/landing-page.html",
    icon: "/customizer/4.png",
    name: "Check Features",
  },
  {
    path: "https://www.pixelstrap.com/",
    icon: "/customizer/5.png",
    name: "Buy Now",
  },
];

export const LightColorData = [
  {
      primary:"#2A5699",
      secondary:"#EA6F4E"
  },
  {
      primary:"#008dab",
      secondary:"#A16B56"
  },
  {
      primary:"#534686",
      secondary:"#A97D5D"
  },
  {
      primary:"#2b5e5e",
      secondary:"#233d46"
  },
  {
      primary:"#423964",
      secondary:"#897D5e"
  },
  {
      primary:"#43B9B2",
      secondary:"#d98c72"
  }
]

export const DarkColorData = [
  {
    primary:"#2A5699",
    secondary:"#EA6F4E"
},
{
    primary:"#008dab",
    secondary:"#A16B56"
},
{
    primary:"#534686",
    secondary:"#A97D5D"
},
{
    primary:"#2b5e5e",
    secondary:"#233d46"
},
{
    primary:"#423964",
    secondary:"#897D5e"
},
{
    primary:"#43B9B2",
    secondary:"#d98c72"
}
]
