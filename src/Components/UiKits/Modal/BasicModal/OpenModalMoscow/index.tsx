import { BerlinSignUp, OpenModalForBerlin } from "@/Constant";
import { useState } from "react";
import { Button } from "reactstrap";
import CommonModal from "../../Common/CommonModal";
import { OpenModalForm } from "./OpenModalForm";

const OpenModalBerlin = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModaltoggle = () => setOpenModal(!openModal);

  return (
    <>
      <Button color='primary' onClick={openModaltoggle}>
        {OpenModalForBerlin}
      </Button>
      <CommonModal isOpen={openModal} toggle={openModaltoggle} modalBodyClassName='p-0' heading='Berlin SIGN-UP'>
        <div className='modal-toggle-wrapper social-profile text-start dark-sign-up'>
          <h4 className='modal-header justify-content-center border-0'>{BerlinSignUp}</h4>
          <OpenModalForm modal={openModaltoggle} />
        </div>
      </CommonModal>
    </>
  );
};

export default OpenModalBerlin;
