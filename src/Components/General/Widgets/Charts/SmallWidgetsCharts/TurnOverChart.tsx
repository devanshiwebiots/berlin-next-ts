import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { OptionTurnOverChart } from "@/Data/General/Widgets/Charts/AllChartOptions";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const TurnOverChart = () => {
  return (
    <Col xl={5} lg={12} className='xl-50'>
      <Card>
        <DashboardCommonHeader title='Turnover' dropDownFalse />
        <CardBody>
          <div className='chart-container'>
            <Row>
              <Col>
                <ReactApexChart options={OptionTurnOverChart} series={OptionTurnOverChart.series} type={"area"} height={320} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TurnOverChart;
