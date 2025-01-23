export const LeftRibbonsData = [
  {
    text: "Use the class of ",
    code: ".ribbon-*",
  },
  {
    text: "[ribbon-space-bottom/ribbon-clip/ribbon-vertical-left/ribbon-bookmark/ribbon-clip-bottom/ribbon-vertical-left] through create ribbons and all ribbon colors are available.",
    code: "[.ribbon-*]",
  },
];

export const AnimatedRibbonsData = [
  {
    text: "Use the class of ",
    code: " [smooth-animate / vertical-left-animate ]",
  },
  {
    text: "through create ribbons and all ribbon animations are available.",
  },
];
const LoveIcon = () => {
  return <i className="icofont icofont-love"></i>;
};

const GiftIcon = () => {
  return <i className="icon-gift"></i>;
};

export const LeftRibbonsDataList = [
  {
    className: "ribbon-wrapper ",
    ribbonClass: "ribbon-secondary ribbon-clip",
    title: "SAVE 50%",
    span: [
      {
        text: "The ",
        spanText: "ribbon and tag",
      },
      {
        text: " frequently appear together because they have similar features that capture attention and make wonderful spaces for vital information.",
      },
    ],
  },
  {
    className: "ribbon-vertical-left-wrapper vertical-lp-space alert-light-light",
    ribbonClass: "ribbon-warning ribbon-vertical-left",
    icon: <LoveIcon />,
    span: [
      {
        text: "The ",
        spanText: "ribbons",
      },
      {
        text: " have also been utilised by certain inventive developers in the menu and navigation choices.The possibilities are endless when it comes to creativity.",
      },
    ],
  },
  {
    className: "ribbon-wrapper",
    ribbonClass: "ribbon-info ribbon-bookmark",
    title: "Cashback 20%",
    span: [
      {
        text: "Although the majority of the ",
        spanText: "ribbon components",
      },
      {
        text: " on this list have static, straightforward styles, we have also gathered dynamic ribbons.",
      },
    ],
  },
  {
    className: "ribbon-wrapper-bottom clip-bp-space alert-light-light",
    ribbonClass: " ribbon-dark ribbon-clip-bottom",
    title: "40% OFF",
    span: [
      {
        text: "Edge ",
        spanText: "ribbon ",
      },
      {
        text: "among the most often used ",
        spanText: "ribbon styles is CSS.",
      },
      {
        text: " This design's author provides you with a short piece of code that has room for several optional components and effects.",
      },
    ],
  },
  {
    className: "ribbon-vertical-left-wrapper vertical-lp-space",
    ribbonClass: "ribbon-bookmark ribbon-vertical-left ribbon-danger",
    icon: <GiftIcon />,
    span: [
      {
        text: "The entire ribbon and other components seem clean since they were created entirely with CSS. You may utilize the ",
        spanText: "ribbons",
      },
      {
        text: " as cards to deliver the material.",
      },
    ],
  },
];

export const RightRibbonData = [
  {
    text: "Use the class of ",
    code: ".ribbon-*",
  },
  {
    text: "[ribbon-right/ribbon-clip-right/ribbon-vertical-right/ribbon-bookmark/ribbon-clip-bottom-right/ribbon-vertical-right] through create ribbons and all ribbon colors are available.",
    code: "[.ribbon-*]",
  },
];

const SignalIcon = () => {
  return <i className="icon-signal"></i>;
};

const TaxiIcon = () => {
  return <i className="fa fa-taxi"></i>;
};

