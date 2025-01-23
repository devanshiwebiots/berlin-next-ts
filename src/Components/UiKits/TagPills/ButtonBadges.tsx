import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ButtonBadgesTitle } from "@/Constant";
import { ButtonBadgesData, ButtonBadgesSubTitle } from "@/Data/Uikits/tag-pills";
import { Badge, Button, Card, CardBody, Col } from "reactstrap";

const ButtonBadges = () => {
  return (
    <Col xs='12'>
      <Card>
        <CommonCardHeader title={ButtonBadgesTitle} span={ButtonBadgesSubTitle} />
        <CardBody>
          <div className='badge-flex'>
            {ButtonBadgesData.map((item, index) => (
              <Button color={item.color} className={` ${item.buttonClass}`} key={index}>
                {item.title}
                <Badge color='danger' className={`ms-2 ${item.badgesClass}`}>
                  {item.text}
                </Badge>
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonBadges;
