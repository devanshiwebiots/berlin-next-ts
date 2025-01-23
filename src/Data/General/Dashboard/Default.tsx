import { Activity } from "@/Types/Dashboard.type";
import { ApexOptions } from "apexcharts";

export const monthlyDropdownList = ["Weekly", "Monthly", "Yearly"];

export const saleList = ["Offline", "Online"];

export const growthDetailsList = [
  {
    id: 1,
    text: "Total Revenue",
  },
];

//Charts
export var revenueGrowthOptions: ApexOptions = {
  series: [
    {
      name: "Online Sale",
      data: [120, 150, 250, 145, 130, 250, 200, 200, 300, 175, 155, 200],
    },
    {
      name: "Marketing Sale",
      data: [80, 105, 35, 65, 110, 45, 90, 145, 45, 65, 90, 90],
    },
  ],
  colors: ["#2A5699", "#EA6F4E"],
  chart: {
    type: "area",
    height: 314,
    toolbar: {
      tools: {
        zoom: false,
        zoomin: false,
        zoomout: false,
        reset: false,
        pan: false,
        download: false,
      },
    },
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
    },
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: "#fff",
        strokeColor: "#2A5699",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: "#fff",
        strokeColor: "#2A5699",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: "#fff",
        strokeColor: "#2A5699",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: "#fff",
        strokeColor: "#2A5699",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: "#fff",
        strokeColor: "#2A5699",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: "#fff",
        strokeColor: "#2A5699",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 7,
        fillColor: "#fff",
        strokeColor: "#2A5699",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 8,
        fillColor: "#fff",
        strokeColor: "#2A5699",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 9,
        fillColor: "#fff",
        strokeColor: "#2A5699",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 10,
        fillColor: "#fff",
        strokeColor: "#2A5699",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 1,
        fillColor: "#fff",
        strokeColor: "#EA6F4E",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 2,
        fillColor: "#fff",
        strokeColor: "#EA6F4E",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 3,
        fillColor: "#fff",
        strokeColor: "#EA6F4E",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 4,
        fillColor: "#fff",
        strokeColor: "#EA6F4E",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 5,
        fillColor: "#fff",
        strokeColor: "#EA6F4E",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 6,
        fillColor: "#fff",
        strokeColor: "#EA6F4E",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 7,
        fillColor: "#fff",
        strokeColor: "#EA6F4E",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 8,
        fillColor: "#fff",
        strokeColor: "#EA6F4E",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 9,
        fillColor: "#fff",
        strokeColor: "#EA6F4E",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 10,
        fillColor: "#fff",
        strokeColor: "#EA6F4E",
        size: 3,
        shape: "circle",
      },
    ],
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: "stepline",
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: {
        colors: ["var(--body-font-color)", "var(--body-font-color)", "var(--body-font-color)", "var(--body-font-color)", "var(--body-font-color)", "var(--body-font-color)", "var(--body-font-color)", "var(--body-font-color)", "var(--body-font-color)", "var(--body-font-color)", "var(--body-font-color)", "var(--body-font-color)"],
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: ["var(--body-font-color)"],
      },
      formatter: (value) => {
        return `${value}$`;
      },
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return '<div class="apex-tooltip p-2">' + "<span>" + '<span class="bg-primary">' + "</span>" + "Marketing Sale" + "<h3>" + "$" + series[seriesIndex][dataPointIndex] + "<h3/>" + "</span>" + "</div>";
    },
  },
};

export const growthData = [
  { label: "Total Revenue", value: 756841 },
  { label: "Total Sold", value: 435165 },
  { label: "Total Refunds", value: 618974 },
  { label: "Total Orders", value: 351743 },
];

export const activities = [
  { id: 1, title: "Made new repository", description: "Create different branches", icon: "box", time: "1 hour", bgColorClass: "bg-light-primary", iconcolor: "primary" },
  { id: 2, title: "System Updates", description: "Changes in system settings", icon: "dolar", time: "5 hours", bgColorClass: "bg-light-secondary", iconcolor: "secondary" },
  { id: 3, title: "Customer Review", description: "Reviewed all comments", icon: "round-right", time: "12 Jun", bgColorClass: "bg-light-primary", iconcolor: "primary" },
  { id: 4, title: "Error Reporting", description: "Highlight recent errors", icon: "pie-chart", time: "10 May", bgColorClass: "bg-light-secondary", iconcolor: "secondary" },
  { id: 5, title: "Enhanced Security", description: "Provides timely alert", icon: "globe", time: "18 Feb", bgColorClass: "bg-light-primary", iconcolor: "primary" },
];

