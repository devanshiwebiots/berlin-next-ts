import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimatedColorDividerTitle } from "@/Constant";
import { AnimatedColorDividerSubTitle } from "@/Data/Uikits/divider";
import { Card, CardBody, Col } from "reactstrap";
 
const AnimatedColorDivider = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={AnimatedColorDividerTitle} span={AnimatedColorDividerSubTitle} />
        <CardBody className="linear-divider">
          <div className="animated-divider animated-line" />
          <p className="mb-0 c-light">This CSS divider embodies simplicity at its finest, yet it exudes an air of elegance and timelessness. Despite its minimalist design, it commands attention effortlessly. While the divider takes center stage in this arrangement, it seamlessly integrates with the overall aesthetic, allowing the backdrop image to shine through.</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedColorDivider;
