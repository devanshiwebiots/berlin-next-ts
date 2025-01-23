import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, ImagePath, PlaceholderCardsTitle } from "@/Constant";
import { PlaceholderCardsSubTitle } from "@/Data/Uikits/placeholder/Placeholders";
import Image from "next/image";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
 

const PlaceholderCards = () => {
  return (
    <Col xxl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={PlaceholderCardsTitle} span={PlaceholderCardsSubTitle} />
        <CardBody className="loading-card-wrapper">
          <Row className="gy-3">
            <Col sm="6">
              <Card className="mb-0 overflow-hidden">
                <Image height={524} width={818} className="card-img-top img-fluid" src={`${ImagePath}/masonry/5.jpg`} alt="" />
                <CardBody>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card`s content.</p>
                  <Button color="primary" tag={"a"} href={Href}>Go somewhere</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="mb-0 overflow-hidden" aria-hidden="true">
                <Image height={524} width={818} className="card-img-top img-fluid" src={`${ImagePath}/masonry/13.jpg`} alt="" />
                <CardBody>
                  <h5 className="card-title placeholder-glow">
                    <Col xs="4" className="placeholder placeholder-light" />
                  </h5>
                  <div className="card-text placeholder-glow mb-3">
                    <Col xs="7" className="placeholder placeholder-light" />
                    <Col xs="4" className="placeholder placeholder-light ms-1" />
                    <Col xs="4" className="placeholder placeholder-light" />
                    <Col xs="6" className="placeholder placeholder-light ms-1" />
                    <Col xs="3" className="placeholder placeholder-light" />
                  </div>
                  <Col xs="6">
                    <Button color="primary" tag={"a"} href={Href} className="disabled placeholder w-100" />
                  </Col>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PlaceholderCards;
