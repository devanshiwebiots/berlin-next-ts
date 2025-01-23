import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { HigherRevenueTitle, Sale } from "@/Constant";
import { growthData, revenueGrowthOptions, saleList } from "@/Data/General/Dashboard/Default";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const HigherRevenue = () => {
  return (
    <Col xxl={6} lg={8} md={7} sm={6} className='box-col-8e'>
      <Card>
        <DashboardCommonHeader title={HigherRevenueTitle} />
        <CardBody className='revenue-growth'>
          <ul className='d-flex align-item-center gap-2'>
            {saleList.map((item, index) => (
              <li key={index}>
                <span className={`bg-${index === 0 ? "primary" : "secondary"}`} />
                {item} {Sale}
              </li>
            ))}
          </ul>
          <Row className='align-items-center gy-2'>
            <Col lg={9} md={8} className='px-0'>
              <div id='revenuegrowth'>
                <ReactApexChart options={revenueGrowthOptions} series={revenueGrowthOptions.series} type='area' height={314} />
              </div>
            </Col>
            <Col lg={3} md={4}>
              {growthData.map((item, index) => (
                <div className='growth-details' key={index}>
                  <span>{item.label}</span>
                  <h5>
                    $
                    <span className='num-counter' data-target={item.value}>
                      0
                    </span>
                  </h5>
                </div>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HigherRevenue;
