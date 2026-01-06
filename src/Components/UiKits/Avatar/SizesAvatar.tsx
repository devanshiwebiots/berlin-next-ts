import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, Sizes } from "@/Constant";
import { SizeData, SizeImages } from "@/Data/Uikits/avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

export const SizesAvatar = () => {
  return (
    <Col xl='4' md='6'>
      <Card className='height-equal'>
        <CommonCardHeader title={Sizes} span={SizeData} />
        <CardBody className='avatar-showcase'>
          <div className='avatars'>
            <div className='avatar'>
              <Image height={100} width={100} className='img-100 rounded-circle' src={`${ImagePath}/avtar/3.jpg`} alt='image' unoptimized/>
            </div>
            {SizeImages.map((item, index) => (
              <div className='avatar' key={index}>
                <Image height={item.height} width={item.width} className={`${item.className} rounded-circle`} src={`${ImagePath}${item.src}`} alt='image' unoptimized/>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
