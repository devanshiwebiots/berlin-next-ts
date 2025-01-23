import React, { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import { Bell } from "react-feather";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DismissingLightAlert } from "@/Constant";
import { DismissingLightData } from "@/Data/Uikits/alert";
import Link from "next/link";

const DismissingLightAlerts = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={DismissingLightAlert} span={DismissingLightData} />
        <CardBody>
          <Alert fade color="" className="alert-light-warning alert-dismissible mb-0" isOpen={visible} toggle={onDismiss}>
            <Bell />
            <p className="text-dark">The <Link className="alert-link txt-warning" href="#!">alert-light-warning </Link>class can be used to create an alert like this one.</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissingLightAlerts;
