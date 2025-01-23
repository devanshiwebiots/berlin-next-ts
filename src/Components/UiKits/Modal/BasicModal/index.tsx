import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicModal } from "@/Constant";
import { BasicData } from "@/Data/Uikits/modal";
import { Card, CardBody, Col } from "reactstrap";
import { SimpleModal } from "./SimpleModal";
import ScrollingModal from "./ScrollingModal";
import { ToolTipAndPopover } from "./ToolTipAndPopover";
import OpenModalBerlin from "./OpenModalMoscow";

const BasicModalCard = () => {
  return (
    <Col lg='6'>
      <Card>
        <CommonCardHeader title={BasicModal} span={BasicData} />
        <CardBody className='badge-spacing'>
          <SimpleModal />
          <ScrollingModal />
          <ToolTipAndPopover/>
          <OpenModalBerlin/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModalCard;
