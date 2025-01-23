import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AutoPlayVariantTitle, ImagePath } from "@/Constant";
import { AutoPlayVariantData, AutoPlayVariantSubTitle } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapCarousel";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
 

const AutoPlayVariant = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={AutoPlayVariantTitle} span={AutoPlayVariantSubTitle} />
        <CardBody>
          <Swiper spaceBetween={30} centeredSlides={true} autoplay={{delay: 2500,disableOnInteraction: false}} pagination={{clickable: true}} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper swiper-h">
            {AutoPlayVariantData.map((item, index) => (
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

export default AutoPlayVariant;
