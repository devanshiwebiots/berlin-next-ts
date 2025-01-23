import { Badge, Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CloseBadgesTitle } from "@/Constant";
import { CloseBadgesSubTitle, ImageBadgesData } from "@/Data/Uikits/tag-pills";
import { XCircle } from "react-feather";

const CloseBadges = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CloseBadgesTitle} span={CloseBadgesSubTitle} />
        <CardBody>
          <div className="badge-spacing image-badges">
            {ImageBadgesData.map((item, index) => (
              <Badge pill color="" className={`"common-align txt-${item.color === "light" ? "dark" : item.color} badge-l-${item.color} border border-${item.color}`} key={index}>
                {item.color}
                <XCircle className={`ms-1 stroke-${item.color === "light" ? "dark" : item.color}`} />
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CloseBadges;
