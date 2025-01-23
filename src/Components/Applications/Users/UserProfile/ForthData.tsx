import { Href, ImagePath } from "@/Constant";
import { ProfileData3 } from "@/Data/Applications/Users";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col, Row } from "reactstrap";
import CommonUserFooter from "./Common/CommonUserFooter";
import { CommonUserHeader } from "./Common/CommonUserHeader";

const ForthData = () => {
  return (
    <Col sm='12'>
      <Card>
        <div className='profile-img-style'>
          <CommonUserHeader />
          <hr />
          <Row>
            <Col lg='12' xl='4'>
              <div className='my-gallery'>
                <Gallery withCaption>
                  <figure className='m-0'>
                    <Item original={`${ImagePath}/blog/img.png`} width='1600' height='800' caption='Image Caption 1'>
                      {({ ref, open }) => (
                        <Link href={Href} onClick={open}>
                          <img className='img-fluid rounded' ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/blog/img.png`} alt='image' />
                        </Link>
                      )}
                    </Item>
                  </figure>
                </Gallery>
              </div>
              <CommonUserFooter listClass='mt-4 like-comment-sm-mb' />
            </Col>
            <Col xl='6'>
              <p>{ProfileData3}</p>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default ForthData;
