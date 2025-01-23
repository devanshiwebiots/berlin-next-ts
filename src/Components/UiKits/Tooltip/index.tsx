"use client";
import { Container, Row } from "reactstrap";
import BasicTooltip from "./BasicTooltip";
import ColoredTooltip from "./ColoredTooltip";
import TooltipDirections from "./TooltipDirections";
import ElementsWithHoverEffect from "./ElementsWithHoverEffect";
import FilledTooltip from "./FilledTooltip";
import DisabledTooltip from "./DisabledTooltip";
import SVGTooltips from "./SVGTooltips";
import OutlineSVGTooltips from "./OutlineSVGTooltips";
import LightTooltips from "./LightTooltips";
 
const TooltipContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicTooltip/>
        <ColoredTooltip/>
        <LightTooltips/>
        <TooltipDirections/>
        <ElementsWithHoverEffect/>
        <FilledTooltip/>  
        <DisabledTooltip/>
        <SVGTooltips/>
        <OutlineSVGTooltips/>
      </Row>
    </Container>
  );
};

export default TooltipContainer;
