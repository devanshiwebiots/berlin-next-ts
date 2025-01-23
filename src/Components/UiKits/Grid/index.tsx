"use client";
import { Container, Row } from "reactstrap";
import GridOptionsCard from "./GridOptions";
import GridColumnCard from "./GridColumn";
import VerticalAlignmentCard from "./VerticalAlignment";
import HorizontalAlignmentCard from "./HorizontalAlignment";
import NestingCard from "./Nesting";
import OrderCard from "./Order";
import OffsetCard from "./Offset";
import EnableFlexBehaviors from "./EnableFlexBehaviors";
import HorizontalGutters from "./HorizontalGutters";
import VerticalGutters from "./VerticalGutters";
import RowColumnsGutters from "./RowColumnsGutters";
import NoGutters from "./NoGutters";
 
const GridContainer = () => {
  return (
    <Container fluid>
      <Row>
         <GridOptionsCard/>
         <GridColumnCard/>
         <EnableFlexBehaviors/>
         <HorizontalGutters/>
         <VerticalGutters/>
         <RowColumnsGutters/>
         <NoGutters/>
         <VerticalAlignmentCard/>
         <HorizontalAlignmentCard/>
         <NestingCard/>
         <OrderCard/>
         <OffsetCard/>
      </Row>
    </Container>
  );
};

export default GridContainer;
