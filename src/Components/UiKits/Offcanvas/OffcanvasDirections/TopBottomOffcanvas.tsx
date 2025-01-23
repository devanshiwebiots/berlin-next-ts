import { TopBottomOffcanvasType } from "@/Types/UikitsType";
import { Fragment, useState } from "react";
import { Button, Col, Form, Input, InputGroup, InputGroupText, Label, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { Direction } from "reactstrap/types/lib/Offcanvas";

const TopBottomOffcanvas: React.FC<TopBottomOffcanvasType> = ({ title, direction, color }) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  return (
    <Fragment>
      <Button color={color} onClick={toggle}>
        {title}
      </Button>
      <Offcanvas scrollable className='offcanvasTop' toggle={toggle} isOpen={show} direction={direction as Direction}>
        <OffcanvasHeader toggle={toggle}>
          <h4 className='offcanvas-title'>Offcanvas Top</h4>
        </OffcanvasHeader>
        <OffcanvasBody className='custom-scrollbar'>
          <Form className='row g-3'>
            <Col md='4'>
              <Label>First name</Label>
              <Input type='text' required />
            </Col>
            <Col md='4'>
              <Label>Last name</Label>
              <Input type='text' required />
            </Col>
            <Col md='4'>
              <Label>Username</Label>
              <InputGroup>
                <InputGroupText>@</InputGroupText>
                <Input type='text' required />
              </InputGroup>
            </Col>
            <Col md='6'>
              <Label>City</Label>
              <Input type='text' required />
            </Col>
            <Col md='3'>
              <Label>Country</Label>
              <Input type='select' required>
                <option selected disabled>
                  Choose...
                </option>
                <option>US </option>
                <option>UK </option>
                <option>Africa</option>
              </Input>
            </Col>
            <Col md='3'>
              <Label>Zip</Label>
              <Input type='text' required />
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
              <Button color='primary'>Submit</Button>
            </Col>
          </Form>
        </OffcanvasBody>
      </Offcanvas>
    </Fragment>
  );
};

export default TopBottomOffcanvas;
