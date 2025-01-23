import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AlignmentOptions } from "@/Constant";
import { AlignmentDropdownButtons, AlignmentDropDownSub } from "@/Data/Uikits/dropdown";
import React, { useState } from "react";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const DropdownAlignmentOptions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Col lg='12'>
      <Card>
        <CommonCardHeader title={AlignmentOptions} span={AlignmentDropDownSub} />
        <CardBody className='rtl-dropdown'>
          <div className='common-flex'>
            {AlignmentDropdownButtons.map((buttonProps, index) => (
              <div className={`btn-group ${buttonProps.alignmentClass || ""}`} key={index}>
                <Dropdown isOpen={openIndex === index} toggle={() => toggle(index)}>
                  <DropdownToggle color='dark' className='text-white'>
                    {buttonProps.buttonLabel}
                  </DropdownToggle>
                  <DropdownMenu className={buttonProps.displayClass || ""}>
                    {buttonProps.menuItems.map((item, itemIndex) => (
                      <DropdownItem key={itemIndex} href={item.href}>
                        {item.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DropdownAlignmentOptions;
