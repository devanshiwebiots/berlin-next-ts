import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import FirstAnimation from "./FirstAnimation";
import SecondAnimation from "./SecondAnimation";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimatedeRibbons, VariationsOfLeftRibbons } from "@/Constant";
import { AnimatedRibbonsData, LeftRibbonsData } from "@/Data/BonusUi/Ribbons";

const AnimatedRibbons: React.FC = () => {
  return (
    <Row>
      <Col sm={12} xl={12}>
        <Card>
          <CommonCardHeader title={AnimatedeRibbons} span={AnimatedRibbonsData} />
          <CardBody class='card-body'>
            <Row className='g-3'>
              <FirstAnimation />
              <SecondAnimation />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AnimatedRibbons;
