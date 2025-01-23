import { CommonDropdown } from "@/CommonComponent/CommonDropdown/CommonDropdown";
import SVG from "@/CommonComponent/SVG";
import { Visitorfulldata } from "@/Data/General/Widgets/Charts/AllChartOptions";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const Visitorfull = () => {
  return (
    <Col md={6} sm={7}>
      <Card className='visitor-card'>
        <CardHeader className='pb-0'>
          <div className='header-top d-flex justify-content-between align-items-center'>
            <h4>
              Visitors
              <span className='f-14 font-primary f-w-500 ms-1'>
                <SVG iconId='user-visitor' />
                (+2.8)
              </span>
            </h4>
            <div className='card-header-right-icon'>
              <CommonDropdown />
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className='visitors-container'>
            <ReactApexChart options={Visitorfulldata} series={Visitorfulldata.series} type={"bar"} height={240} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Visitorfull;
