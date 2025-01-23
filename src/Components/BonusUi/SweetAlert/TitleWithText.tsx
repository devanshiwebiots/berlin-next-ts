import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Surprise, TitleWithTextTitle } from "@/Constant";
import { TitleWithTextSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const TitleWithText = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Title with Text",
      text: "This is a text within a title.",
      icon: "question",
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={TitleWithTextTitle} span={TitleWithTextSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="m-0" onClick={handleAlert}>
            {Surprise}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default TitleWithText;
