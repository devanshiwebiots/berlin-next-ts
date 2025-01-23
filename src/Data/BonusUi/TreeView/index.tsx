import { NestedItem } from "@/Types/BonusUiType";

export const BasicTreeData = [
  {
    text: "Use the dynamic tree view with checkboxes.",
  },
];

export const TreeViewList = {
  name: "",
  children: [
    {
      name: "root",
      children: [
        {
          name: "Applications",
          children: [
            {
              name: "Ecommerce",
              children: [{ name: "Product" }, { name: "Cart" }, { name: "Invoice" }],
            },
            {
              name: "Users",
              children: [{ name: "User-profile" }, { name: "User-edit" }, { name: "User-cards" }],
            },
            {
              name: "Chat",
              children: [{ name: "Chat-app" }, { name: "Video-chat" }],
            },
          ],
        },
        {
          name: "Components",
          children: [
            {
              name: "UI-Kits",
              children: [{ name: "Typography" }, { name: "Avatars" }, { name: "Grid" }],
            },
            {
              name: "Bonus-UI",
              children: [{ name: "Toasts" }, { name: "Rating" }, { name: "Pagination" }],
            },
            {
              name: "Charts",
              children: [{ name: "Apex-chart" }, { name: "Google-chart" }, { name: "Chartjs-chart" }],
            },
          ],
        },
        {
          name: "Miscellaneous",
          children: [
            {
              name: "Gallery",
              children: [{ name: "Gallery-grid" }, { name: "Gallery-grid-desc" }, { name: "Masonary-gallery" }],
            },
            {
              name: "Blog",
              children: [{ name: "Blog-details" }, { name: "Blog-single" }, { name: "Add-post" }],
            },
            {
              name: "Editors",
              children: [{ name: "CK-editors" }, { name: "MDE-editors" }, { name: "ACE-editors" }],
            },
          ],
        },
      ],
    },
  ],
};

export const DisableTreeData = [
  {
    text: "Keep the list sorted by leaving it that way. It isn't feasible since the sort option is set to false.",
  },
];

export const StackableTreeData = [
  {
    text: "  It is also usually advised to make sure that the swapThreshold option is less than the default value of 1 or that the invertswap option is set to true. You may use",
    code: "icons, SVGs, photos ... etc. ",
  },
  {
    text: "according to your needs.",
  },
];

export const SharedListsTreeData = [
  {
    text: " Toggle between lists by dragging. You can drag an item to share it, and the shared item will remain in the original list.",
  },
];

export const SimpleTreeData = [
  {
    text: "To change the basic draggable option, simply drag and drop using the",
    code: "basic-list ",
  },
  {
    text: "id.",
  },
];

export const HandleTreeData = [
  {
    text: "Simply click the handler and drag and drop to alter the handle draggable option.",
  },
  
];

export const NesetditemList = [
  {
    id: "1",
    content: "Item 1.1",
    children: [
      {
        id: "2",
        content: "Item 2.1",
      },
      {
        id: "3",
        content: "Item 2.2",
        children: [
          { id: "4", content: "Item 3.1" },
          { id: "5", content: "Item 3.2" },
          { id: "6", content: "Item 3.3" },
        ],
      },
      { id: "7", content: "Item 2.3" },
    ],
  },
  { id: "8", content: "Item 1.2" },
  {
    id: "9",
    content: "Item 1.3",
    children: [
      { id: "10", content: "Item 2.1" },
      { id: "11", content: "Item 2.2" },
      { id: "12", content: "Item 2.3" },
    ],
  },
  { id: "13", content: "Item 1.4" },
];

export const SwapData = [
  {
    id: "1",
    content: "Assets",
    image: "tree/s1.png",
    children: [
      {
        id: "1-1",
        content: "images",
        image: "tree/picture.png",
        children: [
          {
            id: "1-1-1",
            content: "social.png",
            image: "tree/social.png",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    content: "JS",
    image: "tree/js.png",
    children: [
      {
        id: "2-1",
        content: "chart",
        image: "tree/chart.png",
        children: [
          {
            id: "2-1-1",
            content: "apex-chart",
            image: "tree/chart1.png",
            children: [
              {
                id: "2-1-1-1",
                content: "apex-chart.js",
                image: "tree/chart1.png",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    content: "Audio",
    image: "tree/volume.png",
  },
  {
    id: "4",
    content: "CSS",
    image: "tree/html.png",
    children: [
      {
        id: "4-1",
        content: "vendors",
        image: "tree/slick.png",
        children: [
          {
            id: "4-1-1",
            content: "emoji",
            image: "tree/emoji.png",
          },
          {
            id: "4-1-2",
            content: "slick",
            image: "tree/slick.png",
          },
        ],
      },
    ],
  },
];

export const sharedListsData = {
  leftList: [
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" },
    { id: "4", content: "Item 4" },
    { id: "5", content: "Item 5" },
  ],
  rightList: [
    { id: "6", content: "Item 6" },
    { id: "7", content: "Item 7" },
    { id: "8", content: "Item 8" },
    { id: "9", content: "Item 9" },
    { id: "10", content: "Item 10" },
  ],
};

export const disabledListData = [
  { id: "1", content: "Online course" },
  { id: "2", content: "Crypto" },
  { id: "3", content: "Social" },
  { id: "4", content: "Chart" },
  { id: "5", content: "General" },
];

export const handlelistItems = ["Home", "Products", "About Us", "Contact Us", "Applications", "Frameworks"];
