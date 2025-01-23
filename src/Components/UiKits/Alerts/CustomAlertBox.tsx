import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import SVG from "@/CommonComponent/SVG";
import { CustomAlert } from "@/Constant";
import { CustomAlertData } from "@/Data/Uikits/alert";
import { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";

const CustomAlertBox = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false); 

  return (
    <Col xl='6'>
      <Card>
        <CommonCardHeader title={CustomAlert} span={CustomAlertData} />
        <CardBody className='live-dark'>
          {visible && (
            <div className='alert-box'>
              <Alert color='transparent' className='alert-dismissible justify-content-center p-0' fade>
                <div className='alert-body'>
                  <SVG iconId='alert-popup' />
                  <h5 className='mb-1'>A Crucial Update is Now Available</h5>
                  <p>For improved security and functionality, install the most recent version right away.</p>
                  <div className='button-box'>
                    <Button color='light' className='light-background'>
                      Later
                    </Button>
                    <Button color='warning' onClick={onDismiss}>Right Now</Button>
                  </div>
                </div>
                <Button close onClick={onDismiss} aria-label="Close" />
              </Alert>
            </div>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomAlertBox;
