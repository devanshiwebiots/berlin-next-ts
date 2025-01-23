 
import { useEffect, useState } from "react";
import { Card, CardBody, Carousel, CarouselControl, CarouselItem, Col } from "reactstrap";
import { CarouselItemWithInterval } from "../../../Types/BonusUiType";
import { IndividualIntervalData, ItemIntervalData } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapCarousel";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, IndividualCarouselTitle } from "@/Constant";
import Image from "next/image";
 
const IndividualInterval = () => {
  const [items, setItems] = useState<CarouselItemWithInterval[]>(IndividualIntervalData);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const next = () => {
    if (activeIndex === items.length - 1) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  };

  const previous = () => {
    if (activeIndex === 0) setActiveIndex(items.length - 1);
    else setActiveIndex(activeIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, items[activeIndex].interval);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, items]);
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={IndividualCarouselTitle} span={ItemIntervalData} />
        <CardBody>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <Image width={748} height={497} src={`${ImagePath}/${item.image}`} alt="drawing-room" className="d-block w-100" />
              </CarouselItem>
            ))}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IndividualInterval;
