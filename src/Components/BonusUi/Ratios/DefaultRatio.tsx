import { Card, CardBody, CardHeader, Col } from "reactstrap";

const DefaultRatio = () => {
  return (
    <Col lg='6'>
      <Card>
        <CardHeader className='pb-0'>
          <h4 className='mb-0'>Default Ratio</h4>
          <p className='f-m-light mt-1'>
            Wrap any embed, like an <code>&lt;iframe&gt;</code>, in a parent element with <code>ratio</code> and an <code>aspect ratio</code> class. Here is a breakdown of these ratios:<code> 16x9 ratio</code>.
          </p>
        </CardHeader>
        <CardBody>
          <div className='ratio ratio-16x9'>
            <iframe src='https://www.youtube.com/embed/qDL2HBPy9uQ?si=yyIowrbZW-C-3lxd' title='YouTube video' allowFullScreen></iframe>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRatio;
