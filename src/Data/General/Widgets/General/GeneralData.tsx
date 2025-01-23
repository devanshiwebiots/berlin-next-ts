import { ApexOptions } from "apexcharts";

export const breakdownData = [
  { label: "Online Order", value: 40, progress: 50, color: "primary" },
  { label: "Offline Order", value: 60, progress: 70, color: "secondary" },
  { label: "Cash On Delivery", value: 20, progress: 30, color: "success" },
  { label: "Return Order", value: 50, progress: 50, color: "warning" },
];

export const TransactionsData = [
  {
    icon: "send",
    label: "Receipt from Wallet",
    date: "Mar 21,2024, 4:45pm",
    status: "Completed",
    amount: "+ $248.00",
    color: "primary"
  },
  {
    icon: "work",
    label: "Process refund to",
    date: "Feb 20,2024, 2:10pm",
    status: "Pending",
    amount: "+ $548.00",
    color: "secondary"
  },
  {
    icon: "graph",
    label: "Sending to Citizen",
    date: "Jun 17,2024, 12:45pm",
    status: "Verified",
    amount: "+ $953.00",
    color: "success"
  },
  {
    icon: "payment-bookmark",
    label: "Payment From #425",
    date: "Oct 30,2024, 1:31pm",
    status: "Rejected",
    amount: "+ $349.00",
    color: "warning"
  }
]

export const SocialData = [
  {
    id: "facebook",
    name: "Facebook",
    imgSrc: "/general-widgets/social/1.png",
    change: "+22.9%",
    changeClass: "font-success",
    count: "12,098",
    metric: "Likes",
    radialData: {
      color: ["#007bff"],
      dropshadowColor: "#007bff",
      radialYseries: [78],
    },
  },
  {
    id: "instagram",
    name: "Instagram",
    imgSrc: "/general-widgets/social/2.png",
    change: "-27.4%",
    changeClass: "font-danger",
    count: "15,080",
    metric: "Followers",
    radialData: {
      color: ["#dc3545"],
      dropshadowColor: "#dc3545",
      radialYseries: [70],
    },
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    imgSrc: "/general-widgets/social/3.png",
    change: "+76.10%",
    changeClass: "font-success",
    count: "12,564",
    metric: "Followers",
    radialData: {
      color: ["#58b232"],
      dropshadowColor: "#58b232",
      radialYseries: [50],
    },
  },
  {
    id: "youtube",
    name: "Youtube",
    imgSrc: "/general-widgets/social/4.png",
    change: "+62.08%",
    changeClass: "font-success",
    count: "12,564",
    metric: "Followers",
    radialData: {
      color: ["#ffb829"],
      dropshadowColor: "#ffb829",
      radialYseries: [80],
    },
  },
];


export function radialCommonOption(data: { radialYseries: any; dropshadowColor: any; color: any; }):ApexOptions {
  return {
    series: data.radialYseries,
    chart: {
      height: 130,
      type: "radialBar",
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 10,
        color: data.dropshadowColor,
        opacity: 0.35,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        track: {
          strokeWidth: "60%",
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
          value: {
            color: "var(--body-font-color)",
            fontSize: "14px",
            show: true,
            offsetY: -10,
          },
        },
      },
    },
    colors: data.color,
    stroke: {
      lineCap: "round",
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 130,
          },
        },
      },
    ],
  };
}