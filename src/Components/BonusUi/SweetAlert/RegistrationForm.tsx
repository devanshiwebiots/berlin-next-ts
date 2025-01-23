import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClickIt, RegistrationFormTitle } from "@/Constant";
import { RegistrationFormSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import { LoginFormResult } from "@/Types/BonusUiType";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const RegistrationForm = () => {
  const handleAlert = async () => {
    let usernameInput: HTMLInputElement;
    let passwordInput: HTMLInputElement;

    Swal.fire<LoginFormResult>({
      title: "Registration Form",
      html: `
    <input type="text" id="username" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">
  `,
      confirmButtonText: "Sign in",
      focusConfirm: false,
      didOpen: () => {
        const popup = Swal.getPopup()!;
        usernameInput = popup.querySelector("#username") as HTMLInputElement;
        passwordInput = popup.querySelector("#password") as HTMLInputElement;
        usernameInput.onkeyup = (event) => event.key === "Enter" && Swal.clickConfirm();
        passwordInput.onkeyup = (event) => event.key === "Enter" && Swal.clickConfirm();
      },
      preConfirm: () => {
        const username = usernameInput.value;
        const password = passwordInput.value;
        if (!username || !password) {
          Swal.showValidationMessage(`Please enter username and password`);
        }
        return { username, password };
      },
    });
  };

  return (
    <Col xxl="3" xl="4" sm="6" xs="12" className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={RegistrationFormTitle} span={RegistrationFormSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="m-0" onClick={handleAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RegistrationForm;
