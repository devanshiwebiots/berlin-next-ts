import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DisabledTooltipTitle } from "@/Constant";
import { DisabledTooltipSubTitle } from "@/Data/Uikits/tooltip";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
 
const DisabledTooltip = () => {
  const [openIndex, setOpenIndex] = useState(false);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={DisabledTooltipTitle} span={DisabledTooltipSubTitle} />
        <CardBody className="fill-tooltip">
          <div className="common-flex">
            <Fragment>
              <Button color="primary" id={`filled_DisabledButton`} onClick={() => setOpenIndex(true)} disabled>{"Disabled button"}</Button>
              <Tooltip isOpen={openIndex} target={`filled_DisabledButton`} toggle={() => setOpenIndex(false)}>{"Disabled button"}</Tooltip>
            </Fragment>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DisabledTooltip;
