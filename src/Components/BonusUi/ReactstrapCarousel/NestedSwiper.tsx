import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, NestedSwiperTitle } from "@/Constant";
import { NestedSwiperData, NestedSwiperSubTitle } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapCarousel";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
 

const NestedSwiper = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={NestedSwiperTitle} span={NestedSwiperSubTitle} />
        <CardBody>
          <Swiper className="mySwiper swiper-h" spaceBetween={50} pagination={{clickable: true}}modules={[Pagination]}>
            <SwiperSlide><Image height={665} width={1000} src={`${ImagePath}/slider/7.jpg`} className="d-block w-100" alt="Vertical_Slider" /></SwiperSlide>
            <SwiperSlide>
              <Swiper className="mySwiper2 swiper-v" direction={"vertical"} spaceBetween={50} pagination={{clickable: true}} modules={[Pagination]}>
                {NestedSwiperData.map((item,index)=>(
                    <SwiperSlide key={index}><Image height={665} width={1000} src={`${ImagePath}/slider/${item}.jpg`} className="d-block w-100" alt="Vertical_Slider" /></SwiperSlide>
                ))}
              </Swiper>
            </SwiperSlide>
            <SwiperSlide><Image height={665} width={1000} src={`${ImagePath}/slider/3.jpg`} className="d-block w-100" alt="Vertical_Slider" /></SwiperSlide>
            <SwiperSlide><Image height={665} width={1000} src={`${ImagePath}/slider/4.jpg`} className="d-block w-100" alt="Vertical_Slider" /></SwiperSlide>
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestedSwiper;
