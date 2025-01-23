import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { AnotationChart } from "@/Data/General/Widgets/Charts/AllChartOptions";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const CryptoAnotation = () => {
  return (
    <Col xl={6} lg={12} className='xl-50'>
      <Card>
        <DashboardCommonHeader title='Crypto Annotations' dropDownFalse />
        <CardBody>
          <div className='chart-container'>
            <Row>
              <Col>
                <ReactApexChart options={AnotationChart} series={AnotationChart.series} type={"line"} height={400} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CryptoAnotation;
