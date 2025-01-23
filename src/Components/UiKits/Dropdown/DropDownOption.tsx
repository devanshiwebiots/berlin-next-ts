import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DropDownoption } from "@/Constant";
import { DropDownDataOption, DropdownOptionsData } from "@/Data/Uikits/dropdown";
import React, { useState } from "react";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const DropdownOptions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Col md='12'>
      <Card>
        <CommonCardHeader title={DropDownoption} span={DropDownDataOption} />
        <CardBody>
          <div className='common-flex dropdown-option'>
            {DropdownOptionsData.map((data, index) => (
              <div className={`btn-group ${data.reference ? "dropdown-toggle-split" : ""}`} key={index}>
                <Dropdown isOpen={openIndex === index} toggle={() => toggleDropdown(index)}>
                  <DropdownToggle color='secondary' className={`dropdown-toggle border text-white ${data.reference ? "dropdown-toggle-split" : ""}`} data-bs-offset={data.offset} data-bs-reference={data.reference}>
                    {data.buttonLabel}
                  </DropdownToggle>
                  <DropdownMenu className={`dropdown-menu ${data.reference ? "dropdown-menu-end" : ""}`}>
                    {data.menuItems.map((item, itemIndex) => (
                      <DropdownItem key={itemIndex} href={item.href}>
                        {item.label}
                      </DropdownItem>
                    ))}
                    {data.buttonLabel === "Reference" && (
                      <li>
                        <hr className='dropdown-divider' />
                      </li>
                    )}
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

export default DropdownOptions;
