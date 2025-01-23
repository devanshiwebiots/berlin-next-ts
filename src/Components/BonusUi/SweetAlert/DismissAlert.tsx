import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, DismissAlertTitle } from "@/Constant";
import { DismissAlertSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const DismissAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Oops...",
      text: "Something went wrong!",
      icon: "error",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={DismissAlertTitle} span={DismissAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="success" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DismissAlert;
