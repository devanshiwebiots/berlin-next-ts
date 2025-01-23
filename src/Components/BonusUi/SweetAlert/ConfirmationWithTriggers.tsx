import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, ConfirmationWithTriggersTitle } from "@/Constant";
import { ConfirmationWithTriggersSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 
const ConfirmationWithTriggers = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={ConfirmationWithTriggersTitle} span={ConfirmationWithTriggersSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ConfirmationWithTriggers;
