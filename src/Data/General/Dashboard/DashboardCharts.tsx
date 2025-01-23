import { ApexOptions } from "apexcharts";

export const optionssalessummary: ApexOptions = {
  series: [
    {
      name: "Activity",
      data: [42, 44, 55, 66, 55, 86, 52, 44, 44, 66, 55, 86, 52, 44, 44],
    },
  ],
  chart: {
    height: 100,
    type: "bar",
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 3,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  colors: [
    "#e9f2ff",
    "#e9f2ff",
    "#e9f2ff",
    "#e9f2ff",
    "#e9f2ff",
    "#2A5699",
    "#e9f2ff",
    "#e9f2ff",
    "#e9f2ff",
    "#e9f2ff",
    "#e9f2ff",
    "#e9f2ff",
    "#e9f2ff",
    "#e9f2ff",
    "#e9f2ff",
  ],
};

export const optionssalessummary1: ApexOptions = {
  series: [
    {
      name: "Desktops",
      data: [
        50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66,
        66,
      ],
    },
  ],
  chart: {
    type: "area",
    offsetY: 30,
    height: 140,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 2,
      color: '#EA6F4E',
      opacity: 0.2,
    },
  },
  colors: ["#EA6F4E"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 12,
        fillColor: "#EA6F4E",
        strokeColor: "#fff",
        size: 5,
        shape: "circle",
      },
    ],
  },
};

export const optionssalessummary2: ApexOptions = {
  series: [
    {
      name: "Desktops",
      data: [15, 14, 11, 20, 10, 15, 11],
    },
  ],
  chart: {
    type: "area",
    height: 123,
    offsetY: 10,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 2,
      color: "#58b232",
      opacity: 0.2,
    },
  },
  colors: ["#58b232"],
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: "#58b232",
        strokeColor: "#fff",
        size: 6,
        shape: "circle",
      },
    ],
  },
};

export const options_revenue_order:ApexOptions = {
  series: [
    {
      name: "Earning",
      type: "line",
      data: [330, 60, 370, 240, 250, 70, 280, 60, 185, 60],
    },
    {
      name: "Order",
      type: "line",
      data: [70, 330, 60, 200, 100, 250, 100, 350, 110, 300],
    },
  ],
  chart: {
    height: 304,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2], 
    curve: "smooth",
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
    },
  },
  colors: ['#2A5699','#EA6F4E'],
  fill: {
    opacity: 1,
    type: "solid",
  },
  labels: [
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
  ],
  xaxis: {
    type: "category",
    tickAmount: 8,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      color: "var(--chart-border)",
    },
    axisTicks: {
      show: false,
    },
  },

  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: '#2A5699',
        strokeColor: "var(--white)",
        size: 6,
      },
    ],
    hover: {
      size: 6,
      sizeOffset: 0,
    },
  },

  legend: {
    show: false,
  },
  yaxis: {
    min: 0,
    tickAmount: 4,
    labels: {
      formatter: function (val: any) {
        return val + "K";
      },
      offsetX: -5,
    },
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
};

export const Goaloptions:ApexOptions = {
  series: [80],
  chart: {
  height: 345,
  type: 'radialBar',
  toolbar: {
    show: false
  }
},
plotOptions: {
  radialBar: {
    startAngle: -135,
    endAngle: 135,
    hollow: {
      size: '78%',
      dropShadow: {
        enabled: false,
      }
    },
    dataLabels: {
      show: true,
      name: {
        show: false,
      },
      value: {
        color: "#2A5699",
        fontSize: '36px',
        fontWeight: '700',
        show: true,
      }
    }
  }
},
colors: ["#2A5699"],
stroke: {
  lineCap: 'round'
},
tooltip: {
  enabled: false
}
};