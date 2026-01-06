import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { EffectCoverflowTitle, ImagePath } from "@/Constant";
import { EffectCoverflowSubTitle } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapCarousel";
import DynamicNumber from "@/utils/DynamicNumber";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
 

const EffectCoverflowSlider = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={EffectCoverflowTitle} span={EffectCoverflowSubTitle} />
        <CardBody>
          <Swiper  effect={"coverflow"} loop={true} grabCursor={true} centeredSlides={true} slidesPerView={"auto"} coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }} pagination={true} modules={[EffectCoverflow, Pagination]} className="mySwiper coverflow-slider">
            {DynamicNumber(10).map((item, index) => (
              <SwiperSlide key={index}>
                <Image height={199} width={300} src={`${ImagePath}/slider/${item+1}.jpg`} className="d-block w-100" alt="Vertical_Slider"  unoptimized/>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EffectCoverflowSlider;
