"use client";
import { Container, Row } from "reactstrap";
import ArrowTab from "./ArrowTab";
import BackGroundPillTab from "./BackGroundPillTab";
import BorderTabs from "./BorderTabs";
import BottomTab from "./BottomTab";
import IconsWithTabs from "./IconsWithTabs";
import JustifyTabs from "./JustifyTabs";
import MaterialStyleLeftTabs from "./MaterialStyleLeftTabs";
import MaterialStyleTabs from "./MaterialStyleTabs";
import PillsTabs from "./PillsTabs";
import SimpleTabs from "./SimpleTabs";
import VerticalTabs from "./VerticalTabs";
import AnimatedTabs from "./AnimatedTabs";

const TabsContainer = () => {
  return (
    <Container fluid>
      <Row>
         <SimpleTabs/>
         <IconsWithTabs/>
         <VerticalTabs/>
         <PillsTabs/>
         <JustifyTabs/>
         <MaterialStyleLeftTabs/>
         <MaterialStyleTabs/>
         <BorderTabs/>
         <BackGroundPillTab/>
         <ArrowTab/>
         <BottomTab/>
         <AnimatedTabs/>
      </Row>
    </Container>
  );
};

export default TabsContainer;
