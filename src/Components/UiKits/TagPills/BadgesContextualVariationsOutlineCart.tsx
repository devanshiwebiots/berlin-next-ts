import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BadgesContextualVariations, BadgesContextualVariationsOutline } from "@/Constant";
import { BadgeData, OutlineBadgesData } from "@/Data/Uikits/tag-pills";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";

const BadgesContextualVariationsOutlineCard = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="badges-custom-card">
        <CommonCardHeader title={BadgesContextualVariationsOutline} span={BadgeData} />
        <CommonTagAndPillsCardBody data={OutlineBadgesData} />
      </Card>
    </Col>
  );
};

export default BadgesContextualVariationsOutlineCard;
