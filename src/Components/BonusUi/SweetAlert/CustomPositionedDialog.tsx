import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, CustomPositionedDialogTitle } from "@/Constant";
import { CustomPositionedDialogSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const CustomPositionedDialog = () => {
  const handleAlert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={CustomPositionedDialogTitle} span={CustomPositionedDialogSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomPositionedDialog;
