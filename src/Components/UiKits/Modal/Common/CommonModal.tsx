import { Close, SaveChanges } from "@/Constant";
import { CommonModalType } from "@/Types/UikitsType";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const CommonModal:React.FC<CommonModalType> = ({backdrop, centered, size, isOpen, toggle, title, onClosed, sizeTitle, fullTitle, modalBodyClassName, children } ) => {
  return (
    <Modal backdrop={backdrop} centered={centered} size={size} isOpen={isOpen} toggle={toggle} onClosed={onClosed}>
      {(title || sizeTitle || fullTitle) && (
        <div className="modal-header" onClick={toggle}>
          {title && <h4 className="modal-title">{title}</h4>}
          {sizeTitle && <h4>{sizeTitle}</h4>}
          {fullTitle && <h4 className="modal-title">{fullTitle}</h4>}
          <Button close></Button>
        </div>
      )}
      <ModalBody className={modalBodyClassName ? modalBodyClassName : ""}>{children}</ModalBody>
      {(title || fullTitle) && (
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>{Close}</Button>
          <Button color="primary">{SaveChanges}</Button>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default CommonModal;