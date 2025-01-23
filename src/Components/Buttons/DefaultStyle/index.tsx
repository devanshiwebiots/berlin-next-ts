'use client'
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ActiveButtonsData, ActiveButtonsHeadingData, BoldBorderOutlineButtonsData, BoldBorderOutlineButtonsHeadingData, DefaultButtonsData, DefaultButtonsHeadingData, DisabledButtonsData, DisabledButtonsHeadingData, DisabledOutlineButtonsHeadingData, ExtraSmallButtonsData, ExtraSmallButtonsHeadingData, GraddienButtonsHeadingData, GradientButtonsData, LargeButtonsData, LargeButtonsHeadingData, OutlineButtonsData, OutlineButtonsHeadingData, OutlineDisabledButtonsData, OutlineExtraSmallButtonsData, OutlineExtraSmallButtonsHeadingData, OutlineLargeButtonsData, OutlineLargeButtonsHeadingData, OutlineSmallButtonsData, OutlineSmallButtonsHeadingData, SmallButtonsData, SmallButtonsHeadingData } from "@/Data/Buttons/DefaultStyle";
import { ActiveButtonsHeading, BoldBorderOutlineButtonsHeading, DefaultButtonsHeading, DisabledButtonsHeading, DisabledOutlineButtonsHeading, EdgeButtonsHeading, ExtraSmallButtonsHeading, FlatButtonHeading, GradientButtonsHeading, LargeButtonsHeading, OutlineButtonsHeading, OutlineExtraSmallButtonsHeading, OutlineLargeButtonsHeading, OutlineSmallButtonsHeading, SmallButtonsHeading } from "@/Constant";
import CommonButtons from "../CommonButtons/CommonButtons";
import DefualtCustomStateButton from "./CustomStateButton";
import { FlatButtonsData, FlateButtonsHeadingData } from "@/Data/Buttons/FlatStyle";
import { EdgeDefaultButtonsData, EdgeDefaultButtonsHeadingData } from "@/Data/Buttons/EdgeStyle";

const DefaultStyleContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <CommonButtons commonButtonsData={DefaultButtonsData} title={DefaultButtonsHeading} subTitle={DefaultButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlatButtonsData} title={FlatButtonHeading} subTitle={FlateButtonsHeadingData} />
          <CommonButtons className="btn-pill btn-air-primary" commonButtonsData={EdgeDefaultButtonsData} title={EdgeButtonsHeading} subTitle={EdgeDefaultButtonsHeadingData} />
          <CommonButtons commonButtonsData={LargeButtonsData} title={LargeButtonsHeading} subTitle={LargeButtonsHeadingData} />
          <CommonButtons commonButtonsData={ActiveButtonsData} title={ActiveButtonsHeading} subTitle={ActiveButtonsHeadingData} />
          <CommonButtons commonButtonsData={DisabledButtonsData} title={DisabledButtonsHeading} subTitle={DisabledButtonsHeadingData} className="text-white"/>
          <DefualtCustomStateButton />
          <CommonButtons commonButtonsData={OutlineButtonsData} title={OutlineButtonsHeading} subTitle={OutlineButtonsHeadingData} />
          <CommonButtons commonButtonsData={BoldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsHeading} subTitle={BoldBorderOutlineButtonsHeadingData}/>
          <CommonButtons commonButtonsData={OutlineLargeButtonsData} title={OutlineLargeButtonsHeading} subTitle={OutlineLargeButtonsHeadingData} />
          <CommonButtons commonButtonsData={GradientButtonsData} title={GradientButtonsHeading} subTitle={GraddienButtonsHeadingData} />
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultStyleContainer;
