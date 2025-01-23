import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { Href, ImagePath, Notifications } from "@/Constant";
import { notificationsData } from "@/Data/General/Dashboard/Default";
import Link from "next/link";
import { Button, Card, CardBody, Col } from "reactstrap";

const Notification = () => {
  return (
    <Col xl={4} md={6} className='box-col-4'>
      <Card className='notification-card'>
        <DashboardCommonHeader title={Notifications} />
        <CardBody className='px-0'>
          {notificationsData.map((notification) => (
            <div className={`d-flex ${notification.bg ? notification.bg : ""} gap-3`} key={notification.id}>
              <div className='flex-shrink-0'>{notification.userImage ? <img className='img-40 b-r-6' src={`${ImagePath}/${notification.userImage}`} alt={notification.userName} /> : <span className={`bg-${notification.color}`}>{notification.userName[0]}</span>}</div>
              <div className='flex-grow-1'>
                <Link href={Href}>
                  <h6>{notification.action}</h6>
                </Link>
                <span>{`${notification.time} . ${notification.category}`}</span>
                {notification.buttons && (
                  <div className='d-flex gap-2 p-0 mt-2'>
                    <Button outline color='dark'>
                      Decline
                    </Button>
                    <Button color='primary'>Accept</Button>
                  </div>
                )}
              </div>
              {notification.buttons && (
                <div className='circle-dot-primary'>
                  <span></span>
                </div>
              )}
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Notification;
