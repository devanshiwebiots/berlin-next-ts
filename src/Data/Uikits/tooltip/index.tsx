import { ThankYouBold, ThankYouItalic } from "@/Constant";

export const BasicTooltipData = [
    {
      text: " Use the ",
      code: "data-bs-title",
    },
    {
      text: " to change tooltip title and ",
      code: "data-bs-toggle",
    },
    {
      text: " to add tooltip attribute.",
    },
  ];
  
  export const ColorTooltipData = [
    {
      text: " Use the ",
      code: "btn- *",
    },
    {
      text: "to change dark background color and ",
      code: "data-bs-placement='*' ",
    },
    {
      text: "to tooltip positions change.",
    },
  ];
  
  export const ColorTooltipList = [
    {
      id: 4,
      btnColor: "secondary",
      tooltip: "Secondary",
      btntext: "Secondary",
      placement: "top",
    },
    {
      id: 5,
      btnColor: "success",
      tooltip: "Success",
      btntext: "Success",
      placement: "top",
    },
    {
      id: 6,
      btnColor: "warning",
      tooltip: "Warning",
      btntext: "Warning",
      placement: "top",
    },
    {
      id: 7,
      btnColor: "danger",
      tooltip: "Danger",
      btntext: "Danger",
      placement: "top",
    },
  ];
  
  export const DirectionTooltipData = [
    {
      text: " Use the ",
      code: "btn-*",
    },
    {
      text: " to change dark background color and",
      code: " data-bs-placement='*'",
    },
    {
      text: "[top/right/bottom/left] to tooltip direction change.",
    },
  ];
  
  export const DirectionTooltipList = [
    {
      id: 9,
      placement: "right",
      tooltip: "Tooltip on right",
      btntext: "Tooltip on right",
      btnColor: "secondary",
    },
    {
      id: 10,
      placement: "bottom",
      tooltip: "Tooltip on bottom",
      btntext: "Tooltip on bottom",
      btnColor: "success",
    },
    {
      id: 11,
      placement: "left",
      tooltip: "Tooltip on left",
      btntext: "Tooltip on left",
      btnColor: "warning",
    },
  ];
  
  export const HoverTooltipData = [
    {
      text: " Use the ",
      code: "bg-*-light",
    },
    {
      text: " to change light background color and ",
      code: "data-bs-title '",
    },
    {
      text: " to the content under the HTML tag.",
    },
  ];
  
  export const HoverTooltipList = [
    {
      id: 13,
      tooltip: <div dangerouslySetInnerHTML={{ __html: ThankYouBold }}></div>,
      btntext: "Last Warning",
      className: "bg-warning",
      placement: "top",
      btnColor: "warning",
    },
    {
      id: 14,
      tooltip: <div dangerouslySetInnerHTML={{ __html: ThankYouItalic }}></div>,
      btntext: "It's Danger",
      className: "bg-danger",
      placement: "top",
      btnColor: "danger",
    },
    {
      id: 15,
      tooltip: <div dangerouslySetInnerHTML={{ __html: ThankYouBold }}></div>,
      btntext: "Coming Soon",
      className: "bg-info",
      placement: "top",
      btnColor: "info",
    },
  ];
  
  export const FillTooltipData = [
    {
      text: "Tooltip in hover effect through fill dark color.",
      code: "[.btn-outline-*]",
    },
    {
      text: " and ",
      code: "data-bs-title ",
    },
    {
      text: "to the content under the HTML Tag.",
    },
  ];
  
  export const FillTooltipList = [
    {
      id: 17,
      tooltip: "Tooltip Secondary",
      btntext: "Tooltip Secondary",
      btnColor: "secondary",
      placement: "top",
    },
    {
      id: 18,
      tooltip: "Tooltip Success",
      btntext: "Tooltip Success",
      btnColor: "success",
      placement: "top",
    },
    {
      id: 19,
      tooltip: "Tooltip Info",
      btntext: "Tooltip Info",
      btnColor: "info",
      placement: "top",
    },
  ];

  export const DisabledTooltipSubTitle = [
    {
      text: "Elements with the disabled attribute aren't interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). ideally made keyboard-focusable using",
      code: ' tabindex= "0" .',
    },
  ];
  
  export const SVGTooltipsSubtitle = [
    {
      text: "Use ",
      code: "bg-light-* ",
    },
    {
      text: "to change light background color and ",
      code: "stroke-* ",
    },
    {
      text: "to change SVG colors. ",
    },
  ];
  
  export const OutlineSVGTooltipsSubTitle = [
    {
      text: "Use the ",
      code: "btn-outline-* ",
    },
    {
      text: "class to alter the outline's color, and you can position the tooltip in any swing.",
    },
  ];

  export const SVGTooltipsData = [
    {
      class: "info",
      text: "Notification",
      icon: "email-box",
    },
    {
      class: "secondary",
      text: "Like",
      icon: "stroke-bookmark",
    },
    {
      class: "success",
      text: "Comment",
      icon: "stroke-msg",
    },
    {
      class: "primary",
      text: "Share",
      icon: "stroke-button",
    },
  ];

  export const OutlineSVGTooltipsData = [
    {
      class: "primary",
      text: "Notification",
      icon: <i className="icofont icofont-envelope"></i>,
    },
    {
      class: "danger",
      text: "Message",
      icon: <i className="icofont icofont-ui-text-loading"></i>,
    },
    {
      class: "primary",
      text: "Send",
      icon: <i className="icofont icofont-location-arrow"></i>,
    },
    {
      class: "danger",
      text: "Like",
      icon: <i className="icofont icofont-heart-alt"></i>,
    },
  ];

  export const LightTooltipsSubTitle = [
    {
      text: "Use the ",
      code: "button-light- *",
    },
    {
      text: " to change dark background color and ",
      code: "data-bs-placement='*' ",
    },
    {
      text: "to tooltip positions change.",
    },
  ];

  export const LightColorTooltipData = [
    {
      class: "primary",
      text: "Primary",
    },
    {
      class: "secondary",
      text: "Secondary",
    },
    {
      class: "success",
      text: "Success",
    },
    {
      class: "warning",
      text: "Warning",
    },
    {
      class: "danger",
      text: "Danger",
    },
    {
      class: "info",
      text: "info",
    },
  ];