import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { SaleStatisticTitle } from "@/Constant";
import { options_revenue_order } from "@/Data/General/Dashboard/DashboardCharts";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const SaleStatistic: React.FC<{ small?: string ,large?:string}> = ({ small,large}) => {
  return (
    <Col lg={large} sm={small} className={large?'custom-order-2 box-col-5':""}>
      <Card className='revenue-order'>
        <DashboardCommonHeader title={SaleStatisticTitle} />
        <CardBody>
          <ul className='d-flex align-item-center gap-2'>
            <li>
              <span className='bg-primary'> </span>Pending
            </li>
            <li>
              <span className='bg-secondary'> </span>Completed
            </li>
          </ul>
          <ReactApexChart options={options_revenue_order} series={options_revenue_order.series} type={"line"} height={304} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SaleStatistic;
