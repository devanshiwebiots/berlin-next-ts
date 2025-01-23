"use client";
import { Container, Row } from "reactstrap";
import PlaceholderCards from "./PlaceholderCards";
import WidthAndSizing from "./WidthAndSizing";
import Animation from "./Animation";
import CustomAnimationPlaceholder from "./CustomAnimationPlaceholder";
import Colors from "./Colors";

const PlaceholdersContainer = () => {
  return (
    <Container fluid>
      <Row>
          <PlaceholderCards/>
          <WidthAndSizing/>
          <Animation/>
          <CustomAnimationPlaceholder/>
          <Colors/>
      </Row>
    </Container>
  );
};

export default PlaceholdersContainer;
