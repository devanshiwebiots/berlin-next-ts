"use client";
import { Col, Container, Row } from "reactstrap";
import BadgeHeadingsExampleCard from "./BadgeHeadingsExampleCard";
import BadgesContextualVariationsCard from "./BadgesContextualVariationsCard";
import BadgesContextualVariationsOutlineCard from "./BadgesContextualVariationsOutlineCart";
import BadgeTagsWithIconsCard from "./BadgeTagsWithIconsCart";
import ButtonBadges from "./ButtonBadges";
import ImageBadges from "./ImageBadges";
import NumberofBadgeCard from "./NumberofBadgeCard";
import NumberOfPillsTagCard from "./NumberOfPillsTagCart";
import PillsContextualVariationsCard from "./PillsContextualVariationsCart";
import PillsContextualVariationsCartOutline from "./PillsContextualVariationsCartOutline";
import PositionedBadges from "./PositionedBadges";
import RoundedPillsWithIconsCard from "./RoundedPillsWithIconsCart";
import CloseBadges from "./CloseBadges";
import ImageWithCloseBadges from "./ImageWithCloseBadges";

const TagAndPillsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BadgesContextualVariationsCard />
        <BadgesContextualVariationsOutlineCard />
        <PillsContextualVariationsCard />
        <PillsContextualVariationsCartOutline />
        <NumberofBadgeCard />
        <NumberOfPillsTagCard />
        <BadgeTagsWithIconsCard />
        <RoundedPillsWithIconsCard />
        <BadgeHeadingsExampleCard />
        <Col sm='12' xl='6' className='box-col-12'>
          <Row>
            <PositionedBadges />
            <ButtonBadges />
          </Row>
        </Col>
        <ImageBadges/>
        <CloseBadges/>
        <ImageWithCloseBadges/>
      </Row>
    </Container>
  );
};

export default TagAndPillsContainer;
