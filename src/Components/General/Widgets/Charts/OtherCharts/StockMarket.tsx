import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { CandlestickChart } from "@/Data/General/Widgets/Charts/AllChartOptions";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const StockMarket = () => {
  return (
    <Col sm={12} className='box-col-12'>
      <div className='donut-chart-widget'>
        <Card>
          <DashboardCommonHeader title='Stock Market' dropDownFalse />
          <CardBody>
            <ReactApexChart options={CandlestickChart} series={CandlestickChart.series} type={"line"} height={450} />
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default StockMarket;
