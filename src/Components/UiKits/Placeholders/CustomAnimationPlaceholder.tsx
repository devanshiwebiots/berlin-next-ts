import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomAnimationPlaceholderTitle } from "@/Constant";
import { CustomAnimationPlaceholderSubTitle } from "@/Data/Uikits/placeholder/Placeholders";
import DynamicNumber from "@/utils/DynamicNumber";
import { Card, CardBody, Col, Row } from "reactstrap";
 

const CustomAnimationPlaceholder = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={CustomAnimationPlaceholderTitle} span={CustomAnimationPlaceholderSubTitle} />
        <CardBody>
          <Row className="gy-3">
            {DynamicNumber(2).map((item, index) => (
              <Col sm="6" key={index}>
                <div className="placeholder-body">
                  <div className="placeholder-start">
                    <div className={`square ${item === 2 ? "circle" : ""}`} />
                  </div>
                  <div className="placeholder-end">
                    <div className="placeholder-line placeholder-h-17 w-25 mb-2" />
                    <div className="placeholder-line" />
                    <div className="placeholder-line placeholder-h-8 w-50" />
                    <div className="placeholder-line w-75" />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomAnimationPlaceholder;
