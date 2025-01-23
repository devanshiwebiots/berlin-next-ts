"use client";
import React from 'react'
import { Container, Row } from 'reactstrap'
import AspectRatios from './AspectRatios'
import CustomRatio from './CustomRatio'
import DefaultRatio from './DefaultRatio';

const RatiosContainer = () => {
  return (
    <Container fluid>
        <Row>
            <AspectRatios/>
            <CustomRatio/>
            <DefaultRatio/>
        </Row>
    </Container>
  )
}

export default RatiosContainer