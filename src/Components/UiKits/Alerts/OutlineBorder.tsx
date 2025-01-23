import { useState } from "react";
import { AlertOctagon, AlertTriangle } from "react-feather";
import { Alert, Button, Col } from "reactstrap";

const OutlineBorder = () => {
  const [visible, setVisible] = useState(true);
  const [visibleAlert, setVisibleAlert] = useState(true);
  const onDismiss = () => setVisible(!visible);
  const onDismissAlert = () => setVisibleAlert(!visibleAlert);
  return (
    <Col xl='6'>
      <Alert color='' isOpen={visible} className='txt-warning double-border border-warning alert-dismissible fade show alert-icons'>
        <AlertTriangle />
        <p className='txt-warning'>
          The <b className='txt-warning'>double-border</b>&<b className='txt-warning'>border-warning </b>class has the ability to generate on its own alerts.
        </p>
        <Button color='' close onClick={onDismiss}></Button>
      </Alert>
      <Alert color='transparent' isOpen={visibleAlert} className='alert txt-danger inset-border border-danger outline-2x alert-dismissible fade show alert-icons' toggle={onDismissAlert}>
        <AlertOctagon />
        <p className='txt-danger'>
          The <b className='txt-danger'>inset-border </b>with <b className='txt-danger'>border-danger </b>class has the ability to generate on its own alerts.
        </p>
        <Button color='' close onClick={onDismissAlert}></Button>
      </Alert>
    </Col>
  );
};

export default OutlineBorder;
