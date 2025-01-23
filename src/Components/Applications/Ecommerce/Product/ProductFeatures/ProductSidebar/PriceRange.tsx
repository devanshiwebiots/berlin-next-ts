import { ProductSliderOne, ProductSliderTwo } from "@/Data/Applications/Ecommerce";
import CommonProductSlide from "../Common/CommonProductSlide";
import Slider from "react-slick";

export const PriceRange = () => {
  const settings = {
    slidesToShow: 1,
    swipeToSlide: false,
    arrows: true,
    dots: false,
  };
  
  return (
    <div className="product-filter pb-0 new-products">     
        <Slider {...settings}>
          <div className="item">
            {ProductSliderOne.map((item, index) => (
              <CommonProductSlide data={item} key={index} />
            ))}
          </div>
          <div className="item">
            {ProductSliderTwo.map((item, index) => (
              <CommonProductSlide data={item} key={index} />
            ))}
          </div>
        </Slider>       
    </div>
  );
};
