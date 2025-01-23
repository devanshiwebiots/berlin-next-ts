import React, { Fragment } from 'react'
import { Card, CardBody, Col } from "reactstrap";
import Link from "next/link";


const Hover1 = () => {
  return (
    <Fragment>
         <Col xxl='3' sm='6' xl='4' className='box-col-4'>
        <Card className='common-hover'>
          <CardBody>
            <Link className='effect-card' href='#!'>
              <div className='common-box1 common-align'>
                <i className='flex-shrink-0' data-feather='plus-square'></i>
                <h4 className='text-truncate'>Add the title of the card</h4>
              </div>
              <p className='mb-0'>This is an example card for you to use. you are able to include subtitles in your according.</p>
              <div className='go-corner'>
                <div className='go-arrow'></div>
              </div>
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  )
}

export default Hover1