import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MessageToasts } from "@/Constant";
import { MessageToastData, Toaststing } from "@/Data/BonusUi/Toast";
import { useState } from "react";
import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";

const MessagesToast = () => {
  const [toasts, setToasts] = useState(Toaststing);

  const handleShowToast = (id: string) => {
    setToasts(toasts.map((toast) => (toast.id === id ? { ...toast, isOpen: !toast.isOpen } : toast)));
  };

  return (
    <Col sm='12'>
      <Card>
        <CommonCardHeader title={MessageToasts} span={MessageToastData} />
        <CardBody className='common-flex common-toasts'>
          <Button color='success' onClick={() => handleShowToast("toast-success")} type='button'>
            Success Toast
          </Button>
          <Button color='warning' onClick={() => handleShowToast("toast-warning")} type='button'>
            Warning Toast
          </Button>
          <Button color='danger' onClick={() => handleShowToast("toast-error")} type='button'>
            Error Toast
          </Button>
          {toasts.map((toast) => (
            <div key={toast.id} className={`position-fixed ${toast.position} p-3`} style={{ zIndex: 9999 }}>
              <Toast isOpen={toast.isOpen}>    
                <div className={`d-flex justify-content-between align-items-center ${toast.alert}`}>
                  <ToastBody>
                    {toast.icon}
                    {toast.message}
                  </ToastBody>
                </div>
              </Toast>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default MessagesToast;
