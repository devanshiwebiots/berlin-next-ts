"use client";
import { Container, Row } from "reactstrap";
import BorderLeft from "./BorderLeft";
import CustomCard from "./CustomCard";
import BorderRight from "./BorderRight";
import BorderTop from "./BorderTop";
import BorderBottom from "./BorderBottom";
import BorderPrimaryState from "./BorderPrimaryState";
import BorderWarningState from "./BorderWarningState";
import BorderSecondaryState from "./BorderSecondaryState";
import AbsoluteCard from "./AbsoluteCard";
 

const CreativeCardContainer = () => {
  return (
    <Container fluid>
      <Row className="effective-card">
        <CustomCard/>
        <BorderLeft/>
        <BorderRight/>
        <BorderTop/>
        <BorderBottom/>
        <BorderPrimaryState/>
        <BorderWarningState/>
        <BorderSecondaryState/>
        <AbsoluteCard/>
      </Row>
    </Container>
  );
};

export default CreativeCardContainer;
