"use client";
import { Container, Row } from "reactstrap";
import BasicModalCard from "./BasicModal";
import SizeModalCard from "./SizesModal";
import FullScreenModals from "./FullScreenModal";
import CenteredModal from "./CenteredModal";
import ToggleBetweenModals from "./ToggleBetweenModals";
import StaticBackdropModal from "./StaticBackdropModal";
import BerlinCustomModals from "./BerlinCustomModals";
import ScrollingContent from "./ScrollingLongContent";
import Gridmodal from "./GridModal";

const ModalContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicModalCard />
        <SizeModalCard />
        <FullScreenModals />
        <CenteredModal />
        <ToggleBetweenModals/>
        <StaticBackdropModal/>
        <ScrollingContent/>
        <Gridmodal/>
        <BerlinCustomModals/>
      </Row>
    </Container>
  );
};

export default ModalContainer;
