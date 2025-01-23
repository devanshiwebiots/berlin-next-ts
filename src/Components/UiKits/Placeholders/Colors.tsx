import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColorsTitle } from "@/Constant";
import { ColorsData, ColorsSubTitle } from "@/Data/Uikits/placeholder/Placeholders";
import { Card, CardBody, Col } from "reactstrap";

const Colors = () => {
  return (
    <Col xl='12'>
      <Card>
        <CommonCardHeader title={ColorsTitle} span={ColorsSubTitle} />
        <CardBody className='placeholder-glow'>
          <Col xl='12'>
            <span className='placeholder w-100' />
          </Col>
          {ColorsData.map((item, index) => (
            <Col xl='12' key={index}>
              <span className={`placeholder w-100 bg-${item}`} />
            </Col>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Colors;
