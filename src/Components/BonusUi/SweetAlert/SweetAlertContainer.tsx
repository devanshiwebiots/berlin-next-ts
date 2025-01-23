"use client";
import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import PositionAlert from "./Common/PositionAlert";
import { PositionBottomEndTitle, PositionBottomStartTitle, PositionTopEndTitle, PositionTopStartTitle } from "@/Constant";
import { PositionBottomEndSubTitle, PositionBottomStartSubTitle, PositionTopEndSubTitle, PositionTopStartSubTitle } from "@/Data/BonusUi/SweetAlert/SweetAlert";
import BasicAlert from "./BasicAlert";
import TitleWithText from "./TitleWithText";
import DismissAlert from "./DismissAlert";
import RichHtmlAlert from "./RichHtmlAlert";
import ConfirmationAlert from "./ConfirmationAlert";
import AnimatedAlert from "./AnimatedAlert";
import ConfirmationWithTriggers from "./ConfirmationWithTriggers";
import ImageRichMessage from "./ImageRichMessage";
import AutoCloseTimer from "./AutoCloseTimer";
import AJAXRequestAlert from "./AJAXRequestAlert";
import ConfirmationWithApprovals from "./ConfirmationWithApprovals";
import ComprehensiveRTLSupport from "./ComprehensiveRTLSupport";
import PasswordGeneratorAlert from "./PasswordGeneratorAlert";
import DateAlert from "./DateAlert";
import CustomPositionedDialog from "./CustomPositionedDialog";
import RegistrationForm from "./RegistrationForm";
 

const SweetAlertContainer = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <PositionAlert position="top-start" color="secondary" title={PositionTopStartTitle} span={PositionTopStartSubTitle} />
          <PositionAlert position="top-end" color="success" title={PositionTopEndTitle} span={PositionTopEndSubTitle} />
          <PositionAlert position="bottom-start" color="warning" title={PositionBottomStartTitle} span={PositionBottomStartSubTitle} />
          <PositionAlert position="bottom-end" color="primary" title={PositionBottomEndTitle} span={PositionBottomEndSubTitle} />
          <BasicAlert/>
          <TitleWithText/>
          <DismissAlert/>
          <RichHtmlAlert/>
          <ConfirmationAlert/>
          <AnimatedAlert/>
          <ConfirmationWithTriggers/>
          <ImageRichMessage/>
          <AutoCloseTimer/>
          <AJAXRequestAlert/>
          <ConfirmationWithApprovals/>
          <ComprehensiveRTLSupport/>
          <PasswordGeneratorAlert/>
          <DateAlert/>
          <CustomPositionedDialog/>
          <RegistrationForm/>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SweetAlertContainer;
