import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { ProjectChart } from "@/Data/General/Widgets/Charts/AllChartOptions";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const ProjectCreated = () => {
  return (
    <Col xl={6} lg={12} className='box-col-6 xl-50'>
      <Card>
        <DashboardCommonHeader title='Project Created' dropDownFalse />
        <CardBody>
          <div className='chart-container skill-chart'>             
              <ReactApexChart options={ProjectChart} series={ProjectChart.series} type={"area"} height={320} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectCreated;
