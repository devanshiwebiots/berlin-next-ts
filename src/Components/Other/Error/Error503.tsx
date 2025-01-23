'use client'
import { Error6 } from "@/Data/Pages/Svgicons";
import { useRouter } from "next/navigation";
import { Button, Col, Container } from "reactstrap";

const Error503Container = () => {
  const BackToHomePage: string = "BACK TO HOME PAGE";
  const router = useRouter();

  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <div className="error-wrapper">
        <Container>
          <div className="svg-wrraper">
            <Error6 />
          </div>
          <Col md="8" className="offset-md-2">
            <h3>{"Page Not Found"}</h3>
            <p className="sub-content">{"The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved."}</p>
            <Button tag="a" color="primary" onClick={() => router.back()}>{BackToHomePage}</Button>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Error503Container;