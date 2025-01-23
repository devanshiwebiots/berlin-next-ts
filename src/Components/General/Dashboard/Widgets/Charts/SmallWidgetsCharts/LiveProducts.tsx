import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { LiveProductChart } from "@/Data/General/Widgets/Charts/AllChartOptions";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const LiveProducts = () => {
  return (
    <Col xl={7} lg={12} className='xl-50'>
      <div className='small-chart-widget chart-widgets-small'>
        <Card>
          <DashboardCommonHeader title='Live Products' dropDownFalse />
          <CardBody>
            <div className='chart-container'>
              <Row>
                <Col>
                  <ReactApexChart options={LiveProductChart} series={LiveProductChart.series} type={"area"} height={320} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default LiveProducts;
