import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { ProjectChart, SalesOverViewChart } from "@/Data/General/Widgets/Charts/AllChartOptions";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const SalesOverView = () => {
  return (
    <Col xl={6} lg={12} className='box-col-6 xl-50'>
      <Card>
        <DashboardCommonHeader title='Sales Overview' dropDownFalse />
        <CardBody>
          <div className='chart-container progress-chart'>
              <ReactApexChart options={SalesOverViewChart} series={SalesOverViewChart.series} type={"line"} height={320} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SalesOverView