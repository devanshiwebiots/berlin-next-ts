"use client";
import React from 'react'
import { Container } from 'reactstrap'
import ChartsCards from './ChartsCards'
import Barcharts from './BarCharts';
import SmallWidgetsCharts from './SmallWidgetsCharts';
import OtherCharts from './OtherCharts';

const ChartContainer = () => {
  return (
    <Container fluid>
        <ChartsCards/>
        <Barcharts/>
        <SmallWidgetsCharts/>
        <OtherCharts/>
    </Container>
  )
}

export default ChartContainer