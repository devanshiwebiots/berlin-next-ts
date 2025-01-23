import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BackgroundColorOpacityTitle, Href } from "@/Constant";
import { BackgroundColorOpacityData, BackgroundColorOpacitySubTitle } from "@/Data/Uikits/navigatelink/NavigateLinks";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";
 
const BackgroundColorOpacity = () => {
  return (
    <Col xxl="3" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={BackgroundColorOpacityTitle} span={BackgroundColorOpacitySubTitle} />
        <CardBody className="bg-opacity-wrapper">
          {BackgroundColorOpacityData.map((item, index) => (
            <div className={`mb-3 p-2 ${item.class}`} key={index}>
              <Link href={Href}>This is {item.text} primary border</Link>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BackgroundColorOpacity;
