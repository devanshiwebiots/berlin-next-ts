import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import SVG from "@/CommonComponent/SVG";
import { Href, RecentActivityTitle } from "@/Constant";
import { activities } from "@/Data/General/Dashboard/Default";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const RecentActiivity = () => {
  return (
    <Col xxl={3} xl={4} sm={6} className='box-col-4'>
      <Card>
        <DashboardCommonHeader title={RecentActivityTitle} />
        <CardBody className='card-body latest-activity'>
          <ul>
            {activities.map((activity) => (
              <li key={activity.id} className='d-flex align-items-center'>
                <div className={`flex-shrink-0 ${activity.bgColorClass}`}>
                  <SVG iconId={activity.icon} className={`stroke-icon stroke-${activity.iconcolor}`} />
                </div>
                <div className='flex-grow-1'>
                  <Link href={Href}>
                    <h6>{activity.title}</h6>
                  </Link>
                  <p>{activity.description}</p>
                </div>
                <span>{activity.time}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentActiivity;
