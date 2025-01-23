import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { EnableFlexBehaviorsTitle } from "@/Constant";
import { EnableFlexBehaviorsSubTitle } from "@/Data/Uikits/grid";
import { Card, CardBody, Col } from "reactstrap";
 

const EnableFlexBehaviors = () => {
  return (
    <Col xl="5">
      <Card className="height-equal">
        <CommonCardHeader title={EnableFlexBehaviorsTitle} span={EnableFlexBehaviorsSubTitle}/>
        <CardBody>
          <div className="flex-behaviors">
            <div className="d-flex p-2 c-light">I`m a flexbox container!</div>
            <div className="d-inline-flex p-2 c-light">I`m an inline flexbox container!</div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EnableFlexBehaviors;
