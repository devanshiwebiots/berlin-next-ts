import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimatedAvatarTitle, ImagePath } from "@/Constant";
import { AnimatedAvatarData, AnimatedAvatarSubTitle } from "@/Data/Uikits/avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const AnimatedAvatar = () => {
  return (
    <Col xl='4' className="box-col-6">
      <Card className='height-equal'>
        <CommonCardHeader title={AnimatedAvatarTitle} span={AnimatedAvatarSubTitle} />
        <CardBody className='avatar-showcase'>
          <div className='avatars'>
            {AnimatedAvatarData.map((item, index) => (
              <div className='avatar' key={index}>
                <Image height={item.height} width={item.width} className={`${item.imageClass} rounded-circle`} src={`${ImagePath}/${item.image}`} alt='#' unoptimized/>
                <div className={`status animation-ping bg-${item.color}`}></div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedAvatar;
