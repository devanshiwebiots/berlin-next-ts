import { useState } from "react";
import { Button } from "reactstrap";
import { UXDesigner } from "../BasicModal/ScrollingModal/UXDesigner";
import WedDesigners from "../BasicModal/ScrollingModal/WedDesigner";
import CommonModal from "../Common/CommonModal";

const ScrollingContent = () => {
  const [scrollingModal, setScrollingModal] = useState(false);
  const scrollModaltoggle = () => setScrollingModal(!scrollingModal);

  return (
    <div className='col-md-6'>
      <div className='card height-equal'>
        <div className='card-header pb-0'>
          <h4>Scrolling Long Content Modal</h4>
          <p className='f-m-light mt-1'>
            You can also create a scrollable modal that allows scrolling the modal body by adding <code>modal-dialog-scrollable</code> to <code>modal-dialog</code>.
          </p>
        </div>
        <div className='card-body'>
          <Button color='secondary' onClick={scrollModaltoggle}>
            Scrolling Modal
          </Button>
          <CommonModal isOpen={scrollingModal} toggle={scrollModaltoggle} title='Scrolling Modal'>
            <WedDesigners />
            <UXDesigner />
          </CommonModal>
        </div>
      </div>
    </div>
  );
};

export default ScrollingContent;
