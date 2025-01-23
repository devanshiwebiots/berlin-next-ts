import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import LeftRightOffcanvas from '../OffcanvasDirections/LeftRightOffcanvas'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { OffcanvasVariationsTitle } from '@/Constant'
import { OffcanvasVariationsSubTitle } from '@/Data/Uikits/offcanvas/Offcanvas'

const OffcanvasVariations = () => {
  return (
    <Col xs="12">
    <Card>
      <CommonCardHeader title={OffcanvasVariationsTitle} span={OffcanvasVariationsSubTitle} />
      <CardBody className="common-flex common-offcanvas">
        <LeftRightOffcanvas title={"Offcanvas body scrolling"} direction={"start"} color="info" data/>
        <LeftRightOffcanvas title={"Enable Both Scrolling & Backdrop"} direction={"start"} color="warning" data/>
        <LeftRightOffcanvas title={"Toggle Static Offcanvas"} direction={"start"} color="info" data/>
      </CardBody>
    </Card>
  </Col>
  )
}

export default OffcanvasVariations