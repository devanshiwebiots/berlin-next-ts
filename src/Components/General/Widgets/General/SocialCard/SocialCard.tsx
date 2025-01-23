import { ImagePath } from "@/Constant";
import { radialCommonOption, SocialData } from "@/Data/General/Widgets/General/GeneralData";
import { Fragment } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const SocialCard = () => {
  return (
    <Fragment>
      {SocialData.map((data, index) => (
        <Col key={index} xl={3} sm={6}>
          <Card className='social-widget widget-hover'>
            <CardBody>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                  <div className='social-icons'>
                    <img src={`${ImagePath}/${data.imgSrc}`} alt={`${data.name} icon`} />
                  </div>
                  <span className='f-w-500'>{data.name}</span>
                </div>
                <span className={`${data.changeClass} social-number`}>{data.change}</span>
              </div>
              <div className='social-content'>
                <div>
                  <h5 className='mb-1'>{data.count}</h5>
                  <span className='f-light f-w-500'>{data.metric}</span>
                </div>
                <div className='social-chart'>
                  <ReactApexChart options={radialCommonOption(data.radialData)} series={data.radialData.radialYseries} type='radialBar' height={150} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default SocialCard;
