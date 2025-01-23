import { Container, Row } from "reactstrap";
import LinkUtilities from "./LinkUtilities";
import LinkUnderlines from "./LinkUnderlines";
import BorderOpacity from "./BorderOpacity";
import BackgroundColorOpacity from "./BackgroundColorOpacity";
import CommonLinks from "./CommonLinks";

const NavigateLinksContainer = () => {
  return (
    <Container fluid>
      <Row>
        <LinkUtilities/>
        <LinkUnderlines/>
        <BorderOpacity/>
        <BackgroundColorOpacity/>
        <CommonLinks/>
      </Row>
    </Container>
  );
};

export default NavigateLinksContainer;
