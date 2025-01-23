"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import CustomSwitch from "./CustomSwitch";
import Iconsswitch from "./Iconsswitch";
import UncheckedSwitch from "./UncheckedSwitch";
import BordersWithIcons from "./BordersWithIcons";
import DisabledOutlineSwitch from "./DisabledOutlineSwitch";
import SwitchSizing from "./SwitchSizing";
import VariationOfSwitches from "./VariationOfSwitches";
 

const SwitchesContainer = () => {
  return (
    <Container fluid>
      <Row>
         <CustomSwitch/>
         <Iconsswitch/>
         <UncheckedSwitch/>
         <BordersWithIcons/>
         <DisabledOutlineSwitch/>
         <VariationOfSwitches/>
         <SwitchSizing/>
      </Row>
    </Container>
  );
};

export default SwitchesContainer;
