import { aspectRatiosData } from "@/Data/BonusUi/Ratios";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const AspectRatios = () => {
  return (
    <Col xxl='12'>
      <Card>
        <CardHeader className='card-header pb-0'>
          <h4 className='mb-0'>Aspect Ratios</h4>
          <p className='f-m-light mt-1'>
            Aspect ratios can be customized with modifier classes. By default, the following ratio classes are provided:
            <code>[ratio-1x1 / ratio-4x3 / ratio-16x9 / ratio-21x9]</code>.
          </p>
        </CardHeader>
        <CardBody>
          <Row className='gy-3'>
            {aspectRatiosData.map(({ id, ratioClass, videoUrl }) => (
              <Col lg='3' sm='6' key={id}>
                <div className={`ratio ${ratioClass}`}>
                  <iframe src={videoUrl} title={`YouTube video ${id}`} allowFullScreen></iframe>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AspectRatios;
