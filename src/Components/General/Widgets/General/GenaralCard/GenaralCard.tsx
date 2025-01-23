import SVG from "@/CommonComponent/SVG";
import { GeneralSalesCardData } from "@/Data/General/Dashboard/EcommerceData";
import { Fragment } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const GenaralCard = () => {
  return (
    <Fragment>
      {GeneralSalesCardData.map((item, i) => {
        const chartType: "area" | "bar" | "line" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined = item.type as any;
        return (
          <Col xxl={2} md={4} sm={6} className='box-col-4' key={i}>
            <Card className='online-order'>
              <CardHeader className='pb-0'>
                <div className='d-flex'>
                  <div className={`order ${item.orderClass}`}>
                    <SVG iconId={item.icon} />
                  </div>
                  <div className='arrow-chart'>
                    <SVG iconId={`${item.icon2}`} />
                    <span className={item.percentageClass}> {item.percentage} </span>
                  </div>
                </div>
                <div className='online'>
                  <span>{item.title}</span>
                  <h4 className='num-counter'> {item.count} </h4>
                </div>
              </CardHeader>
              <CardBody className={`pt-0 ps-2 pe-2 ${item.chartClass}`}>{item.ChartData && <ReactApexChart options={item.ChartData || {}} series={item.ChartData.series || []} type={chartType} height={item.height} />}</CardBody>
            </Card>
          </Col>
        );
      })}
    </Fragment>
  );
};

export default GenaralCard;
