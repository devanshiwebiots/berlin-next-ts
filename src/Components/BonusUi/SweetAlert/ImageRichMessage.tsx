import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, ImageRichMessageTitle } from "@/Constant";
import { ImageRichMessageSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const ImageRichMessage = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={ImageRichMessageTitle} span={ImageRichMessageSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="success" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImageRichMessage;
