import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, LinkUnderlinesTitle } from "@/Constant";
import { LinkUnderlinesData, LinkUnderlinesSubTitle } from "@/Data/Uikits/navigatelink/NavigateLinks";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const LinkUnderlines = () => {
  return (
    <Col xxl='3' sm='6'>
      <Card className='height-equal'>
        <CommonCardHeader title={LinkUnderlinesTitle} span={LinkUnderlinesSubTitle} />
        <CardBody>
          {LinkUnderlinesData.map((item, index) => (
            <p key={index}>
              <Link className={`link-underline-${item}`} href={Href}>
                {item} underline
              </Link>
            </p>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinkUnderlines;
