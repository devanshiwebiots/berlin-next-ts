import { DataForIcon } from "@/Data/Uikits/alert";
import Link from "next/link";
import { Alert, Card, CardBody, CardHeader, Col } from "reactstrap";

const AlertsWithIcons = () => {
  return (
    <Col xl='12'>
      <Card>
        <CardHeader className='pb-0'>
          <h4>Icons with Alerts</h4>
          <p className='f-m-light mt-1'>
            Use <code> alert alert-* </code> classes to add SVG icons to the alerts.
          </p>
        </CardHeader>
        <CardBody className='alerts-icon'>
          <div className='row gy-3'>
            {DataForIcon.map((alert, index) => (
              <div className={`col-xl-${index < 4 ? "6" : "6"}`} key={index}>
                <Alert color={alert.color} className='d-flex align-items-center'>
                  <div>
                    <i className={`stroke-${alert.color === "light" ? "dark" : alert.color} me-0`}>{alert.icon}</i>
                  </div>
                  <span className={`text-${alert.color === "light" ? "dark" : "light"}`}>
                    {alert.text.split(/(\".*?\")/g).map((part, idx) =>
                      part.startsWith('"') ? (
                        <strong key={idx} className={`text-${alert.color === "light" ? "dark" : "light"}`}>
                          {part.replace(/"/g, "")}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </span>
                </Alert>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertsWithIcons;
