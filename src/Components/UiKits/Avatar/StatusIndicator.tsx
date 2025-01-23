import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, StatusIndicator } from "@/Constant";
import { StatusData, StatusIndicators } from "@/Data/Uikits/avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const StatusIndicatorAvatar = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal">
        <CommonCardHeader title={StatusIndicator} span={StatusData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image height={100} width={100} className="img-100 rounded-circle" src={`${ImagePath}/user/1.jpg`} alt="image" />
              <div className="status bg-success"></div>
            </div>
            {StatusIndicators.map(({ className, src ,color,height,width}, index) => (
              <div className="avatar" key={index}>
                <Image height={height} width={width} className={`${className} rounded-circle`} src={`${ImagePath}${src}`} alt="image" />
                <div className={`status bg-${color}`}></div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StatusIndicatorAvatar;