import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PositionedBadgesTitle } from "@/Constant";
import { PositionedBadgesData, PositionedBadgesSubTitle } from "@/Data/Uikits/tag-pills";
import { Badge, Button, Card, CardBody, Col } from "reactstrap";
 

const PositionedBadges = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={PositionedBadgesTitle} span={PositionedBadgesSubTitle} />
        <CardBody>
          <div className="badge-flex">
            {PositionedBadgesData.map((item, index) => (
              <Button color={item.color} className={`position-relative ${item.buttonClass}`} key={index}>
                {item.icon ? <i className={`fa fa-${item.icon}`} /> : item.title}
                <Badge pill color="danger" className={`position-absolute top-0 start-100 translate-middle ${item.badgesClass}`}>
                  {item.text ? item.text : <span className="visually-hidden">New alerts</span>}
                </Badge>
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default PositionedBadges;
