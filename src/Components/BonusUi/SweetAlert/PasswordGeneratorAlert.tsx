import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, PasswordGeneratorAlertTitle } from "@/Constant";
import { PasswordGeneratorAlertSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const PasswordGeneratorAlert = () => {
  const handleAlert = async () => {
    const { value: password } = await Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: "10",
        autocapitalize: "off",
        autocorrect: "off",
      },
    });
    if (password) {
      Swal.fire(`Entered password: ${password}`);
    }
  };
  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={PasswordGeneratorAlertTitle} span={PasswordGeneratorAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PasswordGeneratorAlert;
