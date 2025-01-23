import { Fragment } from "react";
import { Card, Col } from "reactstrap";

const FirstAnimation = () => {
  return (
    <Fragment>
      <Col md='6' xl='4'>
        <div className='vertical-ribbon-animate'>
          <div className='ribbon-vertical-right-wrapper border border-1 vertical-rp-space height-equal'>
            <div className='ribbon ribbon-vertical-right ribbon-secondary ribbon-bottom-arrow'>
              <span>10% OFF</span>
            </div>
            <p>
              Ribbon designs use the className of <em className='txt-danger'>ribbon-vertical-right & ribbon-bottom-arrow</em> through create top-start ribbon and common class use ribbon.
            </p>
          </div>
        </div>
      </Col>
      <Col md='6' xl='4'>
        <Card>
          <div className='animated-ribbon ribbon-wrapper smooth-animate border border-1 height-equal alert-light-light'>
            <p className='mb-0'>
              Ribbon designs use the class of <em className='txt-danger'>animated-ribbon &amp; smooth-animate</em> through create bottom-end ribbon and common class use ribbon.
            </p>
            <div className='box'>
              <div className='ribbon'>
                <i className='back' />
                <i className='front'>
                  <span>Upcoming</span>
                </i>
              </div>
            </div>
            <div className='box-svg'>
              <svg className='ribbon-svg' id='ribbon' width={300} height={60} />
            </div>
          </div>
        </Card>
      </Col>
      <Col md='6' xl='4'>
        <Card>
          <div className='ribbon-wrapper smooth-animate border border-1 height-equal'>
            <p>
              Ribbon design use the class of <em className='txt-danger'>smooth-animate</em> through create top-start ribbon and common class use `ribbon`.
            </p>
            <div className='box'>
              <a className='media-image' href='#!'>
                <span className='label label-new'>Hot</span>
              </a>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default FirstAnimation;
