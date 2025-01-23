import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { CustomerReviewTitle, Href, ImagePath } from "@/Constant";
import { CustomerSlidersettings, ReviewsData } from "@/Data/General/Dashboard/Default";
import Link from "next/link";
import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";

const CustomerReview = () => {
  return (
    <Col xxl={3} lg={4} sm={6} className='box-col-4'>
      <Card className='review-slider'>
        <DashboardCommonHeader title={CustomerReviewTitle} />
        <CardBody>
          <Slider {...CustomerSlidersettings} >
            {ReviewsData.map((review) => (
              <div key={review.id} className='review'>
                <picture>
                  <img className='img-fluid' src={`${ImagePath}/${review.image}`} alt={review.name} />
                </picture>
                <div className='review-content'>
                  <Link href={Href}>
                    <h5 className='txt-primary f-w-600'>{review.name}</h5>
                  </Link>
                  <span>{review.title}</span>
                </div>
                <span className='d-flex gap-1 justify-content-center'>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fa ${i < Math.floor(review.rating) ? "fa-star font-warning" : i < review.rating ? "fa-star-half-o font-warning" : "fa-star-o font-warning"}`}></i>
                  ))}
                </span>
                <p>{review.reviewText}</p>
                <span className='txt-secondary f-w-500'>({review.date})</span>
              </div>
            ))}
          </Slider>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomerReview;
