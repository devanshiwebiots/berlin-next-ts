import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, VerticalSliderTitle } from "@/Constant";
import { VerticalSliderSubTitle } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapCarousel";
import DynamicNumber from "@/utils/DynamicNumber";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
 

const VerticalSlider = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={VerticalSliderTitle} span={VerticalSliderSubTitle} />
        <CardBody>
          <Swiper direction={"vertical"} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper swiper-h">
            {DynamicNumber(7).map((item, index) => (
              <SwiperSlide key={index}>
                <Image height={665} width={1000} src={`${ImagePath}/slider/${item}.jpg`} className="d-block w-100" alt="Vertical_Slider" unoptimized/>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalSlider;
