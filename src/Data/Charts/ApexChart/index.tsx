//@ts-nocheck
import { ApexOptions } from "apexcharts";

const primary = "var(--theme-default)";
const secondary = "var(--theme-secondary)";

const series = {
  monthDataSeries1: {
    prices: [
      8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85,
      8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25,
      8600.65, 8881.1, 9340.85,
    ],
    dates: [
      "13 Nov 2023",
      "14 Nov 2023",
      "15 Nov 2023",
      "16 Nov 2023",
      "17 Nov 2023",
      "20 Nov 2023",
      "21 Nov 2023",
      "22 Nov 2023",
      "23 Nov 2023",
      "24 Nov 2023",
      "27 Nov 2023",
      "28 Nov 2023",
      "29 Nov 2023",
      "30 Nov 2023",
      "01 Dec 2023",
      "04 Dec 2023",
      "05 Dec 2023",
      "06 Dec 2023",
      "07 Dec 2023",
      "08 Dec 2023",
    ],
  },
};

export const BasicAreaChartData: ApexOptions = {
  chart: {
    height: 350,
    type: "area",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  series: [
    {
      name: "STOCK ABC",
      data: series.monthDataSeries1.prices,
    },
  ],
  title: {
    text: "Fundamental Analysis of Stocks",
    align: "left",
  },
  subtitle: {
    text: "Price Movements",
    align: "left",
  },
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    opposite: true,
  },
  legend: {
    horizontalAlign: "left",
  },
  fill: {
    gradient: {
      opacityFrom: [0.4],
      gradientToColors: [primary],
      opacityTo:[0.1]
    },
  },
  colors: [primary],
};

export const AreaSpalingChart: ApexOptions = {
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],

  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00",
      "2018-09-19T01:30:00",
      "2018-09-19T02:30:00",
      "2018-09-19T03:30:00",
      "2018-09-19T04:30:00",
      "2018-09-19T05:30:00",
      "2018-09-19T06:30:00",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: [0.4, 0.4],  
      opacityTo: [0.1, 0.1], 
    },
  },
  colors: [primary, secondary],
};