export const tasks = [
  { id: 1, title: "Review User Feedback", name: "for revision to Smith", description: "Sending feedback", projectNumber: "#685", bgColorClass: "bg-primary", icon: "checkbox" },
  { id: 2, title: "Manage User Permissions", name: "for revision to Smith", description: "Sending project", projectNumber: "#748", bgColorClass: "bg-secondary", icon: "checkbox" },
  { id: 3, title: "Generate Sales Reports", name: "for revision to Smith", description: "Sending reports", projectNumber: "#447", bgColorClass: "bg-primary", icon: "checkbox" },
  { id: 4, title: "Update Product Listings", name: "for revision to Smith", description: "Sending listings", projectNumber: "#761", bgColorClass: "bg-secondary", icon: "checkbox" },
  { id: 5, title: "Monitor System Performance", name: "for revision to Smith", description: "Sending project", projectNumber: "#654", bgColorClass: "bg-primary", icon: "checkbox" },
];

export const notificationsData = [
  {
    id: 1,
    userImage: "/dashboard/user/8.png",
    userName: "Elsa",
    action: "Elsa edited Contact page",
    time: "20 mins ago",
    category: "Web design",
    bg: "bg-light",
  },
  {
    id: 2,
    userImage: "",
    userName: "WD",
    action: "Wade left a comment on ACME 2.5",
    time: "2 hours ago",
    category: "ACME",
    color: "secondary",
  },
  {
    id: 3,
    userImage: "/dashboard/user/9.png",
    userName: "Jade",
    action: "Jade shared the file isometric 2.0",
    time: "4 hours ago",
    category: "Web Design",
    buttons: true,
  },
  {
    id: 4,
    userImage: "",
    userName: "FT",
    action: "Fred Tels edited ACME 2.4",
    time: "6 hours ago",
    category: "ACME",
    color: "primary",
    bg: "bg-light",
  },
  {
    id: 5,
    userImage: "/dashboard/user/10.png",
    userName: "Helena",
    action: "Helena created user-card page",
    time: "9 hours ago",
    category: "Blank",
  },
];

export const salesData = {
  dailyIncome: "80.80%",
  monthlyIncome: "85.34%",
  comparison: "96.675%",
};

