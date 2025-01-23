import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SimpleHorizontalDividerTitle } from "@/Constant";
import { SimpleHorizontalDividerData, SimpleHorizontalDividerSubTitle } from "@/Data/Uikits/divider";
import { Card, CardBody, Col } from "reactstrap";
 

const SimpleHorizontalDivider = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SimpleHorizontalDividerTitle} span={SimpleHorizontalDividerSubTitle} />
        <CardBody className="main-divider">
          {SimpleHorizontalDividerData.map((item, index) => (
            <div className={`divider-h-line bg-${item}`} key={index}/>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleHorizontalDivider;
