import { Fragment, useState } from "react";
import { Card, CardBody, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col } from "reactstrap";
import { CarouselDataProp, CommonCarouselProp } from "../../../../Types/BonusUiType";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const CommonCarousel: React.FC<CommonCarouselProp> = ({ dark, data, control, indecators, caption, slide, interval, ride, fade, lightCaption ,headerTitle,subTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = data.map((item: CarouselDataProp) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
        <img src={`${ImagePath}/${item.image}`} alt="drawing-room" className="d-block w-100" />
        {caption && <CarouselCaption className={`d-none d-md-block ${lightCaption ? "carousel-opacity" : ""}`} captionText={item.captionText} captionHeader={item.captionHeader} />}
      </CarouselItem>
    );
  });

  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={headerTitle} span={subTitle} />
        <CardBody>
          <Carousel activeIndex={activeIndex} next={next} previous={previous} fade={fade} slide={slide} interval={interval} ride={ride} dark={dark}>
            {slides}
            {control && (
              <Fragment>
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Fragment>
            )}
            {indecators && <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={goToIndex} />}
          </Carousel>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CommonCarousel;
