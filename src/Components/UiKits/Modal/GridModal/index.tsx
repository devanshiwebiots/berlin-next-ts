import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";
import CommonModal from "../Common/CommonModal";
import GridModalBody from "./GridModalBody";

const Gridmodal = () => {
  const [scrollingModal, setScrollingModal] = useState(false);
  const scrollModaltoggle = () => setScrollingModal(!scrollingModal);
  return (
    <Col md='6'>
      <Card className='height-equal'>
        <CardHeader className='pb-0'>
          <h4>Grid Modal</h4>
          <p className='f-m-light mt-1'>
            Utilize the Bootstrap grid system within a modal by nesting <code> container-fluid </code> within the <code> modal-body</code> . Then, use the normal grid system classes as you would anywhere else.
          </p>
        </CardHeader>
        <CardBody>
          <Button color='warning' onClick={scrollModaltoggle}>
            Grid Modal
          </Button>
          <CommonModal isOpen={scrollingModal} toggle={scrollModaltoggle} title='Scrolling Modal'>
            <GridModalBody />
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Gridmodal;
