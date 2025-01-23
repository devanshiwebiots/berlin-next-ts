import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { GoalSummaryTitle } from "@/Constant";
import { Goaloptions } from "@/Data/General/Dashboard/DashboardCharts";
import { GoalData } from "@/Data/General/Dashboard/EcommerceData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardFooter, Col } from "reactstrap";

const GoalSummary = () => {
  return (
    <Col xxl={4} xl={5} md={6} className="box-col-5">
      <Card className="goal-view">
        <DashboardCommonHeader title={GoalSummaryTitle} />
        <CardBody>
          <div className="goal-chart">
            <div className="shape-block">
              <div className="rounded-shape">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
            <div className="goal">
              <ReactApexChart options={Goaloptions} series={Goaloptions.series} type="radialBar" height={350} />
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <ul>
            {GoalData.map((item, index) => (
              <li key={index}>
                <h5 className="f-w-600">{item.value}</h5>
                <span className="f-w-500">{item.label}</span>
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default GoalSummary;
