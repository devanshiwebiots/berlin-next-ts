import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import SVG from "@/CommonComponent/SVG";
import { SVGTooltipsTitle } from "@/Constant";
import { SVGTooltipsData, SVGTooltipsSubtitle } from "@/Data/Uikits/tooltip";
import { Fragment, useState } from "react";
import { Card, CardBody, Col, Tooltip } from "reactstrap";
 
const SVGTooltips = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleTooltip = (index: number) => setOpenIndex(openIndex === index ? null : index);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SVGTooltipsTitle} span={SVGTooltipsSubtitle} />
        <CardBody className="svg-tooltip light-bg-tooltip">
          <div className="common-flex">
            {SVGTooltipsData &&
              SVGTooltipsData.map((item, index) => (
                <Fragment key={index}>
                  <div className={`bg-light-${item.class}`} id={`svg_${index}`} onClick={() => toggleTooltip(index)}>
                    <SVG className={`stroke-${item.class}`} iconId={item.icon} />
                  </div>
                  <Tooltip isOpen={openIndex === index} target={`svg_${index}`} toggle={() => toggleTooltip(index)}>
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
export default SVGTooltips;
