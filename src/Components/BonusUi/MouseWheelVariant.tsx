import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, MouseWheelVariantTitle } from "@/Constant";
import { MouseWheelVariantData, MouseWheelVariantSubTitle } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapCarousel";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
 

const MouseWheelVariant = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={MouseWheelVariantTitle} span={MouseWheelVariantSubTitle} />
        <CardBody>
          <Swiper slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{ clickable: true, }} modules={[Mousewheel, Pagination]} className="mySwiper swiper-h">
            {MouseWheelVariantData.map((item, index) => (
              <SwiperSlide key={index}>
                <Image height={665} width={1000} src={`${ImagePath}/slider/${item}.jpg`} className="d-block w-100" alt="Vertical_Slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MouseWheelVariant;
