"use client";
import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";
import { CrossFadeData, CrossFadeDataList, DarkVariantData, DarkVariantDataList, DisableTouchData, DisableTouchDataList, SlidesOnlyData, SlidesOnlyDataList, WithCaptionData, WithCaptionDataList, WithControlData, WithControlDataList, WithIndicatorData, WithIndicatorDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapCarousel";
import { CrossFadeTitle, DarkVariantTitle, DisableTouchSwipingTitle, SlidesOnlyTitle, WithCaptionTitle, WithControlsTitle, WithIndicatorsTitle } from "@/Constant";
import IndividualInterval from "./IndividualInterval";
import VerticalSlider from "./VerticalSlider";
import NestedSwiper from "./NestedSwiper";
import MouseWheelVariant from "../MouseWheelVariant";
import AutoPlayVariant from "./AutoPlayVariant";
import EffectCoverflowSlider from "./EffectCoverflow";

const ReactstrapCarouselContainer = () => {
  return (
    <Fragment>
      <Container fluid>
        <h4 className='mb-3 common-title'>Reactstrap Carousel with Bootstrap</h4>
        <Row>
          <CommonCarousel data={SlidesOnlyDataList} headerTitle={SlidesOnlyTitle} subTitle={SlidesOnlyData} interval='2000' />
          <CommonCarousel data={WithControlDataList} headerTitle={WithControlsTitle} subTitle={WithControlData} interval='2000' control />
          <CommonCarousel data={WithIndicatorDataList} headerTitle={WithIndicatorsTitle} subTitle={WithIndicatorData} ride='carousel' control indecators />
          <CommonCarousel data={WithCaptionDataList} headerTitle={WithCaptionTitle} subTitle={WithCaptionData} ride='carousel' control indecators caption />
          <CommonCarousel data={CrossFadeDataList} headerTitle={CrossFadeTitle} subTitle={CrossFadeData} interval='2500' control fade />
          <IndividualInterval />
          <CommonCarousel data={DisableTouchDataList} headerTitle={DisableTouchSwipingTitle} subTitle={DisableTouchData} control />
          <CommonCarousel data={DarkVariantDataList} headerTitle={DarkVariantTitle} subTitle={DarkVariantData} control caption lightCaption indecators dark />
        </Row>
        <h4 className='mb-3 common-title'>Swiper Sliders</h4>
        <Row>
          <VerticalSlider />
          <NestedSwiper />
          <MouseWheelVariant/>
          <AutoPlayVariant/>
          <EffectCoverflowSlider/>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ReactstrapCarouselContainer;
