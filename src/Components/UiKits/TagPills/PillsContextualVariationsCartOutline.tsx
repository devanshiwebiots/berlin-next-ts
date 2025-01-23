import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PillsContextualVariationsOutline } from "@/Constant";
import { OutlineBadgesDataPill, PillsData } from "@/Data/Uikits/tag-pills";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";

const PillsContextualVariationsCartOutline = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="badges-custom-card">
        <CommonCardHeader title={PillsContextualVariationsOutline} span={PillsData} />
        <CommonTagAndPillsCardBody data={OutlineBadgesDataPill} pill />
      </Card>
    </Col>
  );
};

export default PillsContextualVariationsCartOutline;