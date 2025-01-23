import { Container, Row } from "reactstrap";
import { useTour } from "@reactour/tour";
import { useEffect } from "react";
import UserProfileFirstStyle from "./UserProfileFirstStyle";
import UserProfileThirdStyle from "./UserProfileSecondStyle";
 
const TourMain = () => {
  const { setIsOpen } = useTour();
  useEffect(() => {
    var timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
