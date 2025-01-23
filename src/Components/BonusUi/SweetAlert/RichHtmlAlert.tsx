import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, RichHtmlAlertTitle } from "@/Constant";
import { RichHtmlAlertSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const RichHtmlAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html: `
              You can use <b>bold text</b>,
              <a href="#" autofocus>links</a>,
              and other HTML tags
            `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
              <i class="fa fa-thumbs-up"></i> Great!
            `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
              <i class="fa fa-thumbs-down"></i>
            `,
      cancelButtonAriaLabel: "Thumbs down",
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={RichHtmlAlertTitle} span={RichHtmlAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RichHtmlAlert;
