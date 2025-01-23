import { CommentsPlaceholder, FloatingComment, FloatingCommentLabel, FloatingComments, FloatingEmail, FloatingEmailLabel, FloatingInputGroupLabel, FloatingLayout, FloatingOpenLabel, FloatingPassword, FloatingValidInput, FloatOpenFloatingLabel, InputWithValue, InputWithValuePlaceholder, InputWithValuePlaceholderValue, InvalidInput, InvalidInputPlaceholder, InvalidInputPlaceholderValue, LayOutDefaultValue, LayOutPlaceholder } from "@/Constant";
import { FloatingSelectType, FloatingSelectTypeList } from "@/Data/Form&Table/Form";
import { CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import CommonFloatingFormGroup from "./Common/CommonFloatingFormGroup";
import CommonFloatingInput from "./Common/CommonFloatingInput";

export const BasicFloatingCardBody = () => {
  return (
    <CardBody className="custom-input">
      <Row>
        <Col>
          <CommonFloatingInput inputType="email" label={FloatingValidInput} placeholder={InputWithValuePlaceholder} defaultValue={InputWithValuePlaceholderValue} floatingLabel={InputWithValue} />
          <CommonFloatingInput inputType="email" label={InvalidInput} placeholder={InvalidInputPlaceholder} defaultValue={InvalidInputPlaceholderValue} floatingLabel={InvalidInput} invalid />
          <CommonFloatingInput inputType="textarea" label={FloatingComments} placeholder={''} floatingLabel={CommentsPlaceholder} />
          <CommonFloatingInput inputType="email" label={FloatingEmail} floatingLabel={FloatingEmailLabel} />
          <CommonFloatingInput inputType="password" label={FloatingPassword} floatingLabel={FloatingPassword} />
          <CommonFloatingInput inputType="textarea" label={FloatingComment} placeholder={''} floatingLabel={FloatingCommentLabel} height="100px" />
          <Row className="mb-1">
            <Col sm="3"><Label check>{FloatingOpenLabel}</Label></Col>
            <Col sm="9">
              <FormGroup floating>
                <Input type="select">{FloatingSelectType.map((item, index) => (<option key={index}>{item}</option>))}</Input>
                <Label check>{FloatOpenFloatingLabel}</Label>
              </FormGroup>
            </Col>
          </Row>
          <CommonFloatingFormGroup floatingLabel={FloatingInputGroupLabel} />
          <CommonFloatingFormGroup floatingLabel={FloatingInputGroupLabel} inputClass="has-validation" floatClass="is-invalid" invalid required />
          <Row className="mb-0">
          <Col sm="3"><Label check>{FloatingLayout}</Label></Col>
            <Col sm="9">
              <Row className="g-2">
                <Col xxl="6">
                  <FormGroup floating>
                    <Input type="email" placeholder={LayOutPlaceholder} defaultValue={LayOutDefaultValue} />
                    <Label check>{FloatingEmailLabel}</Label>
                  </FormGroup>
                </Col>
                <Col xxl="6">
                  <FormGroup floating>
                    <Input type="select">{FloatingSelectTypeList.map(({ text }, index) => (<option key={index}>{text}</option>))}</Input>
                    <Label check>{FloatOpenFloatingLabel}</Label>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </CardBody>
  );
};
