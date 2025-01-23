import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimatedAlertTitle, ClickIt } from "@/Constant";
import { AnimatedAlertSunTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const AnimatedAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Custom animation with Animate.css",
      showClass: {
        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
      },
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={AnimatedAlertTitle} span={AnimatedAlertSunTitle} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedAlert;
