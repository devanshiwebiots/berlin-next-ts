import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ChechboxButtonGroupData } from "@/Data/Buttons/ButtonGroup";
import { Card, CardBody, Col, Row } from "reactstrap";
import { DynamicCheckBoxButtonGroup } from "./DynamicCheckBoxButtonGroup";
import { StaticCheckBoxButtonGroup } from "./StaticCheckBoxButtonGroup";

const CheckBoxButtonGroup = () => {
  return (
    <Col sm="12">
      <Card className="radio-checkbox-group">
        <CommonCardHeader title={"CheckBox Button Group"} span={ChechboxButtonGroupData} />
        <CardBody className="btn-group-showcase">
          <Row>
            <StaticCheckBoxButtonGroup />
            <DynamicCheckBoxButtonGroup />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CheckBoxButtonGroup