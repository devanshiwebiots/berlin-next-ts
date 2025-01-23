import { DividerData } from "@/Data/Uikits/divider";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const HoriZontalDivider = () => {
  return (
    <>
      {DividerData.map((item, i) => {
        return (
          <Col xxl={4} md={6} className='box-col-6' key={i}>
            <Card>
              <CardHeader className='pb-0'>
                <h4>{item.title}</h4>
                <p className='mb-0 mt-1'>
                  Use <code>{item.description}</code> class for this divider.
                </p>
              </CardHeader>
              <CardBody className='main-divider'>
                {item.dividers?.map((divider, index) => (
                  <div key={index} className={`divider-body ${divider.type} ${divider.color}`}>
                    <div className={divider.icon ? `divider-p-${divider.bg}` : ""}>{
                    divider.icon && <i className={`fa ${divider.icon} f-20 me-2`}></i>}
                    {divider.text && <span className={`txt-${divider.color}`}>{divider.text}</span>}
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default HoriZontalDivider;
