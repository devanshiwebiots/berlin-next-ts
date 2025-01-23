import { Container, Row } from "reactstrap";
import UserProfileFirstStyle from "./UserProfileFirstStyle";
import UserProfileThirdStyle from "./UserProfileSecondStyle";
 
const TourMain = () => {

  return (
    <>
      <Container fluid>
        <div className="user-profile">
          <Row>
             <UserProfileFirstStyle/>
             <UserProfileThirdStyle/>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TourMain;
