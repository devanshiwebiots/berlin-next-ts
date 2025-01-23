"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import OffcanvasDirections from "./OffcanvasDirections/OffcanvasDirections";
import OffcanvasVariations from "./OffcanvasVariations/OffcanvasVariations";

const OffCanvasContainer = () => {
  return (
    <Container fluid>
      <div className='user-profile'>
        <Row>
          <OffcanvasDirections />
          <OffcanvasVariations/>
        </Row>
      </div>
    </Container>
  );
};

export default OffCanvasContainer;
