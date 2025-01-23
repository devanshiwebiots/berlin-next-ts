import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { CurrentActivityTitle, ImagePath } from "@/Constant";
import { ActivitiesData } from "@/Data/General/Dashboard/EcommerceData";
import { Card, CardBody, Col } from "reactstrap";

const CurrentActivity = () => {
  return (
    <Col xxl={4} sm={6} className="box-col-6">
      <Card>
        <DashboardCommonHeader title={CurrentActivityTitle} />
        <CardBody className="timeline-card">
          <div className="activity-timeline">
            {ActivitiesData.map((activity, index) => (
              <div className="d-flex align-items-start" key={index}>
                <div className="activity-line"></div>
                <div className={`activity-dot-${activity.status.toLowerCase()}`}></div>
                <div className="flex-grow-1">
                  <p className="mt-0 todo-font">
                    <span className={`font-${activity.status.toLowerCase()}`}>{activity.date}</span> {activity.time}
                  </p>
                  <span className="f-w-600">{activity.title}</span>
                  <p className="mb-0 activity-text">{activity.description}</p>
                  {activity.images.length > 0 && (
                    <ul className="img-wrapper">
                      {activity.images.map((img, idx) => (
                        <li key={idx}>
                          <img className="img-fluid" src={`${ImagePath}/${img}`} alt="" />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <i className={`fa fa-circle circle-dot-${activity.status.toLowerCase()} pull-right`}></i>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CurrentActivity;
