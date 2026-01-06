import { ImagePath } from '@/Constant';
import Image from 'next/image';
import React, { Fragment } from 'react'
import { Card, CardBody, Col } from "reactstrap";


const Hover2 = () => {
  return (
    <Fragment>
         <Col xxl='6' sm='6' xl='4' className='box-col-4'>
        <Card className='common-hover'>
          <CardBody>
            <div className='creative-wrapper'>
              <Image width={748} height={133} className='img-fluid' src={`${ImagePath}/other-images/mountain.jpg`} alt='background image' unoptimized/>
              <div className='creative-info w-100'>
                <h4 className='text-white text-truncate'>Add the title of the card</h4>
                <p className='text-white'>This is an example card for you to use. you are able to include subtitles in your according.</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  )
}

export default Hover2