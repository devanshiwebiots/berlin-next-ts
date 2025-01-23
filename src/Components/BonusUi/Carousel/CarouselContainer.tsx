"use client";
import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import MouseWheelVariant from "../MouseWheelVariant";
import AutoPlayVariant from "./AutoPlayVariant";
import CrossFade from "./CrossFade";
import DarkVariant from "./DarkVariant";
import DisableTouchSwiping from "./DisableTouchSwiping";
import EffectCoverflowSlider from "./EffectCoverflow";
import IndividualInterval from "./IndividualInterval";
import NestedSwiper from "./NestedSwiper";
import SlidesOnly from "./SlidesOnly";
import VerticalSlider from "./VerticalSlider";
import WithCaptions from "./WithCaptions";
import WithControls from "./WithControls";
import WithIndicators from "./WithIndicators";

const CarouselContainer = () => {
  return (
    <Fragment>
      <Container fluid>
        <h4 className="mb-3 common-title">Swiper Sliders</h4>
        <Row>
          <SlidesOnly />
          <WithControls />
          <WithIndicators />
          <WithCaptions />
          <CrossFade />
          <IndividualInterval />
          <DisableTouchSwiping />
          <DarkVariant />
        </Row>
        <Row>
          <VerticalSlider />
          <NestedSwiper />
          <MouseWheelVariant />
          <AutoPlayVariant />
          <EffectCoverflowSlider />
        </Row>
      </Container>
    </Fragment>
  );
};

export default CarouselContainer;
