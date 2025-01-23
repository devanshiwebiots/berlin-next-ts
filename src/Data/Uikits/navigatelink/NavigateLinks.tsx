export const LinkUtilitiesSubTitle = [{ text: "Colored links can also be modified by our", code: "link utilities." }];

export const LinkUnderlinesSubTitle = [
  {
    text: "Use ",
    code: "link-underline-* ",
  },
  {
    text: "classes to link underlines. Change the underline's color independent of the link text color.",
  },
];

export const BorderOpacitySubTitle = [
  {
    text: "Use ",
    code: "border-opacity-* (10,25,50,75) ",
  },
  {
    text: "class to border opacity links.",
  },
];

export const BackgroundColorOpacitySubTitle = [
  {
    text: "Use ",
    code: "bg-opacity-* (10,25,50,75) ",
  },
  {
    text: "class to background opacity links.",
  },
];

export const CommonLinksSubTitle = [
  {
    text: "Link utilities are used to stylize your anchors to adjust their link opacity ",
    code: "(link-opacity-*), ",
  },
  {
    text: "hovered link Opacity ",
    code: "(link-opacity-*-hover), ",
  },
  {
    text: "underline opacity ",
    code: "(link-underline-opacity-*), ",
  },
  { text: "underline offset", code: "(link-offset-*)," },
  {
    text: "and more.",
  },
];

export const LinkUtilitiesData = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "body-emphasis"];

export const LinkUnderlinesData = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];

export const BorderOpacityData = [
  { class: "mb-xl-3 mb-2 border-primary", text: "default" },
  { class: "mb-xl-3 mb-2 border-opacity-75", text: "75% opacity" },
  { class: "mb-xl-3 mb-2 border-opacity-50", text: "50% opacity" },
  { class: "mb-xl-3 mb-2 border-opacity-25", text: "25% opacity" },
  { class: "border-opacity-10", text: "10% opacity" },
];

export const BackgroundColorOpacityData = [
  { class: "bg-primary text-white", text: "default" },
  { class: "text-white bg-opacity-75", text: "75% opacity" },
  { class: "text-dark bg-opacity-50", text: "50% opacity" },
  { class: "text-dark bg-opacity-25", text: "25% opacity" },
  { class: "text-dark bg-opacity-10", text: "10% opacity" },
];

export const CommonLinksData = [
  {
    title: "Link Opacity",
    class: "link-opacity-wrapper",
    links: [
      { class: "link-opacity-10", text: "Link opacity 10"},
      { class: "link-opacity-25", text: "Link opacity 25"},
      { class: "link-opacity-50", text: "Link opacity 50"},
      { class: "link-opacity-75", text: "Link opacity 75"},
      { class: "link-opacity-100", text: "Link opacity 100"},
    ],
  },
  {
    title: "Hovered Link Opacity",
    class: "link-opacity-wrapper",
    links: [
      { class: "link-opacity-10-hover", text: "Link hover opacity 10"},
      { class: "link-opacity-25-hover", text: "Link hover opacity 25"},
      { class: "link-opacity-50-hover", text: "Link hover opacity 50"},
      { class: "link-opacity-75-hover", text: "Link hover opacity 75"},
      { class: "link-opacity-100-hover", text: "Link hover opacity 100"},
    ],
  },
  {
    title: "Underline Opacity",
    class: "underline-opacity-wrapper",
    links: [
      { class: "link-offset-2 link-underline link-underline-opacity-0", text: "Underline opacity 0"},
      { class: "link-offset-2 link-underline link-underline-opacity-10", text: "Underline opacity 10"},
      { class: "link-offset-2 link-underline link-underline-opacity-25", text: "Underline opacity 25"},
      { class: "link-offset-2 link-underline link-underline-opacity-50", text: "Underline opacity 50"},
      { class: "link-offset-2 link-underline link-underline-opacity-75", text: "Underline opacity 75"},
      { class: "link-offset-2 link-underline link-underline-opacity-100", text: "Underline opacity 100"},
    ],
  },
  {
    title: "Underline Offset",
    class: "underline-opacity-wrapper",
    links: [
      { text: "Default link"},
      { class: "link-offset-1", text: "Offset 1 link"},
      { class: "link-offset-2", text: "Offset 2 link"},
      { class: "link-offset-3", text: "Offset 3 link"},
    ],
  },
];
