import { TopBottomOffcanvasType } from "@/Types/UikitsType";
import { Fragment, useState } from "react";
import { Button, Col, Form, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { Direction } from "reactstrap/types/lib/Offcanvas";

const LeftRightOffcanvas: React.FC<TopBottomOffcanvasType> = ({ title, direction, color }) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  return (
    <Fragment>
      <Button color={color} onClick={toggle}>
        {title}
      </Button>
      <Offcanvas scrollable className='offcanvasTop' toggle={toggle} isOpen={show} direction={direction as Direction}>
        <OffcanvasHeader toggle={toggle}>
          <h4 className='offcanvas-title'>{title}</h4>
        </OffcanvasHeader>
        <OffcanvasBody className='custom-scrollbar'>
          <Fragment>
            <h5>Wed designer</h5>
            <p>For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience.</p>
          </Fragment>
          <Form className='row g-3'>
            <Col xs='12'>
              <Label>Email</Label>
              <Input type='email' placeholder='name@example.com' required />
            </Col>
            <Col xs='12'>
              <Label>Select Project</Label>
              <Input type='select' required>
                <option selected disabled>
                  Select your projects
                </option>
                <option>Project1 </option>
                <option>Project2 </option>
                <option>Project3</option>
              </Input>
            </Col>
            <Col xs='12'>
              <Label>Project Counts</Label>
              <Input type='select' required>
                <option selected disabled>
                  How many projects do you make?
                </option>
                <option>One </option>
                <option>Two </option>
                <option>Three</option>
              </Input>
            </Col>
            <Col xs='12'>
              <Label>External Notes</Label>
              <Input type='textarea' rows='4'></Input>
            </Col>
            <Col xs='12'>
              <div className='form-check checkbox-checked'>
                <Label check>
                  <Input type='checkbox' required />
                  Agree to terms and conditions
                </Label>
              </div>
            </Col>
            <Col xs='12'>
              <Button color='light' className='me-2' onClick={toggle}>
                Cancel
              </Button>
              <Button color='primary'>Submit</Button>
            </Col>
          </Form>
        </OffcanvasBody>
      </Offcanvas>
    </Fragment>
  );
};

export default LeftRightOffcanvas;
