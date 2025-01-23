import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FlatCards } from "@/Constant";
import { FlatCardData, FlatCardText1, FlatCardText2, FlatCardTextEm } from "@/Data/BonusUi/BasicCard";
import { Card, CardBody, Col } from "reactstrap";

const FlatCard = () => {
  return (
    <Col sm='12' xl='6'>
      <Card className='b-r-0'>
        <CommonCardHeader title={FlatCards} span={FlatCardData} />
        <CardBody>
          <p className='mb-0'>
            {FlatCardText1}
            <em className='txt-danger'>{FlatCardTextEm}</em>
            {FlatCardText2}
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlatCard;
