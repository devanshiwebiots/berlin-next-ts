import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VariationsOfRightRibbons } from "@/Constant";
import { RightRibbonData } from "@/Data/BonusUi/Ribbons";
import { StaticRightRibbons } from "./StaticRightRibbons";
import { DynamicRightRibbons } from "./DynamicLeftRibbons";

const  RightRibbons = () => {
  return (
    <Row>
      <Col sm="12" xl="12">
        <Card>
          <CommonCardHeader title={VariationsOfRightRibbons} span={RightRibbonData} />
          <CardBody>
            <Row className="g-3">
              <StaticRightRibbons/>
              <DynamicRightRibbons />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RightRibbons;
