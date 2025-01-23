import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HorizontalEditableDividerTitle } from "@/Constant";
import { HorizontalEditableDividerData, HorizontalEditableDividerSubTitle } from "@/Data/Uikits/divider";
import { Card, CardBody, Col } from "reactstrap";

const HorizontalEditableDivider = () => {
  return (
    <Col md='6'>
      <Card>
        <CommonCardHeader title={HorizontalEditableDividerTitle} span={HorizontalEditableDividerSubTitle} />
        <CardBody className='main-divider horizontal-variation'>
          {HorizontalEditableDividerData.map((item, index) => (
            <div className={`divider linear-line double-line double-line-${index + 1}`} key={index}>
              {item.text}
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalEditableDivider;