export const DeafultSalesData: ApexOptions = {
  series: [
    {
      name: "Earning",
      data: [50, 40, 20, 30, 35, 60, 30, 35, 65, 25, 40, 35],
    },
    {
      name: "Earning",
      data: [25, 20, 30, 10, 15, 10, 15, 13, 12, 10, 25, 40],
    },
  ],
  chart: {
    type: "bar",
    height: 302,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "20%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    offsetX: 0,
    offsetY: 0,
    axisBorder: {
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
    colors: ["#E9F2FF", "#2A5699"],
  },
  legend: {
    show: false,
  },
};

export const optionslearning: ApexOptions = {
  series: [
    {
      name: "growth",
      type: "line",
      data: [25, 30, 43, 25, 38, 25, 33, 25],
    },
    {
      name: "growth",
      type: "line",
      data: [25, 30, 41, 25, 36, 25, 31, 25],
    },
    {
      name: "growth",
      type: "line",
      data: [25, 29, 37, 25, 34, 25, 29, 25],
    },
    {
      name: "growth",
      type: "line",
      data: [25, 28, 34, 25, 32, 25, 28, 25],
    },
    {
      name: "growth",
      type: "line",
      data: [25, 27, 30, 25, 28, 25, 27, 25],
    },
    {
      name: "growth",
      type: "line",
      data: [25, 26, 24, 25, 24, 25, 24, 25],
    },
    {
      name: "growth",
      type: "line",
      data: [25, 26, 20, 25, 21, 25, 23, 25],
    },
    {
      name: "growth",
      type: "line",
      data: [25, 24, 16, 25, 18, 25, 22, 25],
    },
    {
      name: "growth",
      type: "line",
      data: [25, 23, 12, 25, 15, 25, 21, 25],
    },
    {
      name: "growth",
      type: "line",
      data: [25, 23, 10, 25, 13, 25, 19, 25],
    },
    {
      name: "growth",
      type: "area",
      data: [25, 28, 37, 25, 33, 25, 27, 25],
    },
  ],
  chart: {
    height: 320,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: ["#2A5699", "#EA6F4E", "#2A5699", "#EA6F4E", "#2A5699", "#EA6F4E", "#2A5699", "#EA6F4E", "#2A5699", "#EA6F4E", "#2A5699"],
  stroke: {
    width: 1.5,
    curve: "smooth",
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 0,
        fillColor: "#2A5699",
        strokeColor: "#fff",
        size: 6,
      },
      {
        seriesIndex: 1,
        dataPointIndex: 5,
        fillColor: "#2A5699",
        strokeColor: "#fff",
        size: 6,
      },
      {
        seriesIndex: 2,
        dataPointIndex: 3,
        fillColor: "#2A5699",
        strokeColor: "#fff",
        size: 6,
      },
    ],
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
  xaxis: {
    type: "category",
    categories: ["Sep 5", "Sep 8", "Sep 12", "Sep 16", "Sep 18", "Sep 17", "Sep 23", "Sep 26"],
    tickAmount: 12,
    labels: {
      style: {
        colors: "var(--chart-text-color)",
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        fontWeight: 400,
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  fill: {
    type: ["solid", "solid", "solid", "solid", "solid", "solid", "solid", "solid", "solid", "solid", "gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 80, 100],
    },
  },
  yaxis: {
    min: 0,
    max: 50,
    tickAmount: 5,
    labels: {
      style: {
        colors: "var(--chart-text-color)",
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        fontWeight: 400,
      },
    },
  },
  legend: {
    show: false,
  },
};

export const ordersData = [
  {
    id: "#Ft6854K",
    customerName: "Brian Adams",
    orderDate: "10 May, 2024",
    orderTime: "10:15 PM",
    itemName: "House Plants",
    price: "$354",
    status: "Paid",
    customerImage: "/dashboard/user/1.png",
  },
  {
    id: "#B9547KB",
    customerName: "Amelia Jones",
    orderDate: "10 Jan, 2024",
    orderTime: "05:20 PM",
    itemName: "Fancy Mug",
    price: "$345",
    status: "Pending",
    customerImage: "/dashboard/user/2.png",
  },
  {
    id: "#J3478D",
    customerName: "Luna Garcia",
    orderDate: "21 Aug, 2024",
    orderTime: "06:12 PM",
    itemName: "Modern Calender",
    price: "$475",
    status: "Paid",
    customerImage: "/dashboard/user/3.png",
  },
  {
    id: "#GTR345",
    customerName: "Darby Jones",
    orderDate: "25 Nov, 2024",
    orderTime: "11:30 PM",
    itemName: "Smart Phone",
    price: "$324",
    status: "Overdue",
    customerImage: "/dashboard/user/4.png",
  },
];

export const newsItems = [
  {
    id: "1",
    title: "Highlight events effortlessly with Trending card display...",
    timeAgo: "4 months ago",
    image: "/dashboard/news/news-1.jpg",
  },
  {
    id: "2",
    title: "Keep audience informed with intuitive News cards....",
    timeAgo: "5 months ago",
    image: "/dashboard/news/news-2.jpg",
  },
  {
    id: "3",
    title: "Engage users with updates using latest card feature....",
    timeAgo: "7 months ago",
    image: "/dashboard/news/news-3.jpg",
  },
  {
    id: "4",
    title: "Stay updated with the latest trends through dynamic....",
    timeAgo: "8 months ago",
    image: "/dashboard/news/news-4.jpg",
  },
];

export const ReviewsData = [
  {
    id: "1",
    name: "Mary Jades",
    title: "Web Designer",
    image: "/dashboard/slider/1.png",
    rating: 5,
    reviewText: "This product exceeded my expectations! The quality is outstanding, and it arrived faster than I anticipated. Also, thank you for the support. Highly recommend!",
    date: "10th Feb, 2024",
  },
  {
    id: "2",
    name: "Anna Proas",
    title: "Graphics Designer",
    image: "/dashboard/slider/2.png",
    rating: 4.5,
    reviewText: "I love how versatile this product is. It's perfect for everyday use and has made a noticeable difference in my routine. Definitely worth the purchase.",
    date: "05th May, 2024",
  },
  {
    id: "3",
    name: "Rachel Green",
    title: "Web Developer",
    image: "/dashboard/slider/3.png",
    rating: 4.5,
    reviewText: "Great value for the price! It's durable, stylish, and exactly what I was looking for. Couldn't be happier with my choice. Also, thank you for the quick response.",
    date: "23th Aug, 2024",
  },
];

export const CustomerSlidersettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  swipeToSlide: true,
  arrows: false,
};

export const ProductSales = [
  { name: "Keyboard", count: 651, color: "primary" },
  { name: "Laptops", count: 345, color: "secondary" },
  { name: "Desktop", count: 654, color: "success" },
  { name: "Mouse", count: 954, color: "warning" },
];

export const CountrySales = [
  { name: "United States", percentage: 53.23, color: "primary" },
  { name: "Romania", percentage: 31.85, color: "secondary" },
  { name: "Australia", percentage: 12.98, color: "success" },
  { name: "Germany", percentage: 45.23, color: "warning" },
  { name: "Africa", percentage: 23.15, color: "primary" },
  { name: "Europe", percentage: 95.75, color: "secondary" },
];