export const monthlyOverviewChart: ApexOptions = {
  series: [
    {
      name: "Cash Flow",
      data: [
        -66, 50, 150, 66, 50, 150, -79, -50, -136, -54, -40, -140, 79, 49, -150,
        -70, 50, 140, 60, 44, 130, -80, -40,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    offsetX: 0,
    offsetY: 0,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: -150,
            to: -81,
            color: primary,
          },
          {
            from: -80,
            to: -51,
            color: secondary,
          },
          {
            from: -50,
            to: 0,
            color: "#1669A3",
          },
          {
            from: 0,
            to: 50,
            color: "#1669A3",
          },
          {
            from: 51,
            to: 80,
            color: secondary,
          },
          {
            from: 81,
            to: 150,
            color: primary,
          },
        ],
      },
      columnWidth: "70%",
      borderRadius: 2,
    },
  },

  colors: [primary],
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    title: {
      show: false,
    },
    labels: {
      formatter: function (y) {
        return y.toFixed(0) + "%";
      },
    },
  },

  grid: {
    show: true,
    strokeDashArray: 3,
    borderColor: "rgba(106, 113, 133, 0.30)",
  },
  xaxis: {
    categories: [
      "Jan",
      "",
      "Feb",
      "",
      "Mar",
      "",
      "Apr",
      "",
      "May",
      "",
      "Jun",
      "",
      "Jul",
      "",
      "Aug",
      "",
      "Sep",
      "",
      "Oct",
      "",
      "Nov",
      "",
      "Dec",
    ],
    labels: {
      rotate: -90,
      style: {
        colors: "#9B9B9B",
      },
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  // responsive: [
  //   {
  //     breakpoint: 1600,
  //     options: {
  //       xaxis: {
  //         categories: [
  //           "Jan",
  //           "",
  //           "Feb",
  //           "",
  //           "Mar",
  //           "",
  //           "Apr",
  //           "",
  //           "May",
  //           "",
  //           "Jun",
  //           "",
  //           "Jul",
  //           "",
  //           "Aug",
  //           "",
  //           "Sep",
  //         ],
  //       },
  //       series: [
  //         {
  //           data: [
  //             -66, 50, 150, 66, 50, 150, -79, -50, -136, -54, -40, -140, 79, 49,
  //             -30, 50, 30,
  //           ],
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     breakpoint: 380,
  //     options: {
  //       yaxis: {
  //         labels: {
  //           show: false, // Hide y-axis labels for this breakpoint
  //         },
  //       },
  //     },
  //   },
  // ],
};
export const exploringBoundaries: ApexOptions ={
  series: [
    {
      name: "Net Profit",
      data: [30, 70, 40, 50, 70, 50, 90, 80],
    },
    {
      name: "Free Cash Flow",
      data: [40, 60, 35, 90, 60, 60, 60, 50],
    },
  ],
  chart: {
    type: "bar",
    height: 280,
    offsetY: 40,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 6,
      columnWidth: "15px",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },

  grid: {
    show: false,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    fixed: {
      enabled: false,
      position: "bottomRight",
      offsetX: 0,
      offsetY: 0,
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: false,
  },
  colors: [secondary, primary],
};
export const sellViewChart: ApexOptions = {
  series: [
    {
      name: "Selling",
      data: [50, 70, 50, 65, 50, 45, 55, 60],
    },
    {
      name: "Selling",
      data: [-60, -65, -45, -40, -50, -55, -35, -50],
    },
  ],
  chart: {
    type: "bar",
    height: 330,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: [primary, secondary],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "35%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: "smooth",
  },
  grid: {
    show: true,
    borderColor: "#f0f0f0",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    min: -99,
    max: 99,
    tickAmount: 8,
    labels: {
      formatter: function (val) {
        return Math.abs(Math.round(val)) + "k";
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     options: {
  //       chart: {
  //         height: 220,
  //       },
  //     },
  //   },
  // ],
};
export const studyStatisticsChart: ApexOptions = {
  series: [
    // {
    //     name: 'series1',
    //     data: [4.6, 3.6, 2, 3, 4, 2.4, 2.8, 4.3, 2, 1.6, 3.2, 4],
    // },
    // {
    //     name: 'series2',
    //     data: [1.5, 2, 3.8, 3.5, 2.2, 3.5, 4, 3, 1.5, 3.8, 2, 3.5],
    // },
    {
      name: "series1",
      data: [2.8, 3.2, 1.9, 4.5, 2.1, 3.7, 3, 3, 4.2, 1.8, 3.9, 2.6],
    },
    {
      name: "series2",
      data: [1.2, 2, 2.7, 3, 2.5, 3, 1.6, 3.9, 2.5, 2.2, 2.4, 3.2],
    },
  ],
  chart: {
    height: 320,
    type: "area",
    offsetY: 12,
    offsetX: -10,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: [primary, secondary],

  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [5, 100, 100, 100],
    },
  },
  annotations: {
    xaxis: [
      {
        x: 312,
        strokeDashArray: 5,
        borderWidth: 3,
        borderColor: primary,
      },
    ],
    points: [
      {
        x: 312,
        y: 4.5,
        marker: {
          size: 8,
          fillColor: primary,
          strokeColor: "#ffffff",
          strokeWidth: 4,
          radius: 5,
        },
        label: {
          borderWidth: 1,
          offsetY: 0,
          text: "5h a day on average",
          style: {
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "'Jost', sans-serif",
          },
        },
      },
    ],
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        fontFamily: "'Jost', sans-serif",
        fontWeight: 500,
        colors: "#3D434A",
      },

      formatter: (value) => {
        return `${value}h`;
      },
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    tickAmount: 12,
    labels: {
      minHeight: undefined,
      maxHeight: 28,
      offsetY: 0,
      style: {
        fontFamily: "'Jost', sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
      tooltip: {
        enabled: false,
      },
    },
    axisBorder: {
      show: false,
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<div class="apex-tooltip"> 
                <span>
                     <span class="bg-secondary"> </span>
                      Selling : ${series[0][dataPointIndex]} K
                </span> 
                <span class="mt-2">
                     <span class="bg-primary"> </span>
                      Selling : ${series[1][dataPointIndex]} K
                </span> 
              </div>`;
    },
  },
  legend: {
    show: false,
  },
  // responsive: [
  //   {
  //     breakpoint: 1661,
  //     options: {
  //       chart: {
  //         height: 290,
  //       },
  //     },
  //   },
  //   {
  //     breakpoint: 1200,
  //     options: {
  //       chart: {
  //         height: 220,
  //       },
  //     },
  //   },
  // ],
};

export const BarChartData: ApexOptions = {
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
  xaxis: {
    categories: [
      "South Korea",
      "Canada",
      "United Kingdom",
      "Netherlands",
      "Italy",
      "France",
      "Japan",
      "United States",
      "China",
      "Germany",
    ],
  },
  colors: [primary],
};

export const ColumnChartData: ApexOptions = {
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
  colors: [primary, secondary, "#51bb25"],
};

function generateData(
  baseval: number,
  count: number,
  yrange: { min: number; max: number }
) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([baseval, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

export const BubbleChartData: ApexOptions = {
  chart: {
    height: 350,
    type: "bubble",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Product1",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product2",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product3",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product4",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  fill: {
    type: "gradient",
  },
  title: {
    text: "3D Bubble Chart",
  },
  xaxis: {
    tickAmount: 12,
    type: "datetime",

    labels: {
      rotate: 0,
    },
  },
  yaxis: {
    max: 70,
  },
  theme: {
    palette: "palette2",
  },
  stroke: {
    width: 0,
  },
  colors: [primary, secondary, "#51bb25", "#f8d62b"],
};

export const StepLineChartData: ApexOptions = {
  chart: {
    type: "line",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "stepline",
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
    },
  ],
  title: {
    text: "Stepline Chart",
    align: "left",
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  colors: [primary],
};

export const AnnotationChartData: ApexOptions = {
  annotations: {
    yaxis: [
      {
        y: 8200,
        borderColor: "#00E396",
        label: {
          borderColor: "#00E396",
          style: {
            color: "#fff",
            background: "#00E396",
          },
          text: "Support",
        },
      },
      {
        y: 8600,
        y2: 9000,
        borderColor: "#000",
        fillColor: "#FEB019",
        opacity: 0.2,
        label: {
          borderColor: "#333",
          style: {
            fontSize: "10px",
            color: "#333",
            background: "#FEB019",
          },
          text: "Y-axis range",
        },
      },
    ],
    xaxis: [
      {
        x: new Date("23 Nov 2017").getTime(),
        strokeDashArray: 0,
        borderColor: "#775DD0",
        label: {
          borderColor: "#775DD0",
          style: {
            color: "#fff",
            background: "#775DD0",
          },
          text: "Anno Test",
        },
      },
      {
        x: new Date("26 Nov 2017").getTime(),
        x2: new Date("28 Nov 2017").getTime(),
        fillColor: "#B3F7CA",
        opacity: 0.4,
        label: {
          borderColor: "#B3F7CA",
          style: {
            fontSize: "10px",
            color: "#fff",
            background: "#00E396",
          },
          offsetY: -10,
          text: "X-axis range",
        },
      },
    ],
    points: [
      {
        x: new Date("01 Dec 2017").getTime(),
        y: 8607.55,
        marker: {
          size: 8,
          fillColor: "#fff",
          strokeColor: "red",
          radius: 2,
          cssClass: "apexcharts-custom-class",
        },
        label: {
          borderColor: "#FF4560",
          offsetY: 0,
          style: {
            color: "#fff",
            background: "#FF4560",
          },

          text: "Point Annotation",
        },
      },
    ],
  },
  chart: {
    height: 350,
    type: "line",
    id: "areachart-2",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  grid: {
    padding: {
      right: 30,
      left: 20,
    },
  },
  series: [
    {
      data: series.monthDataSeries1.prices,
    },
  ],
  title: {
    text: "Line with Annotations",
    align: "left",
  },
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: "datetime",
  },
  colors: [primary],
};

export const PieChartData: ApexOptions = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  series: [44, 55, 13, 43, 22],
  // responsive: [
  //   {
  //     breakpoint: 480,
  //     options: {
  //       chart: {
  //         height: 250,
  //       },
  //       legend: {
  //         show: false,
  //       },
  //     },
  //   },
  // ],
  colors: [primary, secondary, "#51bb25", "#a927f9", "#f8d62b"],
};

export const DountChartData: ApexOptions = {
  chart: {
    width: 380,
    type: "donut",
  },
  series: [44, 55, 41, 17, 15],
  // responsive: [
  //   {
  //     breakpoint: 480,
  //     options: {
  //       chart: {
  //         height: 250,
  //       },
  //       legend: {
  //         show: false,
  //       },
  //     },
  //   },
  // ],
  colors: ["#dc3545", "#f8d62b", primary, "#51bb25", "#a927f9"],
};

export const MixChartData: ApexOptions = {
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [0, 2, 5],
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  series: [
    {
      name: "Column",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "Area",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "Line",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ],
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: [
    "01/01/2003",
    "02/01/2003",
    "03/01/2003",
    "04/01/2003",
    "05/01/2003",
    "06/01/2003",
    "07/01/2003",
    "08/01/2003",
    "09/01/2003",
    "10/01/2003",
    "11/01/2003",
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    min: 0,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " views";
        }
        return y;
      },
    },
  },
  legend: {
    labels: {
      useSeriesColors: true,
    },
  },
  colors: [secondary, "#51bb25", primary],
};

export const CandleStickChartData: ApexOptions = {
  chart: {
    height: 350,
    type: "candlestick",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: primary,
        downward: secondary,
      },
    },
  },
  series: [
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591],
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592],
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34],
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86],
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99],
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81],
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96],
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39],
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27],
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55],
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02],
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01],
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06],
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89],
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5],
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86],
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07],
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606],
        },
      ],
    },
  ],
  title: {
    text: "CandleStick Chart",
    align: "left",
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  colors: ["#000000"],
};

export const RadarChartData: ApexOptions = {
  chart: {
    height: 315,
    type: "radar",
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: "Series 1",
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ],
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  plotOptions: {
    radar: {
      size: 140,
      polygons: {
        strokeColor: "#e9e9e9",
        fill: {
          colors: ["#f8f8f8", "#fff"],
        },
      },
    },
  },
  title: {
    text: "Radar with Polygon Fill",
  },
  colors: ["#FF4560"],
  markers: {
    size: 4,
    colors: ["#fff"],
    strokeColor: "#1a5f7f",
    strokeWidth: 2,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      },
    },
  },
  yaxis: {
    tickAmount: 7,
    labels: {
      formatter: function (val, i) {
        if (i % 2 === 0) {
          return val;
        } else {
          return "";
        }
      },
    },
  },
  colors: ["#2A5699"],
};

export const CircleChartData: ApexOptions = {
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "22px",
        },
        value: {
          fontSize: "16px",
        },
        total: {
          show: true,
          label: "Total",
        },
      },
    },
  },
  series: [44, 55, 67, 83],
  labels: ["Apples", "Oranges", "Bananas", "Berries"],
  // responsive: [
  //   {
  //     breakpoint: 480,
  //     options: {
  //       chart: {
  //         height: 250,
  //       },
  //       legend: {
  //         show: false,
  //       },
  //       plotOptions: {
  //         radialBar: {
  //           dataLabels: {
  //             name: {
  //               offsetY: -1,
  //             },
  //             value: {
  //               offsetY: 4,
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // ],
  colors: [secondary, "#51bb25", "#f8d62b", primary],
};