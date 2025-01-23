import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicCards } from "@/Constant";
import { BasicCardData, BasicCardText1, BasicCardText2 } from "@/Data/BonusUi/BasicCard";
import { Card, CardBody, Col } from "reactstrap";

const BasicCard = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CommonCardHeader title={BasicCards} span={BasicCardData} />
        <CardBody>
          <p className='mb-0'>
            {BasicCardText1}
            <em className='txt-danger'>“module tabs”</em>
            {BasicCardText2}
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicCard;
