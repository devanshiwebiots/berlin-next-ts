import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BackGroundPillTabTitle, Contact, Home, Href, Inbox } from '@/Constant'
import { BackgroundPillsTabData } from '@/Data/Uikits/tabs'
import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap'
import { BackGroundPillContent } from './BackGroundPillContent'

const BackGroundPillTab = () => {
    const [basicTab, setBasicTab] = useState("2");
  return (
    <Col xxl="6">
      <Card>
        <CommonCardHeader title={BackGroundPillTabTitle} span={BackgroundPillsTabData} />
        <CardBody>
        <div className="bg-navbar">
            <Nav tabs pills className='' id="pills-bg-tab">
                <NavItem><NavLink href={Href} className={`${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}><i className="icofont icofont-ui-home"></i>{'Sofa'}</NavLink></NavItem>
                <NavItem><NavLink href={Href} className={`${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}><i className="icofont icofont-ui-message"></i>{'Chair'}</NavLink></NavItem>
                <NavItem><NavLink href={Href} className={`${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}><i className="icofont icofont-man-in-glasses"></i>{'Tables'}</NavLink></NavItem>
            </Nav>
          </div>
          <BackGroundPillContent basicTab={basicTab}/>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BackGroundPillTab