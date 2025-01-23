import React from 'react'
import { Row } from 'reactstrap'
import StockMarket from './StockMarket'
import Finance from './Finance'
import OrderStatusChart from './OrderStatusChart'
import MonthlySalesChart from './MonthlySalesChart'
import UsersChart from './UsersChart'

const OtherCharts = () => {
  return (
    <Row>
        <StockMarket/>
        <Finance/>
        <OrderStatusChart/>
        <MonthlySalesChart/>
        <UsersChart/>
    </Row>
  )
}

export default OtherCharts