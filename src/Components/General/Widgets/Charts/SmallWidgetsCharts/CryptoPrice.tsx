import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { CryptoChart } from "@/Data/General/Widgets/Charts/AllChartOptions";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const CryptoPrice = () => {
  return (
    <Col xl={6} lg={12} className='xl-50'>
      <Card>
        <DashboardCommonHeader title='Cryptocurrency Prices' dropDownFalse />
        <CardBody>
          <div className='chart-container crypto-chart'>
            <Row>
              <Col>
                <ReactApexChart options={CryptoChart} series={CryptoChart.series} type={"area"} height={400} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CryptoPrice;
