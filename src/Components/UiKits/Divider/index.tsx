import { Container, Row } from "reactstrap";
import HoriZontalDivider from "./HoriZontalDivider";
import VerticalSolidDivider from "./VerticalSolidDivider";
import VerticalDottedDivider from "./VerticalDottedDivider";
import VerticalDoubleDivider from "./VerticalDoubleDivider";
import AnimatedColorDivider from "./AnimatedColorDivider";
import HorizontalEditableDivider from "./HorizontalEditableDivider";
import SimpleHorizontalDivider from "./SimpleHorizontalDivider";
import SimpleVerticalDivider from "./SimpleVerticalDivider";

const DividerContainer = () => {
  return (
    <Container fluid>
      <Row>
        <HoriZontalDivider/>
        <VerticalSolidDivider/>
        <VerticalDottedDivider/>
        <VerticalDoubleDivider/>
        <AnimatedColorDivider/>
        <HorizontalEditableDivider/>
        <SimpleHorizontalDivider/>
        <SimpleVerticalDivider/>
      </Row>
    </Container>
  );
};

export default DividerContainer;
