import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt } from "@/Constant";
import { PositionAlertType } from "@/Types/BonusUiType";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const PositionAlert = ({ position, color, title, span }: PositionAlertType) => {
  const handleAlert = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: position,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={title} span={span} />
        <CardBody className="btn-showcase">
          <Button color={color} className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PositionAlert;
