import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { TotalSalesTitle } from "@/Constant";
import { DeafultSalesData, salesData } from "@/Data/General/Dashboard/Default";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardFooter, Col } from "reactstrap";

const TotalSales = () => {
  return (
    <Col xxl={4} md={6} className='box-col-6'>
      <Card>
        <DashboardCommonHeader title={TotalSalesTitle} />
        <CardBody className='pb-0'>
          <div className='d-flex align-items-center gap-2 flex-wrap'>
            <h5 className='txt-secondary f-w-600'>96.675%</h5>
            <span>( Compare to last year )</span>
          </div>
          <ReactApexChart options={DeafultSalesData} series={DeafultSalesData.series} type='bar' height={302} />
        </CardBody>
        <CardFooter className='total-earning'>
          <ul>
            <li>
              <p className='mb-0'>Daily Income</p>
              <span>{salesData.dailyIncome}</span>
            </li>
            <li>
              <p className='mb-0'>Monthly Income</p>
              <span>{salesData.monthlyIncome}</span>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default TotalSales;
