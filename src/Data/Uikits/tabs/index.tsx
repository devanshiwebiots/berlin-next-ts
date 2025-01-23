import { AnimatedTabData, TabData } from "@/Types/UikitsType";

export const TabsData = [
  {
    text: "Use the ",
    code: ".nav-link",
  },
  {
    text: " with ",
    code: ".show ",
  },
  {
    text: "class to jump particular tabs.",
  },
];

export const IconTabData = [
  {
    text: "Use the ",
    code: ".nav-link",
  },
  {
    text: "with feather icons. And ",
    code: ".show ",
  },
  {
    text: " class to tabs change.",
  },
];

export const VerticalTabData = [
  {
    text: "Use the ",
    code: ".nav-link",
  },
  {
    text: "with feather icons. And ",
    code: ".show ",
  },
  {
    text: " class to tabs change.",
  },
];

export const PillsTabData = [
  {
    text: "Use the ",
    code: "data-bs-toggle='pill'",
  },
  {
    text: " to tabs pill shape. And mandatory for ",
    code: "active ",
  },
  {
    text: " class.",
  },
];

export const BackgroundPillsTabData = [
  {
    text: "Use of the ",
    code: "active'",
  },
  {
    text: " class on the ",
    code: "nav-link ",
  },
  {
    text: " and backdrop tab with the.",
    code: "new-pills ",
  },
  {
    text: " class.",
  },
];

export const ArrowTabData = [
  {
    text: "Use of the ",
    code: "active'",
  },
  {
    text: " class on the ",
    code: "nav-link ",
  },
  {
    text: " and backdrop tab with the.",
    code: "new-item ",
  },
  {
    text: " class.",
  },
];

export const AnimatedbHeadData = [
  {
    text: "Use of the ",
    code: "active'",
  },
  {
    text: " class on the ",
    code: "nav-link ",
  },
  {
    text: "  It is possible to build an animated tab with the.",
    code: "horizontal-icons-tab  ",
  },
  {
    text: " class.",
  },
];


export const JustifyTabsData = [
  {
    text: "Use the ",
    code: ".nav-link",
  },
  {
    text: " with ",
    code: ".active ",
  },
  {
    text: "class and set content using flex property.",
  },
];

export const Data = [
  {
    id: "1",
    items: [
      {
        src: "avtar/3.jpg",
        title: "Kathy M. Anderson",
        number: "440-494-0729",
      },
      {
        src: "avtar/4.jpg",
        title: "Lillian J. Goodfellow",
        number: "239-664-7751",
      },
      {
        src: "avtar/7.jpg",
        title: "Carolyn A. Sutton",
        number: "218-793-6609",
      },
      {
        src: "avtar/11.jpg",
        title: "Mary O. Miller",
        number: "720-744-0921",
      },
      {
        src: "avtar/16.jpg",
        title: "Patricia H. Hummel",
        number: "314-445-1451",
      },
      {
        src: "avtar/4.jpg",
        title: "Minnie F. Evans",
        number: "718-740-8438",
      },
    ],
  },
  {
    id: "2",
    items: [
      {
        src: "blog/9.jpg",
        title: "Thomas A. Leroy",
        number: "305-539-6871",
      },
      {
        src: "blog/12.png",
        title: "Mark S. Ward",
        number: "303-561-8880",
      },
      {
        src: "blog/14.png",
        title: "Emily T. Hooper",
        number: "301-553-1836",
      },
      {
        src: "blog/comment.jpg",
        title: "Natasha W. Watson",
        number: "267-605-4499",
      },
      {
        src: "blog/9.jpg",
        title: "Jennifer A. Camacho",
        number: "770-527-7554",
      },
      {
        src: "avtar/3.jpg",
        title: "Ann J. Strickland",
        number: "469-218-4678",
      },
    ],
  },
  {
    id: "3",
    items: [
      {
        src: "avtar/11.jpg",
        title: "Jaclyn T. Duncan",
        number: "413-618-9222",
      },
      {
        src: "avtar/16.jpg",
        title: "MChristine H. Lin",
        number: "909-219-0342",
      },
      {
        src: "avtar/3.jpg",
        title: "Ronnie S. Mountain",
        number: "978-426-9732",
      },
      {
        src: "blog/12.png",
        title: "Louise A. Hilliard",
        number: "502-262-5600",
      },
      {
        src: "blog/comment.jpg",
        title: "Kayla Hutt",
        number: "312-456-8275",
      },
      {
        src: "blog/4.jpg",
        title: "Amber Cecil",
        number: "802-662-2407",
      },
    ],
  },
];

export const MaterialData = [
  {
    text: "Use the ",
    code: ".nav-link",
  },
  {
    text: " with ",
    code: ".active ",
  },
  {
    text: "class through jump another tabs.And ",
    code: "aria-orientation='vertical'",
  },
  {
    text: "class through jump another tabs.And ",
  },
];

