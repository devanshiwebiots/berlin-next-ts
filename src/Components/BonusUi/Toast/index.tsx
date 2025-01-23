"use client";
import { Container, Row } from "reactstrap";
import LiveToast from "./LiveToast";
import MessagesToast from "./MessagesToast";
import ColorsSchemes from "./ColorsSchemes";
import StackingToasts from "./StackingToasts";
import TranslucentToasts from "./TranslucentToasts";
import DefaultToast from "./DefaultToast";
import UniqueToast from "./UniqueToast";
import ToastPlacement from "./ToastPlacement";

const ToastsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <MessagesToast />
        <LiveToast />
        <ColorsSchemes/>
        <StackingToasts/>
        <TranslucentToasts/>
        <DefaultToast/>
        <UniqueToast/>
        <ToastPlacement/>
      </Row>
    </Container>
  );
};

export default ToastsContainer;
