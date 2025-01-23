import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicAlertTitle, ClickIt } from "@/Constant";
import { BasicAlertSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const BasicAlert = () => {
  const handleAlert = () => Swal.fire("Welcome! to the Berlin theme");
  return (
    <Col xxl='3' xl='4' sm='6' xs='12' className='box-col-4'>
      <Card className='height-equal'>
        <CommonCardHeader title={BasicAlertTitle} span={BasicAlertSubTitle} />
        <CardBody className='btn-showcase'>
          <Button color='primary' className='m-0' onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BasicAlert;
