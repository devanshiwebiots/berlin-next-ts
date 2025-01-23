"use client";
import { Container } from "reactstrap";
import LeftRibbons from "./LeftRibbons";
import RightRibbons from "./RightRibbon";
import AnimatedRibbons from "./AnimationRibbons/AnimatedRibbons";
 
 
const RibbonsContainer = () => {
  return (
    <Container fluid>
       <LeftRibbons/>
       <RightRibbons/>
       <AnimatedRibbons/>
    </Container>
  );
};

export default RibbonsContainer;
