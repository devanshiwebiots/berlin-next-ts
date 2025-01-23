import React from "react";
import Countdown from "react-countdown";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import CountdownRenderer from "./CountdownRenderer";
import { ImagePath } from "@/Constant";

const SpecialDiscount = () => {
  return (
    <Col xl={4} sm={7} className="xl-40 box-col-5">
      <Card className="special-discount">
        <CardBody>
          <Row>
            <Col xxl={8} xl={12} lg={8} className="offer-order-1 box-col-12">
              <div className="discount-detail">
                <div>
                  <h5>
                    Special Discount <span className="font-primary f-w-500">80% OFF</span>
                  </h5>
                  <h4 className="m-auto f-w-600">
                    Deal of the Day from <span className="font-primary">$80</span>
                  </h4>
                  <div className="countdown">
                    <Countdown date={Date.now() + 36000 * 100000} renderer={CountdownRenderer} />
                  </div>
                  <Button color="primary" className="mt-4">
                    View Details
                  </Button>
                </div>
              </div>
            </Col>
            <Col xxl={4} xl={12} lg={4}>
              <div className="img-wrapper">
                <img className="img-fluid" src={`${ImagePath}/dashboard-2/shoes.png`} alt="Special Discount" />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SpecialDiscount;
