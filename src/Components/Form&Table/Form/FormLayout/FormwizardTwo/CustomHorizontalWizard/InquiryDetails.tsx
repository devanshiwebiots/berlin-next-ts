import { ContactNumber, Email, EnterNumber, InqMail } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { BankLogoListProp } from "@/Types/FormType";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

export const InquiryDetails :React.FC<BankLogoListProp> = ({ getUserData,differentId }) => {
  const { inquiresForm } = useAppSelector((state) => state.formWizardTwo);
  const { notifications, email, contactNumber } = inquiresForm;
  const itemsName: string[] = ["Featured Items", "Newsletters", "Notifications", "Blogs"];

  return (
    <Col xs="12" className="inquiries-form">
      <Row>
        <Col md="6">
          <p className="f-w-500">Select the option how you want to receive important notifications.</p>
          <div className="choose-option">
            {itemsName.map((data, index) => ( 
              <div key={index} className="form-group radio check radio-primary p-0">
                <Input className="me-2" id={differentId ? data: `${data+index}`} type="radio" name="notifications" onChange={getUserData} checked={notifications === data} value={data} />
                <Label check htmlFor={differentId ? data: `${data+index}`}>{data}</Label>
              </div>
            ))}
          </div>
        </Col>
        <Col md="6">
          <Row className="g-3">
            <Col xs="12">
              <Label check>{Email}<span className="txt-danger">*</span></Label>
              <Input type="text" placeholder={InqMail} value={email} name="email" onChange={getUserData} />
            </Col>
            <Col xs="12">
              <Label check>{ContactNumber}</Label>
              <Input id="customContact2" type="number" placeholder={EnterNumber} value={contactNumber} name="contactNumber" onChange={getUserData} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
