import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { Href, ImagePath, SupportMailboxTitle } from "@/Constant";
import { supportMessages } from "@/Data/General/Dashboard/EcommerceData";
import Link from "next/link";
import { Button, Card, CardBody, Col } from "reactstrap";

const SupportMailbox = () => {
  return (
    <Col xxl={4} sm={6} className="box-col-6">
      <Card>
        <DashboardCommonHeader title={SupportMailboxTitle} />
        <CardBody className="support-box-card">
          {supportMessages.map((msg, index) => (
            <div className="d-flex gap-3" key={index}>
              <div className="flex-shrink-0">
                <img src={`${ImagePath}/${msg.image}`} alt="user" />
              </div>
              <div className="flex-grow-1">
                <Link href={Href}>
                  <h6>{msg.name}</h6>
                </Link>
                <p>{msg.message}</p>
              </div>
              <Button color="" className={`${msg.Bgcolor} f-w-500`}>
                {msg.time}
              </Button>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default SupportMailbox;
