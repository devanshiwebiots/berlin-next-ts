"use client";
import { ImagePath, WeAreComingSoon } from "@/Constant";
import { Container } from "reactstrap";
import CountdownData from "./CountdownData";

const ComingSoonSimpleContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="p-0">
        <div className="comingsoon">
          <div className="comingsoon-inner text-center">
          <img className='img-fluid for-light' src={`${ImagePath}/logo/logo-1.png`} alt='coming soon' />
          <img className='img-fluid for-dark' src={`${ImagePath}/logo/logo.png`} alt='coming soon' />
            <h5>{WeAreComingSoon}</h5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonSimpleContainer;
