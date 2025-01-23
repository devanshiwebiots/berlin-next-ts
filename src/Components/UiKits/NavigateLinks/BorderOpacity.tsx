import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BorderOpacityTitle, Href } from "@/Constant";
import { BorderOpacityData, BorderOpacitySubTitle } from "@/Data/Uikits/navigatelink/NavigateLinks";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";
 

const BorderOpacity = () => {
  return (
    <Col xxl="3" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={BorderOpacityTitle} span={BorderOpacitySubTitle} />
        <CardBody className="border-opacity-wrapper">
          {BorderOpacityData.map((item, index) => (
            <div className={`border p-2 ${item.class}`} key={index}>
              <Link href={Href}>This is {item.text} primary border</Link>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderOpacity;
