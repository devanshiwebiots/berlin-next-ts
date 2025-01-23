"use client";
import { Col, Container, Row } from "reactstrap";
import { BasicProgressBarsCard } from "./BasicProgressBarsCard";
import { ProgressBarsStripedCard } from "./ProgressBarsStripedCart";
import { ProgressBarsAnimatedCard } from "./ProgressBarsAnimatedCard";
import { MultipleBarsCard } from "./MultipleBarsCard";
import { ProgressWithNumberStepsCard } from "./ProgressWithNumberSteps";
import { CustomProgressBarsCard } from "./CustomProgressBarsCard";
import { SmallProgressBarsCard } from "./SmallProgressBarsCard";
import { LargeProgressBarsCard } from "./LargeProgressBarsCard";
import { CustomHeightProgressBarsCard } from "./CustomHeightProgressBarsCard";
import StepProgressBar from "./StepProgressBar";

const ProgressContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm='12'>
          <BasicProgressBarsCard />
          <Row>
            <ProgressBarsStripedCard />
            <ProgressBarsAnimatedCard />
          </Row>
          <Row>
            <MultipleBarsCard />
            <ProgressWithNumberStepsCard />
          </Row>
          <CustomProgressBarsCard />
          <Row>
            <SmallProgressBarsCard />
            <LargeProgressBarsCard />
          </Row>
        </Col>
        <CustomHeightProgressBarsCard />
        <StepProgressBar />
      </Row>
    </Container>
  );
};

export default ProgressContainer;
