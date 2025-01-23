import { DividerCardProps } from "@/Types/UikitsType";

export const DividerData:DividerCardProps[] = [
    {
      title: "Horizontal Solid Divider",
      description: "divider-body-1",
      dividers: [
        { type: "divider-body-1", color: "txt-primary", icon: "fa-modx txt-primary", text: "Primary" },
        { type: "divider-body-1", color: "txt-secondary", icon: "fa-recycle txt-secondary", text: "Secondary" },
        { type: "divider-body-1", color: "txt-success", icon: "fa-leaf txt-success", text: "Success" }
      ]
    },
    {
      title: "Horizontal Dashed Divider",
      description: "divider-body-2",
      dividers: [
        { type: "divider-body-2", color: "divider-danger",bg:"danger", icon: "fa-heart txt-danger", text: "" },
        { type: "divider-body-2", color: "divider-warning",bg:"warning", icon: "fa-star txt-warning", text: "" },
        { type: "divider-body-2", color: "divider-success",bg:"success", icon: "fa-trophy txt-success", text: "" }
      ]
    },
    {
      title: "Horizontal Dotted Divider",
      description: "divider-body-3",
      dividers: [
        { type: "divider-body-3", color: "divider-primary", text: "Primary" },
        { type: "divider-body-3", color: "divider-secondary", text: "Secondary" },
        { type: "divider-body-3", color: "divider-warning", text: "Warning" },
        { type: "divider-body-3", color: "divider-info", text: "Info" },
        { type: "divider-body-3", color: "divider-dark", text: "Dark" }
      ]
    },
    
  ]
  
  export const HorizontalSolidDividerSubTitle = [
    {
      text: "Use",
      code: "divider-body-1",
    },
    {
      text: "class for linear divider.",
    },
  ];
  
  export const HorizontalDashedDividerSubTitle = [
    {
      text: "Use",
      code: "divider-body-2",
    },
    {
      text: "class for dashed divider.",
    },
  ];
  
  export const HorizontalDottedDividerSubTitle = [
    {
      text: "Use",
      code: "divider-body-3",
    },
    {
      text: "class for dotted divider.",
    },
  ];
  
  export const VerticalSolidDividerSubTitle = [
    {
      text: "Use",
      code: "vertical-divider",
    },
    {
      text: "and",
      code: "vertical-line",
    },
    {
      text: "class for dashed divider.",
    },
  ];
  
  export const VerticalDottedDividerSubTitle = [
    {
      text: "Use",
      code: "dotted-divider",
    },
    {
      text: "and",
      code: "vertical-line",
    },
    {
      text: "class for dotted divider.",
    },
  ];
  
  export const VerticalDoubleDividerSubTitle = [
    {
      text: "Use",
      code: "double-divider",
    },
    {
      text: "and",
      code: "vertical-line",
    },
    {
      text: "class for double divider.",
    },
  ];
  
  export const AnimatedColorDividerSubTitle = [
    {
      text: "Use ",
      code: "animated-line ",
    },
    {
      text: "and ",
      code: "animated-divider ",
    },
    {
      text: "classes to create a linear animated divider.",
    },
  ];
  
  export const HorizontalEditableDividerSubTitle = [
    {
      text: "Use ",
      code: "horizontal-variation ",
    },
    {
      text: "and ",
      code: "double-line-* ",
    },
    {
      text: "classes to create a thickness divider.",
    },
  ];
  
  export const SimpleHorizontalDividerSubTitle = [
    {
      text:"Use ",
      code:"divider-h-line "
    },
    {
      text:"class for horizontal divider."
    }
  ]
  
  export const SimpleVerticalDividerSubTitle = [
    {
      text:"Use ",
      code:"Vr "
    },
    {
      text:"class for vertical divider."
    }
  ]
  
  
  
   
  export const VerticalSolidDividerData = [
    { color: "primary", text: "Primary", textClass: "border border" },
    { color: "secondary", text: "Secondary", textClass: "rounded-pill border border" },
    { icon: "stroke-social", color: "warning" },
    { color: "success", text: "Success", textClass: "txt" },
  ];
  
  export const VerticalDottedDividerData = [
    { color: "success", text: "Success", textClass: "border border" },
    { color: "warning", text: "Warning", textClass: "rounded-pill border border" },
    { icon: "stroke-social", color: "danger" },
    { color: "dark", text: "Dark", textClass: "txt" },
  ];
  
  export const VerticalDoubleDividerData = [
    { color: "secondary", text: "Secondary", textClass: "border border" },
    { color: "success", text: "Success", textClass: "rounded-pill border border" },
    { icon: "stroke-social", color: "dark" },
    { color: "warning", text: "Warning", textClass: "txt" },
  ];
  
  export const HorizontalEditableDividerData = [
    { text: "Primary" },
    { text: "Seconder" },
    { text: "Warning" },
    { text: "Info" },
    { text: "Dark" },
  ];
  
  export const SimpleHorizontalDividerData = ["primary", "secondary", "success", "info", "warning","danger", "dark"]