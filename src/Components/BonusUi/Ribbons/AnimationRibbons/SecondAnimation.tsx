import React, { Fragment } from "react";
import { Card, Col } from "reactstrap";

const SecondAnimation = () => {
  return (
    <Fragment>
      <Col md='6' xl='4'>
        <Card className='vertical-left-animate'>
          <div className='ribbon-wrapper border border-1 height-equal alert-light-light'>
            <div className='ribbon ribbon-success ribbon-bookmark'>
              <span>Latest</span>
              <i className='fa fa-bolt' />
            </div>
            <p>
              Ribbon designs use the class of <em className='txt-danger'>ribbon-bookmark &amp; vertical-left-animate</em> through create top-start ribbon and common class use `ribbon`.
            </p>
          </div>
        </Card>
      </Col>
      <Col md='6' xl='4'>
        <Card className='triangular-ribbon'>
          <div className='ribbon-wrapper border border-1 height-equal'>
            <div className='ribbon triangular-ribbon-box'>
              <div>
                <svg>
                  <use href='../assets/svg/icon-sprite.svg#pricing' />
                </svg>
              </div>
            </div>
            <p>
              Ribbon designs use the class of <em className='txt-danger'>triangular-ribbon-box</em> through create top-start ribbon and common class use ribbon.
            </p>
          </div>
        </Card>
      </Col>
      <Col md='6' xl='4'>
        <Card className='vertical-ribbon-animate'>
          <div className='ribbon-vertical-right-wrapper border border-1 vertical-rp-space height-equal alert-light-light'>
            <div className='ribbon ribbon-bookmark ribbon-vertical-right ribbon-warning'>
              <div>
                <i className='fa fa-bolt' />
                <span>FlashSale</span>
              </div>
            </div>
            <p>
              Ribbon designs use the class of <em className='txt-danger'>ribbon-vertical-right &amp; ribbon-bookmark</em> through create top-end ribbon and common class use ribbon.
            </p>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SecondAnimation;
