import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, Ratio } from "@/Constant";
import { RatioData, Ratios } from "@/Data/Uikits/avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const RatioAvatar = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={Ratio} span={RatioData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar ratio">
              <Image height={100} width={100} className="b-r-8 img-100" src={`${ImagePath}/avtar/11.jpg`} alt="image" />
            </div>
            {Ratios.map(({ className, src,height,width}, index) => (
              <div className="avatar ratio" key={index}>
                <Image height={height} width={width} className={`b-r-8 ${className}`} src={`${ImagePath}${src}`} alt="image" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RatioAvatar;
