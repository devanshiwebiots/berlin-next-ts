import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { LearningSummary, RecentActivityTitle } from "@/Constant";
import { optionslearning } from "@/Data/General/Dashboard/Default";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const LearningSummaryChart = () => {
  return (
    <Col xl={6} className='box-col-6'>
      <Card>
        <DashboardCommonHeader title={LearningSummary}  />
        <CardBody className='pb-0'>
          <ReactApexChart options={optionslearning} series={optionslearning.series} type='line' height={320} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LearningSummaryChart;
