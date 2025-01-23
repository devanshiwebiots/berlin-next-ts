import { FirstCardData, SecondCardData, ThirdCardData } from "./AllChartOptions";

export const Cardschart = [
    {
      title: 'Total Sale',
      value: '$3654.00',
      comparisonText: 'Compare to last month',
      percentage: '+65%',
      ChartData: FirstCardData,
      type:"area"
    },
    {
      title: 'Total Project',
      value: '12569',
      comparisonText: 'Compare to last month',
      percentage: '+65%',
      ChartData: SecondCardData,
      type:"bar"
    },
    {
      title: 'Total Product',
      value: '93M',
      comparisonText: 'Compare to last month',
      percentage: '+65%',
      ChartData: ThirdCardData,
      type:"area"
    },
  ];