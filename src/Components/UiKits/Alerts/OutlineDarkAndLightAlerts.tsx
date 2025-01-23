import { Alert, Button, Card, CardBody, Col, Row } from "reactstrap";
import { Clock, Octagon, ThumbsUp, Triangle } from "react-feather";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OutlineDarkLightAlerts } from "@/Constant";
import { OutLineLightData } from "@/Data/Uikits/alert";
import OutlineBorder from "./OutlineBorder";

const OutlineDarkAndLightAlerts = () => {
  const [visible, setVisible] = useState(true);
  const [visibleAlert, setVisibleAlert] = useState(true);
  const onDismiss = () => setVisible(!visible);
  const onDismissAlert = () => setVisibleAlert(!visibleAlert);

  return (
    <Col sm='12'>
      <Card>
        <CommonCardHeader title={OutlineDarkLightAlerts} span={OutLineLightData} />
        <CardBody className='outline-alerts'>
          <Row className='gy-3'>
            <Col xl='6'>
              <Alert color='' isOpen={visible} toggle={onDismiss} className='txt-primary border-primary'>
                <Clock />
                <p>
                  One of <strong>YouTube`s</strong> most crucial ranking factors is Watch Time.
                </p>
              </Alert>
              <Alert color='transparent' isOpen={visibleAlert} className='txt-success border-success outline-2x alert-icons' toggle={onDismissAlert}>
                <ThumbsUp />
                <p>
                  <b> Well done! </b>You successfully read this important message.
                </p>
              </Alert>
            </Col>
            <OutlineBorder/>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineDarkAndLightAlerts;
