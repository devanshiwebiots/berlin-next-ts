import RegisterWizardContainer from "@/Components/Other/Authentication/RegisterWizard";
import { Col, Container, Row } from "reactstrap";

const RegisterWizard = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12" className="p-0">
          <div>
            <RegisterWizardContainer />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterWizard;
