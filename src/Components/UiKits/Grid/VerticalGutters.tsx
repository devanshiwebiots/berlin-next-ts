import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VerticalGuttersTitle } from "@/Constant";
import { VerticalGuttersSubTitle } from "@/Data/Uikits/grid";
import DynamicNumber from "@/utils/DynamicNumber";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const VerticalGutters = () => {
  return (
    <Col xl='6'>
      <Card className='height-equal'>
        <CommonCardHeader title={VerticalGuttersTitle} span={VerticalGuttersSubTitle} />
        <CardBody className='v-gutter'>
          <Container className='overflow-hidden text-center'>
            <Row className='gy-3'>
              {DynamicNumber(4).map((item, index) => (
                <Col xs='6' key={index}>
                  <div className='p-3'>
                    <span>Custom column padding</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalGutters;
