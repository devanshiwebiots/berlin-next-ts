"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Articals from "./Articals";
import Questions from "./Questions";
import FeaturesTutorial from "../Knowledgebase/FeaturesTutorial";
import ArticalAndVideo from "../Knowledgebase/ArticalVideo";
 
const FaqContainer = () => {
  return (
    <Container fluid>
      <div className='faq-wrap'>
        <Row>
          <Articals />
          <Questions />
          <FeaturesTutorial />
          <ArticalAndVideo/>
        </Row>
      </div>
    </Container>
  );
};

export default FaqContainer;
