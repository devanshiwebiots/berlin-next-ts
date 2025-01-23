/* eslint-disable react/jsx-no-duplicate-props */
//@ts-nocheck
import SVG from "@/CommonComponent/SVG";
import { SalesCardData } from "@/Data/General/Dashboard/EcommerceData";
import { Fragment } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col, Progress } from "reactstrap";

const OnlineSales = () => {
  return (
    <Fragment>
      {SalesCardData.map((item, i) => {
        return (
          <Col xxl={2} lg={3} md={4} sm={6} className="box-col-3" key={i}>
            <Card className="online-order">
              <CardHeader className="pb-0">
                <div className="d-flex">
                  <div className={`order ${item.orderClass}`}>
                    <SVG iconId={item.icon} />
                  </div>
                  <div className="arrow-chart">
                    <SVG iconId={`${item.icon2}`} />
                    <span className={item.percentageClass}> {item.percentage} </span>
                  </div>
                </div>
                <div className="online">
                  <span>{item.title}</span>
                  <h4 className="num-counter"> {item.count} </h4>
                </div>
              </CardHeader>
              <CardBody className="pt-0 ps-2 pe-2" className={`${item.chartClass}`}>
                {item.ChartData && <ReactApexChart options={item.ChartData || {}} series={item.ChartData.series || []} type={item.type} height={item.height || 100} />}

                {item.hasUserDetails && (
                  <div>
                    <div className="user-details customers">
                      <ul>
                        {item.users.map((user, index) => (
                          <li className="d-inline-block" key={index}>
                            <img className="rounded-circle" src={user.src} alt={user.alt} />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Progress className="progress" value={50} color="warning" />
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </Fragment>
  );
};

export default OnlineSales;
