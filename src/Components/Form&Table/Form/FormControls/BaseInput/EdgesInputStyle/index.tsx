import { Card, Col, Form } from "reactstrap";
import { EdgesInputStyles } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { EdgeInputStyleData } from "@/Data/Form&Table/Form";
import { EdgesInputCardBody } from "./EdgesInputCardBody";
import { EdgesInputCardFooter } from "./EdgesInputCardFooter";

const EdgesInputStyle = () => {
  return (
    <Col md='6'>
      <Card>
        <CommonCardHeader title={EdgesInputStyles} span={EdgeInputStyleData} />
        <Form className='theme-form dark-inputs' onSubmit={(e) => e.preventDefault()}>
          <EdgesInputCardBody />
          <EdgesInputCardFooter/>
        </Form>
      </Card>
    </Col>
  );
};

export default EdgesInputStyle;
