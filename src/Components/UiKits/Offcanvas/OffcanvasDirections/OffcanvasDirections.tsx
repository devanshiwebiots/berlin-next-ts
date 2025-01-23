import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OffcanvasDirectionsTitle } from "@/Constant";
import { OffcanvasDirectionsSubTitle } from "@/Data/Uikits/offcanvas/Offcanvas";
import TopOffcanvas from "./TopBottomOffcanvas";
import { Card, CardBody, Col } from "reactstrap";
import LeftRightOffcanvas from "./LeftRightOffcanvas";

const OffcanvasDirections = () => {
  return (
    <Col xs='12'>
      <Card>
        <CommonCardHeader title={OffcanvasDirectionsTitle} span={OffcanvasDirectionsSubTitle} />
        <CardBody className='common-flex common-offcanvas'>
          <TopOffcanvas title={"Top Offcanvas"} direction={"top"} color='primary' />
          <LeftRightOffcanvas title={"Right Offcanvas"} direction={"end"} color='secondary' />
          <TopOffcanvas title={"Bottom Offcanvas"} direction={"bottom"} color="warning" />
          <LeftRightOffcanvas title={"Left Offcanvas"} direction={"start"} color='success' />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OffcanvasDirections;
