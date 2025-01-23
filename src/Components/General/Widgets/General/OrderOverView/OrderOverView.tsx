import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { breakdownData } from "@/Data/General/Widgets/General/GeneralData";
import { Card, CardBody, Col, Progress } from "reactstrap";

const OrderOverView = () => {
  return (
    <Col xxl={3} md={6} className='box-col-6'>
      <Card className='order-overview'>
        <DashboardCommonHeader title='Order Overview' />
        <CardBody>
          <div className='d-flex'>
            <h2 className='me-2'>($3,512,201)</h2>
            <h5>Total Revenue</h5>
          </div>
          {breakdownData.map((item, index) => (
            <div key={index} className='total-revenue'>
              <div className='d-flex'>
                <h6 className='me-2'>{item.value}</h6>
                <span>({item.label})</span>
              </div>
              <Progress className={`bg-light-${item.color}`} value={item.value} color={item.color} />
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderOverView;
