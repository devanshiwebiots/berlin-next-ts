import { CommonDropdown } from "@/CommonComponent/CommonDropdown/CommonDropdown";
import { LearningSummary } from "@/Constant";
import { optionslearning } from "@/Data/General/Dashboard/Default";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const LearningSummarys = () => {
  return (
    <Col xxl={5} sm={6} className='box-col-6'>
      <Card>
        <CardHeader>
          <div className='header-top'>
            <h4>
              {LearningSummary} <span className='f-14 f-w-500 ms-1 f-light learning-title'>(80% activity growth)</span>
            </h4>
            <CommonDropdown />
          </div>
        </CardHeader>
        <CardBody className='pb-0'>
          <ReactApexChart options={optionslearning} series={optionslearning.series} type='line' height={260} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LearningSummarys;
