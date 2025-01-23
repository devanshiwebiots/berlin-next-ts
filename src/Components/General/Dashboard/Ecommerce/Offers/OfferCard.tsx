import { Href, ImagePath } from '@/Constant';
import Link from 'next/link';
import React from 'react';
import { Button, Card, CardBody, Col } from 'reactstrap';

const OfferCard = () => {
  return (
    <Col xl={3} sm={5} className="xl-30 box-col-4e">
      <Card className="offer-card">
        <CardBody>
          <div className="offer-items d-flex align-items-center">
            <div className="offer-details offer-order-1">
              <h4 className="f-w-600">Save 30% on offer all products in January.</h4>
              <Button color="secondary" href="user-profile.html">Ask A friend</Button>
              <Link className="receive-link" href={Href}>Receive Link<i className="icon-arrow-right ms-1"></i></Link>
            </div>
            <img className="offer-img" src={`${ImagePath}/dashboard-2/offer-profile.png`} alt="profile" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OfferCard;
