import { Card, Col } from "reactstrap";
import CommonUserFooter from "./Common/CommonUserFooter";
import { CommonUserHeader } from "./Common/CommonUserHeader";
import { ProfileData2 } from "@/Data/Applications/Users";

const ThirdData = () => {
  return (
    <Col sm='12'>
      <Card>
        <div className='profile-img-style'>
          <CommonUserHeader />
          <hr />
          <p>{ProfileData2}</p>
          <CommonUserFooter listClass='mt-4' />
        </div>
      </Card>
    </Col>
  );
};

export default ThirdData;
