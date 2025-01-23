import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, Shapes } from "@/Constant";
import { Shaps, ShapsData } from "@/Data/Uikits/avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const ShapsAvatar = () => {
  return (
    <Col xl='4' md='6'>
      <Card className='height-equal'>
        <CommonCardHeader title={Shapes} span={ShapsData} />
        <CardBody className='avatar-showcase'>
          <div className='avatars'>
            <div className='avatar'>
              <Image height={100} width={100} className='img-100 b-r-8' src={`${ImagePath}/avtar/4.jpg`} alt='image' />
            </div>
            {Shaps.map(({ className, src, height, width }, index) => (
              <div className='avatar' key={index}>
                <Image height={height} width={width} className={`${className} b-r-30`} src={`${ImagePath}${src}`} alt='image' />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShapsAvatar;
