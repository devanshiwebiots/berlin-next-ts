import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AJAXRequestAlertTitle, ClickIt } from "@/Constant";
import { AJAXRequestAlertSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const AJAXRequestAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
              https://api.github.com/users/${login}
            `;
          const response = await fetch(githubUrl);
          if (!response.ok) {
            return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
              Request failed: ${error}
            `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };
  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={AJAXRequestAlertTitle} span={AJAXRequestAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AJAXRequestAlert;
