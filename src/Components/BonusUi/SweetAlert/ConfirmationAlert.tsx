import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, ConfirmationAlertTitle } from "@/Constant";
import { ConfirmationAlertSunTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 
const ConfirmationAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={ConfirmationAlertTitle} span={ConfirmationAlertSunTitle} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ConfirmationAlert;
