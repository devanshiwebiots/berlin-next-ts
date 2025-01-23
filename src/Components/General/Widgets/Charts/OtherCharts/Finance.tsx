import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { FinanceChart } from "@/Data/General/Widgets/Charts/AllChartOptions";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const Finance = () => {
  return (
    <Col xl={5} lg={12} className='box-col-5'>
      <Card>
        <DashboardCommonHeader title='Finance' dropDownFalse />
        <CardBody>
          <div className='chart-container column-container'>
            <ReactApexChart options={FinanceChart} series={FinanceChart.series} type={"line"} height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Finance;
