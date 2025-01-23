import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { NoGuttersTitle } from "@/Constant";
import { NoGuttersSubTitle } from "@/Data/Uikits/grid";
import { Card, CardBody, Col, Row } from "reactstrap";
 
const NoGutters = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={NoGuttersTitle} span={NoGuttersSubTitle} />
        <CardBody className="no-gutter">
          <Row className="g-0 text-center">
            <Col sm="4" md="8">
              <div className="p-3">
                <span>col-sm-6 &amp; col-md-8</span>
              </div>
            </Col>
            <Col xs="6" md="4">
              <div className="p-3">
                <Col xs="6">
                  <span>col-md-4</span>
                </Col>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NoGutters;
