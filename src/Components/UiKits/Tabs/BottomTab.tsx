import { SetStateAction, useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Image from "next/image";
import { ArrowTabData, BottomTabs } from "@/Data/Uikits/tabs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BottomTabTitle } from "@/Constant";

const BottomTab = () => {
  const [activeTab, setActiveTab] = useState("html");

  const toggleTab = (tab: SetStateAction<string>) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Col xxl='6' className='box-col-12'>
      <Card>
        <CommonCardHeader title={BottomTabTitle} span={ArrowTabData} />
        <CardBody>
          <div className='bg-navbar bottom-navbar'>
            <TabContent activeTab={activeTab}>
              {BottomTabs.map((tab) => (
                <TabPane tabId={tab.id} key={tab.id}>
                  <div className='common-flex'>
                    <img src={tab.imageSrc} alt={tab.title} />
                    <h5>{tab.title}</h5>
                  </div>
                  {tab.content.map((text, index) => (
                    <div className='tab-paragraph' key={index}>
                      <i className='fa fa-arrow-circle-o-right' />
                      <p>{text}</p>
                    </div>
                  ))}
                </TabPane>
              ))}
            </TabContent>
            <Nav pills className='nav-pills nav-primary'>
              {BottomTabs.map((tab) => (
                <NavItem key={tab.id}>
                  <NavLink className={activeTab === tab.id ? "active" : ""} onClick={() => toggleTab(tab.id)}>
                    <img src={tab.imageSrc} alt={tab.title} />
                    {tab.title}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BottomTab;
