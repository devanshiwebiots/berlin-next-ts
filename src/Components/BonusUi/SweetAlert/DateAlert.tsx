import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, DateAlertTitle } from "@/Constant";
import { DateAlertSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const DateAlert = () => {
  const handleAlert = async () => {
    const { value: date } = await Swal.fire({
      title: "Select departure date",
      input: "date",
      didOpen: () => {
        const today = new Date().toISOString();
        const inputElement = Swal.getInput();
        if (inputElement) {
          inputElement.min = today.split("T")[0];
        }
      }
    });

    if (date) {
      Swal.fire("Departure date", date);
    }
  };

  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={DateAlertTitle} span={DateAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="danger" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DateAlert;