export const MaterialStyleData = [
  {
    text: "Use the ",
    code: ".nav-link",
  },
  {
    text: " with ",
    code: ".active ",
  },
  {
    text: "class through access new tabs. And icons of design for attractive webpage.",
  },
];

const Star = () => {
  return <i className='ico-color icofont icofont-star'></i>;
};

export const MaterialStyleDataList = [
  {
    tabId: "1",
    header: "User Details:",
    tableHeaders: ["#", "Name", "Country", "Contact No"],
    tableData: [
      { id: 1, name: "Neha", country: "India", contactNo: "5698741236" },
      { id: 2, name: "Jacklin", country: "Thailand", contactNo: "7800030320" },
    ],
  },
  {
    tabId: "2",
    header: "Description:",
    tableHeaders: ["Technology", "Interest", "Salary Expected"],
    tableData: [
      { technology: "Web Designer", interest: "HTML,CSS,JS,SCSS", salaryExpected: "45000" },
      { technology: "UX Designer", interest: "Figma,Photoshop,craft", salaryExpected: "20000" },
    ],
  },
  {
    tabId: "3",
    header: "Review:",
    tableHeaders: ["#", "Name", "Country", "Rating"],
    tableData: [
      {
        id: 1,
        name: "Neha",
        country: "India",
        rating: (
          <>
            <Star />
            <Star />
            <Star />
            <Star />
          </>
        ),
      },
      {
        id: 3,
        name: "Irfan",
        country: "India",
        rating: (
          <>
            <Star />
            <Star />
            <Star />
          </>
        ),
      },
    ],
  },
];

export const BorderTabData = [
  {
    text: "Use the ",
    code: ".nav-link",
  },
  {
    text: " with ",
    code: ".active ",
  },
  {
    text: "class. And hover effect added on bottom border styles.",
  },
];


export const BottomTabs:TabData[] = [
  {
    id: 'html',
    title: 'CSS',
    imageSrc: '/assets/images/tree/html.png',
    content: [
      "One of the three main web technologies is CSS. The terms 'cascading' and 'style,' with cascading indicating how one style can cascade from another, are actually the key to understanding CSS, which stands for Cascading Style Sheets.",
      "To specify how HTML code will appear on a website, utilize CSS."
    ]
  },
  {
    id: 'vendor',
    title: 'Vendors',
    imageSrc: '/assets/images/tree/vendor.png',
    content: [
      "To improve the development of your website, find a carefully chosen list of premier suppliers. Use our dependable network to locate the ideal partners for the accomplishment of your project.",
      "Cutting-edge design tools, or specialized services, our curated list ensures you have access to the best resources for a seamless and successful website development experience."
    ]
  },
  {
    id: 'js',
    title: 'Javascript',
    imageSrc: '/assets/images/tree/js.png',
    content: [
      "Development of interactive and adaptable websites is made possible by JavaScript, the web's dynamic programming language.",
      "Building strong and interactive online apps requires JavaScript, which is essential for everything from enabling asynchronous requests to designing captivating user interfaces."
    ]
  }
];

export const Animatedtabs: AnimatedTabData[] = [
  {
    id: 'dubai',
    title: 'Home',
    iconClass: 'icofont-building-alt',
    content: 'This is some placeholder content the Home tab\'s associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other. This tab provides animation with gradient hover effects and amazing smooth transition for your projects. Also, the tab has horizontal alignment and title with amazing icons.',
  },
  {
    id: 'paris',
    title: 'Profile',
    iconClass: 'icofont-building-alt',
    content: 'This is some placeholder content the Profile tab\'s associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other. This tab provides animation with gradient hover effects and amazing smooth transition for your projects. Also, the tab has horizontal alignment and title with amazing icons.',
  },
  {
    id: 'tokyo',
    title: 'About Us',
    iconClass: 'icofont-building-alt',
    content: 'This is some placeholder content the About Us tab\'s associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other. This tab provides animation with gradient hover effects and amazing smooth transition for your projects. Also, the tab has horizontal alignment and title with amazing icons.',
  },
  {
    id: 'rome',
    title: 'Gallery',
    iconClass: 'icofont-building-alt',
    content: 'This is some placeholder content the Gallery tab\'s associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other. This tab provides animation with gradient hover effects and amazing smooth transition for your projects. Also, the tab has horizontal alignment and title with amazing icons.',
  },
  {
    id: 'seoul',
    title: 'FAQ',
    iconClass: 'icofont-building-alt',
    content: 'This is some placeholder content the FAQ tab\'s associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other. This tab provides animation with gradient hover effects and amazing smooth transition for your projects. Also, the tab has horizontal alignment and title with amazing icons.',
  }
];