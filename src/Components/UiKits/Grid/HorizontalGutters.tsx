import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HorizontalGuttersTitle } from "@/Constant";
import { HorizontalGuttersSubTitle } from "@/Data/Uikits/grid";
import DynamicNumber from "@/utils/DynamicNumber";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const HorizontalGutters = () => {
  return (
    <Col xl='7'>
      <Card className='height-equal'>
        <CommonCardHeader title={HorizontalGuttersTitle} span={HorizontalGuttersSubTitle} />
        <CardBody className='h-gutter'>
          <Container className='px-4 text-center'>
            <Row className='gx-5 gy-sm-0 g-3'>
              {DynamicNumber(2).map((item, index) => (
                <Col key={index}>
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

export default HorizontalGutters;
