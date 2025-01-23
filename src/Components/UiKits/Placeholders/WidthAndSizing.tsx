import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { WidthAndSizingTitle } from "@/Constant";
import { WidthAndSizingSubTitle } from "@/Data/Uikits/placeholder/Placeholders";
import { Card, CardBody, Col, Row } from "reactstrap";
 
const WidthAndSizing = () => {
  return (
    <Col xxl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={WidthAndSizingTitle} span={WidthAndSizingSubTitle} />
        <CardBody>
          <Row className="g-3">
            <Col xxl="12" md="6" className="box-col-6">
              <div className="card-wrapper border rounded-3">
                <h6 className="sub-title">Width</h6>
                <p className="f-m-light">You can change the width through grid column classes, width utilities, or inline styles.<code> (like: w-25, w-50, w-75, w-100 ) </code></p>
                <CardBody className="p-0 placeholder-glow">
                  <span className="placeholder w-50 placeholder-light" />
                  <span className="placeholder w-75 placeholder-light" />
                  <span className="placeholder w-100 placeholder-light" />
                  <span className="placeholder w-25 placeholder-light" />
                </CardBody>
              </div>
            </Col>
            <Col xxl="12" md="6" className="box-col-6">
              <div className="card-wrapper border rounded-3">
                <h6 className="sub-title">Sizing</h6>
                <p className="f-m-light">The size of <code>placeholder</code> are based on the typographic style of the parent element. Customize them with sizing modifiers: <code>placeholder-lg, placeholder-sm, or placeholder-xs</code>.</p>
                <div className="p-0 placeholder-glow">
                  <Col xs="12"><span className="placeholder col-12 placeholder-lg placeholder-light" /></Col>
                  <Col xs="12"><span className="placeholder col-12 placeholder-light" /></Col>
                  <Col xs="12"><span className="placeholder col-12 placeholder-sm placeholder-light" /></Col>
                  <Col xs="12"><span className="placeholder col-12 placeholder-xs placeholder-light" /></Col>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WidthAndSizing;
