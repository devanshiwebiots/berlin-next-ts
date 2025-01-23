import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SimpleVerticalDividerTitle } from "@/Constant";
import { SimpleHorizontalDividerData, SimpleVerticalDividerSubTitle } from "@/Data/Uikits/divider";
import { Card, CardBody, Col } from "reactstrap";

const SimpleVerticalDivider = () => {
  return (
    <Col md='6'>
      <Card>
        <CommonCardHeader title={SimpleVerticalDividerTitle} span={SimpleVerticalDividerSubTitle} />
        <CardBody className='main-divider'>
          <div className='common-align'>
            {SimpleHorizontalDividerData.map((item, index) => (
              <div className={`vr bg-${item}`} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleVerticalDivider;
