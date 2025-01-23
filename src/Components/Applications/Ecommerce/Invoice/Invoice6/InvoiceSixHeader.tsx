import { ImagePath, Invoice, Berlin } from "@/Constant";
import { Col, Row } from "reactstrap";

const InvoiceSixHeader = () => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <div className="d-flex">
            <div className="media-left">
              <img className="media-object for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" />
              <img className="media-object for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo" />
            </div>
            <div className="flex-grow-1 m-l-20 text-right">
              <h4 className="media-heading">{Berlin} </h4>
              <p>hello@Moscow.in<br /><span>289-335-6503</span></p>
            </div>
          </div>
        </Col>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <h3>
              {Invoice} #<span className="counter">1069</span>
            </h3>
            <p>Issued: May<span> 27, 2023</span><br /> Payment Due: June <span>27, 2023</span></p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InvoiceSixHeader;
