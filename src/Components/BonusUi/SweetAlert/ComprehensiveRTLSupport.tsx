import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, ComprehensiveRTLSupportTitle } from "@/Constant";
import { ComprehensiveRTLSupportSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const ComprehensiveRTLSupport = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "هل تريد الاستمرار؟",
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,
      showCloseButton: true,
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={ComprehensiveRTLSupportTitle} span={ComprehensiveRTLSupportSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ComprehensiveRTLSupport;
