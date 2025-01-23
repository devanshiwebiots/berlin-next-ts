import React from 'react'
import { Row } from 'reactstrap'
import LiveProducts from './LiveProducts';
import TurnOverChart from './TurnOverChart';
import CryptoPrice from './CryptoPrice';
import CryptoAnotation from './CryptoAnotation';

const SmallWidgetsCharts = () => {
  return (
    <Row>
        <LiveProducts/>
        <TurnOverChart/>
        <CryptoPrice/>
        <CryptoAnotation/>
    </Row>
  )
}

export default SmallWidgetsCharts