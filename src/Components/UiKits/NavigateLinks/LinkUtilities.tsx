import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, LinkUtilitiesTitle } from "@/Constant";
import { LinkUtilitiesData, LinkUtilitiesSubTitle } from "@/Data/Uikits/navigatelink/NavigateLinks";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";
 
const LinkUtilities = () => {
  return (
    <Col xxl="3" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={LinkUtilitiesTitle} span={LinkUtilitiesSubTitle} />
        <CardBody>
          {LinkUtilitiesData.map((item, index) => (
            <p key={index}>
              <Link className={`link-${item} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#!`} href={Href}>
                Link {item}
              </Link>
            </p>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinkUtilities;
