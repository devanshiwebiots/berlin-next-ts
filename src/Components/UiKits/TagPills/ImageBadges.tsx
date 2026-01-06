import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImageBadgesTitle, ImagePath } from "@/Constant";
import { ImageBadgesData, ImageBadgesSubTitle } from "@/Data/Uikits/tag-pills";
import Image from "next/image";
import { Badge, Card, CardBody, Col } from "reactstrap";
 

const ImageBadges = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ImageBadgesTitle} span={ImageBadgesSubTitle} />
        <CardBody>
          <div className="badge-spacing image-badges">
            {ImageBadgesData.map((item, index) => (
              <Badge pill color="" className={`"common-align txt-${item.color === "light" ? "dark" : item.color} badge-l-${item.color} border border-${item.color}`} key={index}>
                <Image className="rounded-circle me-1" src={`${ImagePath}/dashboard/${item.image}`} alt="user" height={24} width={24} unoptimized/>
                {item.color}
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImageBadges;
