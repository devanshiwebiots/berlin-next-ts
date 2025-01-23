import { Cardschart } from "@/Data/General/Widgets/Charts/ChartsCarddata";
import ReactApexChart from "react-apexcharts";
import { Card, Col, Row } from "reactstrap";

const ChartsCards = () => {
  return (
    <Row>
      {Cardschart.map((item, i) => {
        const chartType: "area" | "bar" | "line" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined = item.type as any;
        return (
          <>
            <Col lg={4} md={6} className='box-col-4' key={i}>
              <Card className='o-hidden'>
                <div className='chart-widget-top'>
                  <Row className='card-body pb-0 m-0'>
                    <Col xl={9} lg={8} col={9} className='p-0'>
                      <h4 className='mb-2 f-w-600'>{item.title}</h4>
                      <h5>{item.value}</h5>
                      <span>{item.comparisonText}</span>
                    </Col>
                    <Col xl={3} lg={4} col={3} className='text-end p-0'>
                      <h6 className='txt-success'>{item.percentage}</h6>
                    </Col>
                  </Row>
                  <div className='flot-chart-placeholder'>
                    <ReactApexChart options={item.ChartData} series={item.ChartData.series} type={chartType} height={200} />
                  </div>
                </div>
              </Card>
            </Col>
          </>
        );
      })}
    </Row>
  );
};

export default ChartsCards;
