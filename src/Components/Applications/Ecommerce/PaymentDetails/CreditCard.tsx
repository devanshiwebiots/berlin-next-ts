import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { CardNumber, CreditCards, FirstName, ImagePath, NameOnCard } from "@/Constant";
import { Card, CardBody, Col, Form, Row } from "reactstrap";
import FormGroupCommon from "./Common/FormGroupCommon";
import SelectCommon from "./Common/SelectCommon";

const CreditCard = () => {
const CreditSelect:string[]= ["Select Type","Master","Visa"]

  return (
    <Col xxl="8" className="box-col-12">
      <Card>
        <CommonCardHeader title={CreditCards} headClass="pb-0"/>
        <CardBody>
          <Row>
            <Col md="7" className="order-md-0 order-1">
              <Form className="theme-form mega-form">
                <FormGroupCommon type="text" placeholder={CardNumber} />
                <FormGroupCommon type="text" placeholder={FirstName} />
                <FormGroupCommon type="date" />
                <FormGroupCommon type="text" placeholder={NameOnCard} />
                <SelectCommon data={CreditSelect} size={1} />
              </Form>
            </Col>
            <Col md="5" className="text-center bg-img-cover">
              <RatioImage className="img-fluid" src={`${ImagePath}/ecommerce/card.png`} alt="" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CreditCard;
