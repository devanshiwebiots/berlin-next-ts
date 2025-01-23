import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { animatedTabTitle } from "@/Constant";
import { AnimatedbHeadData, Animatedtabs } from "@/Data/Uikits/tabs";
import React, { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const AnimatedTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dubai");

  const toggleTab = (tabId: string) => {
    if (activeTab !== tabId) setActiveTab(tabId);
  };

  return (
    <Col xxl='6' className='box-col-12'>
      <Card>
        <CommonCardHeader title={animatedTabTitle} span={AnimatedbHeadData} />
        <CardBody className='horizontal-icons-tab'>
          <Nav tabs className='nav-tabs border-tab mb-0'>
            {Animatedtabs.map((tab) => (
              <NavItem key={tab.id}>
                <NavLink className={activeTab === tab.id ? "nav-link tab-info active" : "nav-link tab-info"} onClick={() => toggleTab(tab.id)} id={`${tab.id}-tab`} data-bs-toggle='tab' href={`#${tab.id}`} role='tab' aria-controls={tab.id} aria-selected={activeTab === tab.id}>
                <i className="icofont icofont-building-alt"></i>
                  <span>{tab.title}</span>
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={activeTab}>
            {Animatedtabs.map((tab) => (
              <TabPane tabId={tab.id} key={tab.id}>
                <p className='pt-3'>{tab.content}</p>
              </TabPane>
            ))}
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedTabs;