export const RightRibbonDataList = [
  {
    className: "ribbon-wrapper-right alert-light-light",
    ribbonClass: "ribbon-primary ribbon-clip-right ribbon-right",
    title: "SAVE 50%",
    span: [
      {
        text: "Since very early times, ",
        spanText: "ribbon designs",
      },
      {
        text: " have been a part of web design. There is a design for you in this collection, regardless of whether you use ",
        spanText: "CSS ribbons ",
      },
      {
        text: " to identify your items.",
      },
    ],
  },
  {
    className: "ribbon-vertical-right-wrapper vertical-rp-space",
    ribbonClass: "ribbon-bookmark ribbon-vertical-right ribbon-secondary",
    icon: <SignalIcon />,
    span: [
      {
        text: "The entire ribbon and other components seem clean since they were created entirely with CSS. You may utilize the ",
        spanText: "ribbons",
      },
      {
        text: " as cards to deliver the material.",
      },
    ],
  },
  {
    className: "ribbon-wrapper alert-light-light",
    ribbonClass: "ribbon-warning ribbon-bookmark ribbon-right",
    title: "SAVE 20%",
    span: [
      {
        text: "Edge ",
        spanText: "ribbon ",
      },
      {
        text: "among the most often used ",
        spanText: "ribbon styles is CSS.",
      },
      {
        text: " This design's author provides you with a short piece of code that has room for several optional components and effects.",
      },
    ],
  },
  {
    className: "ribbon-wrapper-bottom clip-bp-space",
    ribbonClass: "ribbon-success ribbon-clip-bottom-right",
    title: "Cashback 10%",
    span: [
      {
        text: "Although the majority of the   ",
        spanText: "ibbon components",
      },
      {
        text: " on this list have static, straightforward styles, we have also gathered dynamic ribbons.",
      },
    ],
  },
  {
    className: "ribbon-vertical-right-wrapper vertical-rp-space alert-light-light",
    ribbonClass: "ribbon-danger ribbon-vertical-right",
    icon: <TaxiIcon />,
    span: [
      {
        text: "The ",
        spanText: "ribbons",
      },
      {
        text: " have also been utilized by certain inventive developers in the menu and navigation choices. The possibilities are endless when it comes to creativity.",
      },
    ],
  },
];

export const AnimationribbonData = [
  {
    id: 1,
    wrapperClass: 'ribbon-vertical-right-wrapper border border-1 vertical-rp-space height-equal',
    ribbonClass: 'ribbon ribbon-vertical-right ribbon-secondary ribbon-bottom-arrow',
    label: '10% OFF',
    description: 'Ribbon designs use the className of <em className="txt-danger">ribbon-vertical-right & ribbon-bottom-arrow</em> through create top-start ribbon and common class use ribbon.',
  },
  {
    id: 2,
    ribbonClass: 'animated-ribbon ribbon-wrapper smooth-animate border border-1 height-equal alert-light-light',
    label: 'Upcoming',
    description: 'Ribbon designs use the class of <em className="txt-danger">animated-ribbon & smooth-animate</em> through create bottom-end ribbon and common class use "ribbon".',
    svgIcon: true,
  },
  {
    id: 3,
    ribbonClass: 'ribbon-wrapper smooth-animate border border-1 height-equal',
    label: 'Hot',
    link: '#!',
    description: 'Ribbon design use the class of <em className="txt-danger">smooth-animate</em> through create top-start ribbon and common class use `ribbon`.',
  },
  {
    id: 4,
    ribbonClass: 'ribbon-wrapper border border-1 height-equal alert-light-light vertical-left-animate',
    label: 'Latest',
    icon: 'fa fa-bolt',
    description: 'Ribbon designs use the class of <em className="txt-danger">ribbon-bookmark & vertical-left-animate</em> through create top-start ribbon and common class use `ribbon`.',
  },
  {
    id: 5,
    ribbonClass: 'ribbon-wrapper border border-1 height-equal triangular-ribbon',
    label: 'Triangular',
    description: 'Ribbon designs use the class of <em className="txt-danger">triangular-ribbon-box</em> through create top-start ribbon and common class use "ribbon".',
    svgIcon: true,
  },
  {
    id: 6,
    ribbonClass: 'ribbon-vertical-right-wrapper border border-1 vertical-rp-space height-equal alert-light-light vertical-ribbon-animate',
    label: 'FlashSale',
    icon: 'fa fa-bolt',
    description: 'Ribbon designs use the class of <em className="txt-danger">ribbon-vertical-right & ribbon-bookmark</em> through create top-end ribbon and common class use "ribbon".',
  },
];
