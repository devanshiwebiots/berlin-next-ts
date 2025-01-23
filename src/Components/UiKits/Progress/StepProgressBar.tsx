import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StepProgressTitle } from "@/Constant";
import { StepProgressData, steps } from "@/Data/Uikits/progress";
import { Check } from "react-feather";
import { Card, CardBody, Col } from "reactstrap";

const StepProgressBar = () => {
  return (
    <Col xxl='6' className='box-col-12'>
      <Card>
        <CommonCardHeader title={StepProgressTitle} span={StepProgressData} />
        <CardBody className='progress-showcase step-progress-wrapper'>
          <div className='step-progress-box'>
            <ul className='custom-scrollbar'>
              {steps.map((step) => (
                <li key={step.id}>
                  {step.icon}
                  <div className={`p-step ${step.active ? "active" : ""}`}>
                    {step.active ? <Check /> : <p>{step.id}</p>}
                    {step.active && <i className='bookmark-search' data-feather='check'></i>}
                  </div>
                  <h6>{step.label}</h6>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StepProgressBar;
