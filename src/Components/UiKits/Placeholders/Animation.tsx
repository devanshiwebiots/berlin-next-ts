import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimationTitle } from "@/Constant";
import { AnimationSubTitle } from "@/Data/Uikits/placeholder/Placeholders";
import { Card, CardBody, Col } from "reactstrap";
 
const Animation = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={AnimationTitle} span={AnimationSubTitle} />
        <CardBody className="animation-placeholder">
          <p className="placeholder-glow"><Col xs="12"><span className="placeholder placeholder-light w-100"/></Col></p>
          <p className="placeholder-wave"><Col xs="12"><span className="placeholder placeholder-light w-100"/></Col></p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Animation;
