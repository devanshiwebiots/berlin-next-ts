import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AutoCloseTimerTitle, ClickIt } from "@/Constant";
import { AutoCloseTimerSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const AutoCloseTimer = () => {
  const handleAlert = () => {
    let timerInterval: NodeJS.Timeout;

    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup()?.querySelector("b");
        if (timer) {
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        }
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={AutoCloseTimerTitle} span={AutoCloseTimerSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="danger" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoCloseTimer;
