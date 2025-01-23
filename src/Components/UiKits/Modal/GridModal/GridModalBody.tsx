import { Container, ModalBody, Row } from "reactstrap";
import GridItem from "./GridItem";

const GridModalBody = () => {
  return (
    <ModalBody>
      <Container fluid>
        <Row className='common-align'>
          <GridItem colClasses='col-md-4' text='.col-md-4' />
          <GridItem colClasses='col-md-4 ms-auto' text='.col-md-4 .ms-auto' />
        </Row>
        <Row className='justify-content-center'>
          <GridItem colClasses='col-md-3 ms-auto' text='.col-md-3 .ms-auto' />
          <GridItem colClasses='col-md-2 ms-auto' text='.col-md-2 .ms-auto' />
        </Row>
        <Row>
          <GridItem colClasses='col-md-6 ms-auto' text='.col-md-6 .ms-auto' />
        </Row>
        <Row className='common-align'>
          <GridItem colClasses='col-sm-9' text='Level 1: .col-sm-9' />
          <Row>
            <GridItem colClasses='col-8 col-sm-6' text='Level 2: .col-8 .col-sm-6' />
            <GridItem colClasses='col-4 col-sm-6' text='Level 2: .col-4 .col-sm-6' />
          </Row>
        </Row>
      </Container>
    </ModalBody>
  );
};
export default GridModalBody;
