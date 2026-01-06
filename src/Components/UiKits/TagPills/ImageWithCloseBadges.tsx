import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, ImageWithCloseBadgesTitle } from "@/Constant";
import { ImageBadgesData, ImageWithCloseBadgesSubTitle } from "@/Data/Uikits/tag-pills";
import Image from "next/image";
import { XCircle } from "react-feather";
import { Badge, Card, CardBody, Col } from "reactstrap";
 
const ImageWithCloseBadges = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={ImageWithCloseBadgesTitle} span={ImageWithCloseBadgesSubTitle} />
        <CardBody>
          <div className="badge-spacing image-badges">
            {ImageBadgesData.map((item, index) => (
              <Badge pill color="" className={`"common-align txt-${item.color === "light" ? "dark" : item.color} badge-l-${item.color} border border-${item.color}`} key={index}>
                <Image height={24} width={24} className="rounded-circle me-1" src={`${ImagePath}/dashboard/${item.image}`} alt="user" unoptimized/>
                {item.color}<span className="vr mx-2"></span>
                <XCircle className={`ms-1 stroke-${item.color === "light" ? "dark" : item.color}`} />
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImageWithCloseBadges;
