import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OutlineSVGTooltipsTitle } from "@/Constant";
import { OutlineSVGTooltipsData, OutlineSVGTooltipsSubTitle } from "@/Data/Uikits/tooltip";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
 

const OutlineSVGTooltips = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleTooltip = (index: number) => setOpenIndex(openIndex === index ? null : index);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={OutlineSVGTooltipsTitle} span={OutlineSVGTooltipsSubTitle} />
        <CardBody className="svg-tooltip">
          <div className="common-flex">
            {OutlineSVGTooltipsData &&
              OutlineSVGTooltipsData.map((item, index) => (
                <Fragment key={index}>
                  <Button outline={true} color={item.class} id={`OutlineSVG_${index}`} onClick={() => toggleTooltip(index)}>
                   {item.icon}
                  </Button>
                  <Tooltip isOpen={openIndex === index} target={`OutlineSVG_${index}`} toggle={() => toggleTooltip(index)}>
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
export default OutlineSVGTooltips;
