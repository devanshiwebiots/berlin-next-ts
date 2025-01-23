import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LightTooltipsTitle } from "@/Constant";
import { LightColorTooltipData, LightTooltipsSubTitle } from "@/Data/Uikits/tooltip";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
 

const LightTooltips = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const toggleTooltip = (index: number) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LightTooltipsTitle} span={LightTooltipsSubTitle} />
        <CardBody>
          <div className="common-flex">
            {LightColorTooltipData &&
              LightColorTooltipData.map((item, index) => (
                <Fragment key={index}>
                  <Button color="transparent" id={`color_${index}`} onClick={() => toggleTooltip(index)} className={`button-light-${item.class}`}>
                    {item.text}
                  </Button>
                  <Tooltip isOpen={openIndex === index} target={`color_${index}`} toggle={() => toggleTooltip(index)}>
                    {item.text}
                  </Tooltip>
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default LightTooltips;
