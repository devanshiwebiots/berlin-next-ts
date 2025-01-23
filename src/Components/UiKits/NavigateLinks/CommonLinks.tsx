import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CommonLinksTitle, Href } from "@/Constant";
import { CommonLinksData, CommonLinksSubTitle } from "@/Data/Uikits/navigatelink/NavigateLinks";
import Link from "next/link";
import { Card, CardBody, Col, Row } from "reactstrap";
 

const CommonLinks = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CommonLinksTitle} span={CommonLinksSubTitle} />
        <CardBody>
          <Row className="g-3">
            {CommonLinksData.map((item, index) => (
              <Col sm="6" xxl="3" key={index}>
                <div className="card-wrapper border rounded-3 h-100">
                  <h6 className="sub-title">{item.title}</h6>
                  <div className={item.class}>
                    {item.links.map((data, index) => (
                      <p key={index}>
                        <Link className={data.class} href={Href}>
                          {data.text}
                        </Link>
                      </p>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CommonLinks;
