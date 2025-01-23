import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ArrowTabTitle, BackGroundPillTabTitle, Contact, Home, Href, Inbox } from '@/Constant'
import { ArrowTabData, BackgroundPillsTabData } from '@/Data/Uikits/tabs'
import { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap'
import { ArrowTabContent } from './ArrowTabContent'

const ArrowTab = () => {
    const [basicTab, setBasicTab] = useState("1");
  return (
    <Col xxl="6">
      <Card className='arrow-tabs'>
        <CommonCardHeader title={ArrowTabTitle} span={ArrowTabData} />
        <CardBody>
        <div className="bg-navbar arrow-tabs">
            <Nav tabs pills className='mb-3' id="pills-bg-tab">
                <NavItem><NavLink href={Href} className={`${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>{'Account info'}</NavLink></NavItem>
                <NavItem><NavLink href={Href} className={`${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>{'Portfolio'}</NavLink></NavItem>
                <NavItem><NavLink href={Href} className={`${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>{'Skills'}</NavLink></NavItem>
                <NavItem><NavLink href={Href} className={`${basicTab === "4" ? "active" : ""}`} onClick={() => setBasicTab("4")}>{'Installment'}</NavLink></NavItem>
            </Nav>
          </div>
          <ArrowTabContent basicTab={basicTab}/>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ArrowTab