import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RowColumnsGuttersTitle } from "@/Constant";
import { RowColumnsGuttersSubTitle } from "@/Data/Uikits/grid";
import DynamicNumber from "@/utils/DynamicNumber";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const RowColumnsGutters = () => {
  return (
    <Col xl='6'>
      <Card className='height-equal'>
        <CommonCardHeader title={RowColumnsGuttersTitle} span={RowColumnsGuttersSubTitle} />
        <CardBody className='r-c-gutter'>
          <Container className='text-center'>
            <Row className='row-cols-2 row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 g-2 g-lg-3'>
              {DynamicNumber(10).map((item, index) => (
                <Col key={index}>
                  <div className='p-10'>
                    <span>Row column</span>
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

export default RowColumnsGutters;
