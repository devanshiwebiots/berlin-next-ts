import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import SVG from "@/CommonComponent/SVG";
import { VerticalSolidDividerTitle } from "@/Constant";
import { VerticalSolidDividerData, VerticalSolidDividerSubTitle } from "@/Data/Uikits/divider";
import { Card, CardBody, Col, Row } from "reactstrap";

const VerticalSolidDivider = () => {
  return (
    <Col xxl='4' md='6' className='box-col-6'>
      <Card>
        <CommonCardHeader title={VerticalSolidDividerTitle} span={VerticalSolidDividerSubTitle} />
        <CardBody className='main-divider'>
          <Row className='g-sm-2 d-flex gy-4'>
            {VerticalSolidDividerData.map((item, index) => (
              <Col sm='3' xs='6' key={index}>
                <div className='vertical-divider'>
                  <div className={`vertical-line bg-${item.color}`}></div>
                  {item.icon ? <SVG className={`my-2 stroke-icon stroke-${item.color}`} iconId={item.icon} /> : <p className={`my-2 ${item.textClass}-${item.color}`}>{item.text}</p>}
                  <div className={`vertical-line bg-${item.color}`}></div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalSolidDivider;
